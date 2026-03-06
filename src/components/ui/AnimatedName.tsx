"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const NEUTRAL = "#7B7B7B";
const PRIMARY = "#E50041";

type Phase = 0 | 1 | 2;

export function AnimatedName() {
  const [phase, setPhase] = useState<Phase>(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -17% 0px" });

  useEffect(() => {
    if (!inView) return;
    const highlight = setTimeout(() => setPhase(1), 0);
    const collapse = setTimeout(() => setPhase(2), 1200);
    return () => {
      clearTimeout(highlight);
      clearTimeout(collapse);
    };
  }, [inView]);

  const colorTransition = { duration: 0.3, ease: "easeInOut" as const };
  const collapseTransition = { duration: 0.3, ease: "easeInOut" as const };

  const collapseAnimate =
    phase >= 2
      ? { maxWidth: "0px", opacity: 0 }
      : { maxWidth: "400px", opacity: 1 };

  return (
    <span ref={ref} className="inline-flex items-baseline">
      <motion.span
        initial={{ color: NEUTRAL }}
        animate={{ color: phase >= 1 ? PRIMARY : NEUTRAL }}
        transition={colorTransition}
      >
        F
      </motion.span>
      <motion.span
        initial={{ maxWidth: "400px", opacity: 1 }}
        animate={collapseAnimate}
        transition={collapseTransition}
        style={{ overflow: "hidden", display: "inline-block", whiteSpace: "nowrap" }}
      >
        ederico&nbsp;
      </motion.span>
      <motion.span
        initial={{ maxWidth: "400px", opacity: 1 }}
        animate={collapseAnimate}
        transition={collapseTransition}
        style={{ overflow: "hidden", display: "inline-block", whiteSpace: "nowrap" }}
      >
        Co
      </motion.span>
      <motion.span
        initial={{ color: NEUTRAL }}
        animate={{ color: phase >= 1 ? PRIMARY : NEUTRAL }}
        transition={colorTransition}
      >
        hen
      </motion.span>
      <motion.span
        initial={{ maxWidth: "400px", opacity: 1 }}
        animate={collapseAnimate}
        transition={collapseTransition}
        style={{ overflow: "hidden", display: "inline-block", whiteSpace: "nowrap" }}
      >
        &nbsp;Correa
      </motion.span>
    </span>
  );
}
