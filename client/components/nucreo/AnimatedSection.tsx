import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  fadeUp,
  slideFromLeft,
  slideFromRight,
  fadeIn,
  defaultViewport,
  TIMING,
  EASING
} from "@/lib/animations";

interface AnimatedSectionProps {
  children: ReactNode;
  direction?: "up" | "left" | "right" | "none";
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "aside";
}

/**
 * Get the appropriate animation variants based on direction
 */
function getVariants(direction: AnimatedSectionProps["direction"], delay: number): Variants {
  const baseTransition = {
    duration: TIMING.normal,
    ease: EASING.smooth,
    delay
  };

  switch (direction) {
    case "left":
      return {
        hidden: { opacity: 0, x: -60 },
        visible: {
          opacity: 1,
          x: 0,
          transition: baseTransition
        }
      };
    case "right":
      return {
        hidden: { opacity: 0, x: 60 },
        visible: {
          opacity: 1,
          x: 0,
          transition: baseTransition
        }
      };
    case "none":
      return {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: baseTransition
        }
      };
    case "up":
    default:
      return {
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: baseTransition
        }
      };
  }
}

/**
 * AnimatedSection - Wrapper component for scroll-triggered section reveals
 *
 * @param children - Content to animate
 * @param direction - Animation direction: "up" (default), "left", "right", "none"
 * @param delay - Additional delay before animation starts (seconds)
 * @param className - Additional CSS classes
 * @param as - HTML element type to render
 *
 * @example
 * <AnimatedSection direction="up">
 *   <h2>Section Title</h2>
 *   <p>Section content...</p>
 * </AnimatedSection>
 *
 * @example
 * <AnimatedSection direction="left" delay={0.2}>
 *   <div className="card">...</div>
 * </AnimatedSection>
 */
export function AnimatedSection({
  children,
  direction = "up",
  delay = 0,
  className,
  as = "div"
}: AnimatedSectionProps) {
  const MotionComponent = motion[as];
  const variants = getVariants(direction, delay);

  return (
    <MotionComponent
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={variants}
    >
      {children}
    </MotionComponent>
  );
}

export default AnimatedSection;
