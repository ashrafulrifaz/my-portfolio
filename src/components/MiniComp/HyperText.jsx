"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fjallaOne } from "@/lib/fonts";

const ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const getRandomChar = () =>
  ALPHABETS[Math.floor(Math.random() * ALPHABETS.length)];

export function HyperText({
  children,
  className = ``,
  duration = 800,
  animateOnHover = true,
  startOnView = false,
}) {
  const text = typeof children === "string" ? children : "";
  const [displayText, setDisplayText] = useState(text.split(""));
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef(null);

  const triggerAnimation = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    let iteration = 0;
    const totalIterations = 10;

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText((prev) =>
        prev.map((char, idx) => {
          if (char === " ") return " ";
          if (idx < iteration) return text[idx];
          return getRandomChar();
        })
      );

      iteration += 1 / (totalIterations / text.length);

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
        setDisplayText(text.split(""));
        setIsAnimating(false);
      }
    }, duration / (totalIterations * 2));
  };

  useEffect(() => {
    if (startOnView) {
      triggerAnimation();
    }
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`inline-flex ${className}`}
      onMouseEnter={animateOnHover ? triggerAnimation : undefined}
    >
      <AnimatePresence mode="popLayout">
        {displayText.map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="font-mono"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}