"use client";

import { useEffect, useRef } from "react";

// One playing video at a time.
const videoRegistry = new Set<HTMLVideoElement>();

const POSTER_PREFETCH_ROOT_MARGIN = "900px 0px";

const PLAYBACK_THRESHOLD = 0.5;

type AutoplayVideoProps = {
  src: string;
  className?: string;
  poster?: string;
  priority?: boolean;
  onCanPlay?: () => void;
  minPlayDelayMs?: number;
};

export function AutoplayVideo({
  src,
  className,
  poster,
  priority = false,
  onCanPlay,
  minPlayDelayMs = 0,
}: AutoplayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const onCanPlayRef = useRef(onCanPlay);
  useEffect(() => {
    onCanPlayRef.current = onCanPlay;
  }, [onCanPlay]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    videoRegistry.add(video);
    const mountedAt = performance.now();
    let isInView = false;
    let delayedPlayTimeoutId: number | undefined;

    const clearDelayedPlay = () => {
      if (delayedPlayTimeoutId !== undefined) {
        window.clearTimeout(delayedPlayTimeoutId);
        delayedPlayTimeoutId = undefined;
      }
    };

    const playVideo = () => {
      if (!isInView) return;
      videoRegistry.forEach((v) => {
        if (v !== video) v.pause();
      });
      video.play().catch(() => {});
    };

    const schedulePlay = () => {
      clearDelayedPlay();
      const elapsedMs = performance.now() - mountedAt;
      const remainingDelayMs = Math.max(0, minPlayDelayMs - elapsedMs);
      if (remainingDelayMs === 0) {
        playVideo();
        return;
      }
      delayedPlayTimeoutId = window.setTimeout(() => {
        delayedPlayTimeoutId = undefined;
        playVideo();
      }, remainingDelayMs);
    };

    let posterObserver: IntersectionObserver | null = null;

    if (priority) {
      if (poster) {
        video.poster = poster;
      }
      if (video.readyState >= 3) {
        onCanPlayRef.current?.();
      }
      // Eager first frame; visibility is still driven by playObserver below so the
      // hero resumes after other videos (showcase) pause it via the registry.
      if (minPlayDelayMs === 0) {
        video.play().catch(() => {});
      }
    } else if (poster) {
      posterObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !video.poster) {
            video.poster = poster;
            posterObserver?.disconnect();
            posterObserver = null;
          }
        },
        { rootMargin: POSTER_PREFETCH_ROOT_MARGIN, threshold: 0 }
      );
      posterObserver.observe(video);
    }

    // Always observe visibility — including priority hero. Without this, showcase
    // videos pause the hero via the registry but nothing calls play() when the
    // user scrolls back to the hero.
    const playObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isInView = true;
          schedulePlay();
        } else {
          isInView = false;
          clearDelayedPlay();
          video.pause();
        }
      },
      { threshold: PLAYBACK_THRESHOLD }
    );

    playObserver.observe(video);

    return () => {
      clearDelayedPlay();
      posterObserver?.disconnect();
      playObserver.disconnect();
      videoRegistry.delete(video);
    };
  }, [priority, poster, minPlayDelayMs]);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      preload={priority ? "auto" : "none"}
      onCanPlay={() => onCanPlayRef.current?.()}
      className={className}
    />
  );
}
