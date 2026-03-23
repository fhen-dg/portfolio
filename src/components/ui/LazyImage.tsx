"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type LazyImageProps = {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
};

/** Defers mounting `Image` until near viewport (stricter than native lazy). */
export function LazyImage({ src, alt, sizes, className }: LazyImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: "700px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0">
      {shouldRender && (
        <Image src={src} alt={alt} fill sizes={sizes} className={className} />
      )}
    </div>
  );
}
