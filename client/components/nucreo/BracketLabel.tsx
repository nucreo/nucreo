import { motion, Variants } from "framer-motion";
import { scaleIn, defaultViewport, TIMING, createFloatAnimation } from "@/lib/animations";

interface BracketLabelProps {
  children: React.ReactNode;
  variant?: "orange" | "blue";
  /** Delay before entrance animation (seconds) */
  delay?: number;
  /** Enable continuous float animation after entrance */
  enableFloat?: boolean;
  /** Float animation amplitude in pixels */
  floatAmplitude?: number;
  /** Float animation duration in seconds */
  floatDuration?: number;
}

/**
 * Entrance animation variants with custom delay
 */
const entranceVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8
  },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: TIMING.normal,
      delay
    }
  })
};

/**
 * BracketLabel - Decorative label with bracket SVGs
 *
 * Features:
 * - Entrance animation: scales from 0.8 to 1 with fade
 * - Optional continuous float animation after entrance
 * - Scroll-triggered entrance using whileInView
 *
 * @example
 * // Basic usage
 * <BracketLabel variant="orange">gambling</BracketLabel>
 *
 * @example
 * // With float animation and custom delay
 * <BracketLabel
 *   variant="blue"
 *   delay={0.2}
 *   enableFloat
 *   floatAmplitude={8}
 * >
 *   web dev
 * </BracketLabel>
 */
export function BracketLabel({
  children,
  variant = "orange",
  delay = 0,
  enableFloat = true,
  floatAmplitude = 8,
  floatDuration = 3
}: BracketLabelProps) {
  const gradientClass = variant === "blue"
    ? "from-[#2D1ACA] to-[#5D3EFF]"
    : "from-[#FF5E00] to-[#AD0000]";

  const floatAnimation = enableFloat
    ? createFloatAnimation(floatAmplitude, floatDuration + Math.random() * 1)
    : undefined;

  return (
    <motion.div
      className="inline-flex items-center gap-2"
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={entranceVariants}
      custom={delay}
      animate={floatAnimation}
    >
      <svg width="23" height="48" viewBox="0 0 46 95" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
        <defs>
          <linearGradient id={`bracket-open-${variant}`} x1="33.1071" y1="2.97616" x2="-29.4446" y2="69.1528" gradientUnits="userSpaceOnUse">
            <stop stopColor={variant === "blue" ? "#5D3EFF" : "#FF5E00"}/>
            <stop offset="1" stopColor={variant === "blue" ? "#2D1ACA" : "#AD0000"}/>
          </linearGradient>
        </defs>
        <path d="M45.8496 2.5H2.49997V92.4875H45.8496" stroke={`url(#bracket-open-${variant})`} strokeWidth="5"/>
      </svg>
      <span className={`text-sm uppercase tracking-wider font-medium bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent`}>
        {children}
      </span>
      <svg width="23" height="48" viewBox="0 0 46 95" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
        <defs>
          <linearGradient id={`bracket-close-${variant}`} x1="12.7426" y1="2.97616" x2="75.2942" y2="69.1528" gradientUnits="userSpaceOnUse">
            <stop stopColor={variant === "blue" ? "#5D3EFF" : "#FF5E00"}/>
            <stop offset="1" stopColor={variant === "blue" ? "#2D1ACA" : "#AD0000"}/>
          </linearGradient>
        </defs>
        <path d="M0 2.5H43.3496V92.4875H0" stroke={`url(#bracket-close-${variant})`} strokeWidth="5"/>
      </svg>
    </motion.div>
  );
}

export default BracketLabel;
