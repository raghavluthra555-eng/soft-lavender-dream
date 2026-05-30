import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Two-act cinematic welcome.
 * Act I  (0 → 2.4s): radial bloom + monogram "M" draws in.
 * Act II (2.4 → 5s): morphs into wordmark "Meghana." then dissolves up.
 */
export function Intro() {
  const [phase, setPhase] = useState<0 | 1 | 2>(0);

  useEffect(() => {
    // Lock scroll while playing
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t1 = setTimeout(() => setPhase(1), 2400);
    const t2 = setTimeout(() => setPhase(2), 5000);
    const t3 = setTimeout(() => {
      document.body.style.overflow = prev;
    }, 5200);
    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3);
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <AnimatePresence>
      {phase < 2 && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, transition: { duration: 0.7, ease: [0.7, 0, 0.3, 1] } }}
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          {/* Bloom */}
          <motion.div
            aria-hidden
            initial={{ scale: 0.2, opacity: 0 }}
            animate={{ scale: 2.4, opacity: [0, 0.9, 0.5] }}
            transition={{ duration: 2.4, ease: [0.2, 0.7, 0.2, 1] }}
            className="absolute h-[60vmin] w-[60vmin] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, color-mix(in oklab, var(--lavender) 60%, transparent), transparent 70%)",
            }}
          />

          {/* Orbiting sparkle ring */}
          <motion.svg
            aria-hidden
            viewBox="0 0 400 400"
            className="absolute h-[70vmin] w-[70vmin] text-lavender-deep/50"
            initial={{ rotate: -30, opacity: 0 }}
            animate={{ rotate: 60, opacity: phase === 0 ? 0.8 : 0 }}
            transition={{ duration: 2.6, ease: "linear" }}
          >
            <circle cx="200" cy="200" r="170" fill="none" stroke="currentColor" strokeDasharray="2 10" />
            <circle cx="200" cy="200" r="120" fill="none" stroke="currentColor" strokeDasharray="2 14" />
          </motion.svg>

          {/* Act I — Monogram */}
          <AnimatePresence>
            {phase === 0 && (
              <motion.div
                key="mono"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.15, filter: "blur(8px)", transition: { duration: 0.6 } }}
                transition={{ duration: 1.1, ease: [0.2, 0.7, 0.2, 1] }}
                className="relative"
              >
                <svg width="180" height="180" viewBox="0 0 180 180" aria-hidden>
                  <defs>
                    <linearGradient id="introGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="var(--lavender)" />
                      <stop offset="100%" stopColor="var(--lavender-deep)" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M30 145 L30 35 L90 110 L150 35 L150 145"
                    fill="none"
                    stroke="url(#introGrad)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.8, ease: [0.7, 0, 0.3, 1], delay: 0.15 }}
                  />
                  <motion.circle
                    cx="160" cy="148" r="4"
                    fill="var(--lavender-deep)"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.9, duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
                  />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Act II — Wordmark */}
          <AnimatePresence>
            {phase === 1 && (
              <motion.div
                key="word"
                initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
                className="relative flex flex-col items-center gap-3 text-center px-6"
              >
                <motion.div
                  initial={{ opacity: 0, letterSpacing: "0.6em" }}
                  animate={{ opacity: 1, letterSpacing: "0.3em" }}
                  transition={{ duration: 1.4, ease: [0.2, 0.7, 0.2, 1] }}
                  className="text-[10px] sm:text-xs uppercase text-muted-foreground"
                >
                  UI · UX · Designer
                </motion.div>
                <div
                  className="font-display italic text-[clamp(2.8rem,10vw,6rem)] leading-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, var(--foreground), var(--lavender-deep))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Meghana<span className="text-lavender-deep not-italic">.</span>
                </div>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.2, ease: [0.7, 0, 0.3, 1], delay: 0.2 }}
                  className="h-px w-40 origin-left bg-gradient-to-r from-transparent via-lavender-deep to-transparent"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
