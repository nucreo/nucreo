import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { TIMING, EASING, defaultViewport } from "@/lib/animations";

type HoverEffect = "lift" | "glow" | "scale" | "none";

interface AnimatedCardProps {
  children: ReactNode;
  hoverEffect?: HoverEffect;
  index?: number;
  className?: string;
  as?: "div" | "article" | "section";
}

/**
 * Card entrance variants - fade + scale from bottom
 */
const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: TIMING.normal,
      ease: EASING.smooth,
      delay: index * 0.1
    }
  })
};

/**
 * Get hover animation based on effect type
 */
function getHoverAnimation(effect: HoverEffect) {
  switch (effect) {
    case "lift":
      return {
        y: -8,
        transition: { duration: TIMING.fast }
      };
    case "glow":
      return {
        boxShadow: "0 10px 40px rgba(255, 94, 0, 0.25)",
        transition: { duration: TIMING.fast }
      };
    case "scale":
      return {
        scale: 1.03,
        transition: { duration: TIMING.fast }
      };
    case "none":
    default:
      return {};
  }
}

/**
 * Get tap animation based on effect type
 */
function getTapAnimation(effect: HoverEffect) {
  if (effect === "none") return {};
  return {
    scale: 0.98
  };
}

/**
 * AnimatedCard - Card component with entrance and hover animations
 *
 * Provides smooth entrance animation (fade + scale from bottom) and
 * various hover effects for interactive cards.
 *
 * @param children - Card content
 * @param hoverEffect - Hover animation type: "lift", "glow", "scale", or "none"
 * @param index - Index for staggered entrance animation (0-based)
 * @param className - Additional CSS classes
 * @param as - HTML element type to render
 *
 * @example
 * // Card with lift hover effect
 * <AnimatedCard hoverEffect="lift" index={0}>
 *   <img src="/card.png" alt="Card" />
 *   <h3>Card Title</h3>
 * </AnimatedCard>
 *
 * @example
 * // Staggered cards in a grid
 * {cards.map((card, i) => (
 *   <AnimatedCard key={card.id} hoverEffect="glow" index={i}>
 *     {card.content}
 *   </AnimatedCard>
 * ))}
 */
export function AnimatedCard({
  children,
  hoverEffect = "lift",
  index = 0,
  className,
  as = "div"
}: AnimatedCardProps) {
  const MotionComponent = motion[as];
  const hoverAnimation = getHoverAnimation(hoverEffect);
  const tapAnimation = getTapAnimation(hoverEffect);

  return (
    <MotionComponent
      className={cn(className)}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      custom={index}
      whileHover={hoverAnimation}
      whileTap={tapAnimation}
    >
      {children}
    </MotionComponent>
  );
}

/**
 * AnimatedCardContainer - Container for multiple AnimatedCards with stagger
 *
 * Wraps a grid of cards and provides coordinated stagger animation.
 * Use with AnimatedCard components that don't need their own whileInView.
 */
interface AnimatedCardContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

const containerVariants: Variants = {
  hidden: {},
  visible: (staggerDelay: number) => ({
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.1
    }
  })
};

const containerChildVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
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

export function AnimatedCardContainer({
  children,
  className,
  staggerDelay = 0.1
}: AnimatedCardContainerProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      custom={staggerDelay}
    >
      {children}
    </motion.div>
  );
}

/**
 * AnimatedCardItem - Card for use inside AnimatedCardContainer
 *
 * Use this variant when cards are inside an AnimatedCardContainer
 * to inherit the parent's stagger timing.
 */
interface AnimatedCardItemProps {
  children: ReactNode;
  hoverEffect?: HoverEffect;
  className?: string;
}

export function AnimatedCardItem({
  children,
  hoverEffect = "lift",
  className
}: AnimatedCardItemProps) {
  const hoverAnimation = getHoverAnimation(hoverEffect);
  const tapAnimation = getTapAnimation(hoverEffect);

  return (
    <motion.div
      className={cn(className)}
      variants={containerChildVariants}
      whileHover={hoverAnimation}
      whileTap={tapAnimation}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedCard;
