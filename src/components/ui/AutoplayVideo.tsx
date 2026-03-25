"use client";

import { Pause, Play } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

// One playing video at a time.
const videoRegistry = new Set<HTMLVideoElement>();

const POSTER_PREFETCH_ROOT_MARGIN = "900px 0px";

const PLAYBACK_THRESHOLD = 0.5;
const CONTROL_HIDE_DELAY_MS = 2000;

type AutoplayVideoProps = {
  src: string;
  className?: string;
  poster?: string;
  priority?: boolean;
  onCanPlay?: () => void;
  minPlayDelayMs?: number;
};

function pauseOtherVideos(currentVideo: HTMLVideoElement) {
  videoRegistry.forEach((video) => {
    if (video !== currentVideo) {
      video.pause();
    }
  });
}

export function AutoplayVideo({
  src,
  className,
  poster,
  priority = false,
  onCanPlay,
  minPlayDelayMs = 0,
}: AutoplayVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const onCanPlayRef = useRef(onCanPlay);
  const isInViewRef = useRef(false);
  const manuallyPausedInViewRef = useRef(false);
  const hideControlsTimeoutRef = useRef<number | undefined>(undefined);
  const [isFinePointerDevice, setIsFinePointerDevice] = useState(false);
  const [isControlVisible, setIsControlVisible] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    onCanPlayRef.current = onCanPlay;
  }, [onCanPlay]);

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return;
    }

    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updatePointerMode = () => {
      setIsFinePointerDevice(mediaQuery.matches);
      if (!mediaQuery.matches) {
        setIsControlVisible(true);
      }
    };

    updatePointerMode();
    mediaQuery.addEventListener("change", updatePointerMode);

    return () => {
      mediaQuery.removeEventListener("change", updatePointerMode);
    };
  }, []);

  const syncPlaybackState = () => {
    const video = videoRef.current;
    if (!video) return;

    setCurrentTime(video.currentTime);
    setDuration(Number.isFinite(video.duration) ? video.duration : 0);
    setIsPlaying(!video.paused && !video.ended);
  };

  const clearHideControlsTimeout = useCallback(() => {
    if (hideControlsTimeoutRef.current !== undefined) {
      window.clearTimeout(hideControlsTimeoutRef.current);
      hideControlsTimeoutRef.current = undefined;
    }
  }, []);

  const showControls = useCallback(() => {
    setIsControlVisible(true);
  }, []);

  const scheduleHideControls = useCallback(() => {
    const container = containerRef.current;
    const video = videoRef.current;

    clearHideControlsTimeout();

    if (!container || !video) return;
    if (!isFinePointerDevice || !isInViewRef.current || video.paused) return;
    if (container.matches(":focus-within")) return;

    hideControlsTimeoutRef.current = window.setTimeout(() => {
      const activeContainer = containerRef.current;
      const activeVideo = videoRef.current;

      if (!activeContainer || !activeVideo) return;
      if (!activeVideo.paused && !activeContainer.matches(":focus-within")) {
        setIsControlVisible(false);
      }
    }, CONTROL_HIDE_DELAY_MS);
  }, [clearHideControlsTimeout, isFinePointerDevice]);

  const handleTogglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      manuallyPausedInViewRef.current = false;
      showControls();
      pauseOtherVideos(video);
      video.play().catch(() => {});
      return;
    }

    manuallyPausedInViewRef.current = true;
    showControls();
    video.pause();
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    videoRegistry.add(video);
    const mountedAt = performance.now();
    let delayedPlayTimeoutId: number | undefined;

    const clearDelayedPlay = () => {
      if (delayedPlayTimeoutId !== undefined) {
        window.clearTimeout(delayedPlayTimeoutId);
        delayedPlayTimeoutId = undefined;
      }
    };

    const playVideo = () => {
      if (!isInViewRef.current || manuallyPausedInViewRef.current) return;
      pauseOtherVideos(video);
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
        pauseOtherVideos(video);
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
          isInViewRef.current = true;
          showControls();
          schedulePlay();
        } else {
          isInViewRef.current = false;
          manuallyPausedInViewRef.current = false;
          clearDelayedPlay();
          clearHideControlsTimeout();
          setIsControlVisible(true);
          video.pause();
        }
      },
      { threshold: PLAYBACK_THRESHOLD }
    );

    playObserver.observe(video);

    return () => {
      clearDelayedPlay();
      clearHideControlsTimeout();
      posterObserver?.disconnect();
      playObserver.disconnect();
      videoRegistry.delete(video);
    };
  }, [clearHideControlsTimeout, minPlayDelayMs, poster, priority, showControls]);

  useEffect(() => {
    if (!isFinePointerDevice || !isPlaying || manuallyPausedInViewRef.current) {
      clearHideControlsTimeout();
      setIsControlVisible(true);
      return;
    }

    scheduleHideControls();

    return () => {
      clearHideControlsTimeout();
    };
  }, [clearHideControlsTimeout, isFinePointerDevice, isPlaying, scheduleHideControls]);

  const progress = duration > 0 ? currentTime / duration : 0;
  const progressAngle = `${Math.min(Math.max(progress, 0), 1) * 360}deg`;

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full"
      onMouseEnter={() => {
        if (!isFinePointerDevice) return;
        showControls();
        scheduleHideControls();
      }}
      onMouseMove={() => {
        if (!isFinePointerDevice) return;
        showControls();
        scheduleHideControls();
      }}
      onFocusCapture={() => {
        showControls();
        clearHideControlsTimeout();
      }}
      onBlurCapture={() => {
        scheduleHideControls();
      }}
    >
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload={priority ? "auto" : "none"}
        onCanPlay={() => {
          syncPlaybackState();
          onCanPlayRef.current?.();
        }}
        onLoadedMetadata={syncPlaybackState}
        onTimeUpdate={syncPlaybackState}
        onPlay={() => {
          syncPlaybackState();
          scheduleHideControls();
        }}
        onPause={() => {
          syncPlaybackState();
          showControls();
          clearHideControlsTimeout();
        }}
        className={className}
      />

      <button
        type="button"
        onClick={handleTogglePlayback}
        aria-label={isPlaying ? "Pause video" : "Play video"}
        aria-pressed={isPlaying}
        className={`group absolute bottom-3 left-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-transparent transition-[opacity,transform] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black/20 ${
          isControlVisible ? "opacity-100" : "pointer-events-none opacity-0"
        } lg:hover:scale-[1.04]`}
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(#E50041 ${progressAngle}, rgba(255,255,255,0.22) ${progressAngle})`,
          }}
        />
        <span className="relative flex h-[42px] w-[42px] items-center justify-center rounded-full bg-black/70 text-white shadow-[0_10px_25px_rgba(0,0,0,0.35)] backdrop-blur-md transition-colors duration-200 lg:group-hover:bg-black/82">
          {isPlaying ? (
            <Pause className="h-4 w-4 fill-current" strokeWidth={2.4} />
          ) : (
            <Play className="ml-[1px] h-4 w-4 fill-current" strokeWidth={2.4} />
          )}
        </span>
      </button>
    </div>
  );
}
