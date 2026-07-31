"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const GRID_PRESETS = {
  "6x4": { rows: 4, cols: 6 },
  "8x8": { rows: 8, cols: 8 },
  "8x3": { rows: 3, cols: 8 },
  "4x6": { rows: 6, cols: 4 },
  "3x8": { rows: 8, cols: 3 },
};

export function PixelImage({
  src,
  alt = "",
  width,
  height,
  grid = "4x6",
  customGrid,
  grayscaleAnimation = false,
  className = "",
  imageClassName = "",
  blurAmount = 14,
}) {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { rows, cols } = customGrid || GRID_PRESETS[grid] || GRID_PRESETS["4x6"];

  const cells = Array.from({ length: rows * cols });

  useEffect(() => {
    const timeout = setTimeout(() => setIsRevealed(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: width && height ? `${width} / ${height}` : undefined }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Pixel grid reveal (plays once on mount) */}
      <div
        className="grid w-full h-full"
        style={{
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
        }}
      >
        {cells.map((_, i) => {
          const row = Math.floor(i / cols);
          const col = i % cols;

          return (
            <div key={i} className="relative overflow-hidden">
              <AnimatePresence>
                {isRevealed && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.6,
                      filter: grayscaleAnimation ? "grayscale(1)" : "grayscale(0)",
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      filter: "grayscale(0)",
                    }}
                    transition={{
                      duration: 0.5,
                      delay: (row + col) * 0.04,
                      ease: "easeOut",
                    }}
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url(${src})`,
                      backgroundSize: `${cols * 100}% ${rows * 100}%`,
                      backgroundPosition: `${(col / (cols - 1 || 1)) * 100}% ${(row / (rows - 1 || 1)) * 100}%`,
                    }}
                  />
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Hidden Image, kept purely for Next.js preload/caching */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="hidden"
        priority
      />

      {/* Liquid glass blur layer (hover, after reveal) */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ backdropFilter: "blur(0px)" }}
        animate={{
          backdropFilter: isHovered ? `blur(${blurAmount}px)` : "blur(0px)",
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          WebkitBackdropFilter: isHovered ? `blur(${blurAmount}px)` : "blur(0px)",
        }}
      />

      {/* Glass tint */}
      <motion.div
        className="absolute inset-0 bg-white/10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />

      {/* Glossy diagonal sweep */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(115deg, transparent 20%, rgba(255,255,255,0.35) 40%, rgba(255,255,255,0.1) 50%, transparent 65%)",
        }}
        initial={{ x: "-100%", opacity: 0 }}
        animate={{
          x: isHovered ? "100%" : "-100%",
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      />

      {/* Inner glass edge highlight */}
      <motion.div
        className="absolute inset-0 rounded-[inherit] pointer-events-none"
        style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.3)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />
    </div>
  );
}