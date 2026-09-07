"use client";

import { motion } from "framer-motion";

export default function FadeOnHover({
  children,
  className = "",
  intensity = 0.97,
  scale = 1.01,
}) {
  return (
    <motion.div
      className={className}
      whileHover={{ opacity: intensity, scale }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
