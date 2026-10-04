import React from 'react';
import { motion } from 'framer-motion';

export interface ScrollHighlightProps {
  children: React.ReactNode;
  /**
   * 'marker': Soft translucent highlighter pen sweep behind text
   * 'underline': Precision curved vector brush stroke beneath text
   * 'editorial': Elegant combination with serif emphasis, gradient glow and underline
   * 'badge': High-contrast luminous text pill
   */
  variant?: 'marker' | 'underline' | 'editorial' | 'glow';
  color?: 'blue' | 'sky' | 'cyan' | 'white' | 'emerald' | 'amber';
  delay?: number;
  className?: string;
  once?: boolean;
}

export const ScrollHighlight: React.FC<ScrollHighlightProps> = ({
  children,
  variant = 'marker',
  color = 'blue',
  delay = 0.15,
  className = '',
  once = true,
}) => {
  // Color configuration presets for both light and dark backgrounds
  const colorStyles = {
    blue: {
      marker: 'bg-[#2563EB]/12 text-[#1D4ED8]',
      underline: 'text-[#2563EB]',
      glow: 'from-[#2563EB]/25 to-[#38BDF8]/20',
      text: 'text-[#1D4ED8]',
    },
    sky: {
      marker: 'bg-[#38BDF8]/20 text-[#0284C7]',
      underline: 'text-[#0284C7]',
      glow: 'from-[#38BDF8]/30 to-[#60A5FA]/20',
      text: 'text-[#0284C7]',
    },
    cyan: {
      marker: 'bg-[#06B6D4]/15 text-[#0891B2]',
      underline: 'text-[#06B6D4]',
      glow: 'from-[#06B6D4]/25 to-[#38BDF8]/20',
      text: 'text-[#0891B2]',
    },
    white: {
      marker: 'bg-white/18 text-[#FFFFFF]',
      underline: 'text-[#93C5FD]',
      glow: 'from-white/25 to-[#93C5FD]/20',
      text: 'text-[#FFFFFF]',
    },
    emerald: {
      marker: 'bg-[#10B981]/15 text-[#059669]',
      underline: 'text-[#10B981]',
      glow: 'from-[#10B981]/25 to-[#34D399]/20',
      text: 'text-[#059669]',
    },
    amber: {
      marker: 'bg-[#F59E0B]/18 text-[#D97706]',
      underline: 'text-[#F59E0B]',
      glow: 'from-[#F59E0B]/25 to-[#FBBF24]/20',
      text: 'text-[#D97706]',
    },
  }[color];

  return (
    <motion.span
      className={`relative inline-block whitespace-nowrap ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-8% 0px' }}
    >
      {/* =========================================================================
          VARIANT 1: EDITORIAL ACCENT (SERIF + DYNAMIC HIGHLIGHTER SWEEP)
         ========================================================================= */}
      {variant === 'editorial' && (
        <span className="relative inline-block font-editorial font-normal tracking-normal text-[#2563EB]">
          {/* Subtle highlighter background wipe */}
          <motion.span
            className="absolute -inset-x-1.5 bottom-0.5 h-[42%] bg-gradient-to-r from-[#EFF6FF] via-[#DBEAFE] to-[#BFDBFE] -z-10 rounded-[3px] opacity-80 pointer-events-none"
            variants={{
              hidden: { scaleX: 0, opacity: 0 },
              visible: {
                scaleX: 1,
                opacity: 0.85,
                transition: {
                  duration: 0.6,
                  delay,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
            style={{ originX: 0 }}
          />

          {/* Precision Underline Stroke */}
          <motion.svg
            className="absolute -bottom-1 left-0 w-full h-[5px] pointer-events-none overflow-visible -z-0"
            viewBox="0 0 100 8"
            preserveAspectRatio="none"
            fill="none"
          >
            <motion.path
              d="M 0 5 Q 50 8 100 4"
              stroke="#2563EB"
              strokeWidth="2.75"
              strokeLinecap="round"
              variants={{
                hidden: { pathLength: 0, opacity: 0 },
                visible: {
                  pathLength: 1,
                  opacity: 1,
                  transition: {
                    duration: 0.75,
                    delay: delay + 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
            />
          </motion.svg>

          <span className="relative z-10">{children}</span>
        </span>
      )}

      {/* =========================================================================
          VARIANT 2: MARKER (CLASSIC EDITORIAL HIGHLIGHTER PEN SWEEP)
         ========================================================================= */}
      {variant === 'marker' && (
        <>
          {/* Animated Highlighter Fill */}
          <motion.span
            className={`absolute -inset-x-1.5 -inset-y-0.5 rounded-md -z-10 pointer-events-none ${colorStyles.marker}`}
            variants={{
              hidden: { scaleX: 0, opacity: 0 },
              visible: {
                scaleX: 1,
                opacity: 1,
                transition: {
                  duration: 0.55,
                  delay,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
            style={{ originX: 0 }}
          />

          <span className="relative z-10">{children}</span>
        </>
      )}

      {/* =========================================================================
          VARIANT 3: UNDERLINE (ARCHITECTURAL VECTOR BRUSH STROKE)
         ========================================================================= */}
      {variant === 'underline' && (
        <>
          <span className="relative z-10">{children}</span>

          <motion.svg
            className="absolute -bottom-1 left-0 w-full h-[6px] pointer-events-none overflow-visible -z-0"
            viewBox="0 0 100 8"
            preserveAspectRatio="none"
            fill="none"
          >
            <motion.path
              d="M 0 5 Q 50 8 100 4"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              className={colorStyles.underline}
              variants={{
                hidden: { pathLength: 0, opacity: 0 },
                visible: {
                  pathLength: 1,
                  opacity: 1,
                  transition: {
                    duration: 0.7,
                    delay,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
            />
          </motion.svg>
        </>
      )}

      {/* =========================================================================
          VARIANT 4: GLOW AURA (LUMINOUS CHROMATIC BEAM)
         ========================================================================= */}
      {variant === 'glow' && (
        <>
          <motion.span
            className={`absolute -inset-x-2 -inset-y-1 rounded-lg bg-gradient-to-r ${colorStyles.glow} blur-xs -z-10 pointer-events-none`}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.6,
                  delay,
                  ease: 'easeOut',
                },
              },
            }}
          />
          <span className="relative z-10">{children}</span>
        </>
      )}
    </motion.span>
  );
};

export default ScrollHighlight;
