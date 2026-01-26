import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { kickerReveal, titleReveal, defaultViewport, TIMING, EASING } from "@/lib/animations";

interface SectionTitleProps {
  /** Optional kicker/label text above the title */
  kicker?: string;
  /** Main title text */
  title: string;
  /** Additional CSS classes for the container */
  className?: string;
  /** Additional CSS classes for the kicker */
  kickerClassName?: string;
  /** Additional CSS classes for the title */
  titleClassName?: string;
  /** Whether to apply gradient styling to the title */
  gradient?: boolean;
  /** Delay before animation starts */
  delay?: number;
}

/**
 * Container variants for staggered animation
 */
const containerVariants: Variants = {
  hidden: {},
  visible: (delay: number) => ({
    transition: {
      staggerChildren: 0.1,
      delayChildren: delay
    }
  })
};

/**
 * Kicker animation - slides in from left
 */
const kickerVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: TIMING.normal,
      ease: EASING.smooth
    }
  }
};

/**
 * Title animation - fades up with slight scale
 */
const titleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: TIMING.normal,
      ease: EASING.smooth
    }
  }
};

/**
 * SectionTitle - Animated section heading component
 *
 * Features:
 * - Kicker text slides in from left
 * - Main title fades up with slight scale
 * - Scroll-triggered entrance animation
 * - Optional gradient styling
 *
 * @example
 * // Basic usage
 * <SectionTitle title="Our Services" />
 *
 * @example
 * // With kicker and gradient
 * <SectionTitle
 *   kicker="What we do"
 *   title="Our Expertise"
 *   gradient
 * />
 *
 * @example
 * // Custom styling
 * <SectionTitle
 *   kicker="Service"
 *   title="DEEPFAKES"
 *   kickerClassName="text-orange-400"
 *   titleClassName="text-6xl"
 * />
 */
export function SectionTitle({
  kicker,
  title,
  className,
  kickerClassName,
  titleClassName,
  gradient = true,
  delay = 0
}: SectionTitleProps) {
  return (
    <motion.div
      className={cn("mb-10", className)}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={containerVariants}
      custom={delay}
    >
      {kicker && (
        <motion.p
          className={cn(
            "text-sm uppercase tracking-[0.2em] text-white/60",
            kickerClassName
          )}
          variants={kickerVariants}
        >
          {kicker}
        </motion.p>
      )}
      <motion.h2
        className={cn(
          "text-3xl md:text-5xl font-extrabold tracking-tight",
          titleClassName
        )}
        variants={titleVariants}
      >
        {gradient ? (
          <span className="gradient-text">{title}</span>
        ) : (
          title
        )}
      </motion.h2>
    </motion.div>
  );
}

export default SectionTitle;
