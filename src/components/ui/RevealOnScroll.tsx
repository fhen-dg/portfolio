"use client";

import { useRef, useState, useEffect, type CSSProperties, type ReactNode } from "react";

export type RevealVariant = "slide-up" | "fade-blur";

type RevealOnScrollProps = {
  children: ReactNode;
  delay?: number;
  once?: boolean;
  /** 0 = any pixel visible; default 0.3 needs 30% (tall blocks may never hit). */
  threshold?: number;
  variant?: RevealVariant;
  durationMs?: number;
  className?: string;
};

function revealStyles(
  variant: RevealVariant,
  isVisible: boolean,
  delay: number,
  durationMs: number
): CSSProperties {
  const dur = `${durationMs}ms`;
  const delayStr = `${delay}ms`;

  if (variant === "fade-blur") {
    return {
      opacity: isVisible ? 1 : 0,
      filter: isVisible ? "blur(0px)" : "blur(12px)",
      transform: "none",
      transition: `opacity ${dur} ease-in-out ${delayStr}, filter ${dur} ease-in-out ${delayStr}`,
    };
  }

  return {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(20px)",
    transition: `opacity ${dur} ease-out ${delayStr}, transform ${dur} ease-out ${delayStr}`,
  };
}

export function RevealOnScroll({
  children,
  delay = 0,
  once = true,
  threshold = 0.3,
  variant = "slide-up",
  durationMs = 600,
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
      style={revealStyles(variant, isVisible, delay, durationMs)}
    >
      {children}
    </div>
  );
}
