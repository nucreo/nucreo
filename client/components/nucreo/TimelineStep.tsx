import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { TIMING, EASING, defaultViewport } from "@/lib/animations";

interface TimelineStepProps {
  number: number;
  title: string;
  description: ReactNode;
  filled?: boolean;
  index: number;
  isLast?: boolean;
  className?: string;
}

/**
 * Number badge variants - pops in with spring animation
 */
const numberPopVariants: Variants = {
  hidden: {
    scale: 0,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: TIMING.slow
    }
  }
};

/**
 * Text content variants - fades in after number appears
 */
const textContentVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 15
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: TIMING.normal,
      ease: EASING.smooth,
      delay: 0.15
    }
  }
};

/**
 * Dashed line variants - draws after content appears
 */
const lineDrawVariants: Variants = {
  hidden: {
    scaleY: 0,
    opacity: 0
  },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: TIMING.normal,
      ease: EASING.smooth,
      delay: 0.25
    }
  }
};

/**
 * Container variants for staggered step animation
 */
const stepContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

/**
 * TimelineStep - Animated workflow step with number badge and content
 *
 * Displays a numbered step in a workflow/process timeline with
 * coordinated animations: number pops in, text fades in, then
 * connecting line draws.
 *
 * @param number - Step number to display
 * @param title - Step title/heading
 * @param description - Step description (can be string or ReactNode)
 * @param filled - Whether the number badge has a filled background
 * @param index - Index for staggered entrance in a list of steps
 * @param isLast - Whether this is the last step (hides connecting line)
 * @param className - Additional CSS classes
 *
 * @example
 * <TimelineStep
 *   number={1}
 *   title="Brief consultation"
 *   description="Discussing goals, target audience, and key requirements."
 *   index={0}
 * />
 *
 * @example
 * <TimelineStep
 *   number={2}
 *   title="Pre-payment"
 *   description={<>50% upfront.<br />100% for returning clients.</>}
 *   filled
 *   index={1}
 * />
 */
export function TimelineStep({
  number,
  title,
  description,
  filled = false,
  index,
  isLast = false,
  className
}: TimelineStepProps) {
  return (
    <motion.div
      className={cn("flex gap-4", isLast ? "" : "pb-8", className)}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={stepContainerVariants}
    >
      {/* Number badge and connecting line */}
      <div className="flex flex-col items-center">
        <motion.div
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full",
            filled
              ? "bg-[hsl(var(--brand-start))]"
              : "border-2 border-[hsl(var(--brand-start))]"
          )}
          variants={numberPopVariants}
        >
          <span
            className={cn(
              "text-sm font-bold",
              filled ? "text-white" : "text-[hsl(var(--brand-start))]"
            )}
          >
            {number}
          </span>
        </motion.div>

        {/* Connecting line (hidden for last step) */}
        {!isLast && (
          <motion.div
            className="w-px flex-1 border-l-2 border-dashed border-white/20 mt-2 origin-top"
            variants={lineDrawVariants}
          />
        )}
      </div>

      {/* Text content */}
      <motion.div className="flex-1 pt-1" variants={textContentVariants}>
        <h4 className="text-xl font-bold text-white">{title}</h4>
        <div className="mt-1 text-white/60">{description}</div>
      </motion.div>
    </motion.div>
  );
}

/**
 * TimelineColumn - Container for a column of TimelineSteps
 *
 * Provides coordinated stagger animation for multiple steps.
 * Use in a grid layout for multi-column timelines.
 */
interface TimelineColumnProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

const columnContainerVariants: Variants = {
  hidden: {},
  visible: (staggerDelay: number) => ({
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.1
    }
  })
};

export function TimelineColumn({
  children,
  className,
  staggerDelay = 0.15
}: TimelineColumnProps) {
  return (
    <motion.div
      className={cn("space-y-0", className)}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={columnContainerVariants}
      custom={staggerDelay}
    >
      {children}
    </motion.div>
  );
}

/**
 * TimelineStepSimple - A simpler version that inherits parent stagger
 *
 * Use inside a TimelineColumn when you want the column to control
 * the stagger timing instead of each step having independent viewport triggers.
 */
interface TimelineStepSimpleProps {
  number: number;
  title: string;
  description: ReactNode;
  filled?: boolean;
  isLast?: boolean;
  className?: string;
  minHeight?: string;
}

const simpleStepVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: TIMING.normal,
      ease: EASING.smooth
    }
  }
};

export function TimelineStepSimple({
  number,
  title,
  description,
  filled = false,
  isLast = false,
  className,
  minHeight
}: TimelineStepSimpleProps) {
  return (
    <motion.div
      className={cn("flex gap-4", isLast ? "" : "pb-8", className)}
      style={minHeight ? { minHeight } : undefined}
      variants={simpleStepVariants}
    >
      {/* Number badge and connecting line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full",
            filled
              ? "bg-[hsl(var(--brand-start))]"
              : "border-2 border-[hsl(var(--brand-start))]"
          )}
        >
          <span
            className={cn(
              "text-sm font-bold",
              filled ? "text-white" : "text-[hsl(var(--brand-start))]"
            )}
          >
            {number}
          </span>
        </div>

        {/* Connecting line (hidden for last step) */}
        {!isLast && (
          <div className="w-px flex-1 border-l-2 border-dashed border-white/20 mt-2" />
        )}
      </div>

      {/* Text content */}
      <div className="flex-1 pt-1">
        <h4 className="text-xl font-bold text-white">{title}</h4>
        <div className="mt-1 text-white/60">{description}</div>
      </div>
    </motion.div>
  );
}

export default TimelineStep;
