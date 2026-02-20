"use client";

import { useRef, useState, useEffect, type ReactNode } from "react";

type RevealOnScrollProps = {
  children: ReactNode;
  /** Delay before animation starts (ms). Use for staggered reveals. */
  delay?: number;
  /** Only animate once when first entering view */
  once?: boolean;
  /** Fraction of element that must be visible to trigger (0–1) */
  threshold?: number;
  className?: string;
};

export function RevealOnScroll({
  children,
  delay = 0,
  once = true,
  threshold = 0.3,
  className,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
