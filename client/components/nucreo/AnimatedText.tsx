import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { defaultViewport, EASING, TIMING } from "@/lib/animations";

interface AnimatedTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  delay?: number;
  staggerDelay?: number;
  wordClassName?: string;
}

/**
 * Container variants for staggered word animation
 */
const containerVariants: Variants = {
  hidden: {},
  visible: (custom: { staggerDelay: number; delay: number }) => ({
    transition: {
      staggerChildren: custom.staggerDelay,
      delayChildren: custom.delay,
    },
  }),
};

/**
 * Individual word variants
 */
const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: TIMING.normal,
      ease: EASING.smooth,
    },
  },
};

/**
 * AnimatedText - Text reveal with word-by-word animation
 *
 * Splits text into individual words and staggers their appearance
 * for a dynamic text reveal effect.
 *
 * @param text - The text string to animate
 * @param as - HTML element type to render (h1, h2, h3, h4, p, span)
 * @param className - CSS classes for the container element
 * @param delay - Initial delay before animation starts (seconds)
 * @param staggerDelay - Delay between each word (seconds)
 * @param wordClassName - CSS classes applied to each word span
 *
 * @example
 * <AnimatedText
 *   text="Welcome to NUCREO"
 *   as="h1"
 *   className="text-6xl font-bold"
 * />
 *
 * @example
 * <AnimatedText
 *   text="Creative design and tech agency"
 *   as="p"
 *   className="text-lg text-white/80"
 *   delay={0.3}
 *   staggerDelay={0.05}
 * />
 */
export function AnimatedText({
  text,
  as = "p",
  className,
  delay = 0,
  staggerDelay = 0.08,
  wordClassName,
}: AnimatedTextProps) {
  // Split text into words, preserving spacing
  const words = text.split(" ");

  // Map element type to motion component
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={cn("flex flex-wrap", className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      custom={{ staggerDelay, delay }}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className={cn("inline-block mr-[0.25em]", wordClassName)}
          variants={wordVariants}
        >
          {word}
        </motion.span>
      ))}
    </MotionTag>
  );
}

/**
 * AnimatedTextLine - Animates text as a single line (no word splitting)
 *
 * Useful for titles or short phrases where word-by-word
 * animation is not desired.
 */
interface AnimatedTextLineProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  className?: string;
  delay?: number;
}

const lineVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: TIMING.slow,
      ease: EASING.smooth,
      delay,
    },
  }),
};

export function AnimatedTextLine({
  children,
  as = "div",
  className,
  delay = 0,
}: AnimatedTextLineProps) {
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={cn(className)}
      variants={lineVariants}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      custom={delay}
    >
      {children}
    </MotionTag>
  );
}

export default AnimatedText;
