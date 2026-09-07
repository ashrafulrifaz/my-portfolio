'use client'
import { useState, useEffect } from "react";

export default function LoadingAnimation({
  name = "ASHRAFUL",
  duration = 2200,
  onComplete = () => {},
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = performance.now();
    let frameId;

    const tick = (now) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (pct < 100) {
        frameId = requestAnimationFrame(tick);
      } else {
        onComplete();
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [duration, onComplete]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: 420,
        display: "flex",
        inset: 0,
        position: "fixed",
        zIndex: 9999,
        alignItems: "center",
        justifyContent: "center",
        background: "#FCE9D3",
        fontFamily:
          "'Helvetica Neue', Helvetica, Arial, sans-serif",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            position: "relative",
            fontSize: "clamp(32px, 6vw, 56px)",
            fontWeight: 800,
            letterSpacing: "0.02em",
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          {/* Base layer: unfilled name, low-contrast tone */}
          <span aria-hidden="true" style={{ color: "#E8B79A" }}>
            {name}
          </span>

          {/* Overlay layer: filled name, clipped to progress width */}
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              color: "#7A4632",
              width: `${progress}%`,
              overflow: "hidden",
              whiteSpace: "nowrap",
              transition: "width 80ms linear",
            }}
          >
            {name}
          </span>
        </div>

        <div
          role="status"
          aria-live="polite"
          style={{
            marginTop: 20,
            fontSize: 15,
            fontWeight: 500,
            color: "#7A4632",
          }}
        >
          {progress}%
        </div>
      </div>
    </div>
  );
}