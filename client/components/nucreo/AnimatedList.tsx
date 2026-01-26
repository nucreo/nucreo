import { motion, Variants } from "framer-motion";
import { ReactNode, Children, isValidElement, cloneElement, ReactElement } from "react";
import { cn } from "@/lib/utils";
import { TIMING, EASING, defaultViewport } from "@/lib/animations";

interface AnimatedListProps {
  children: ReactNode;
  staggerDelay?: number;
  as?: "ul" | "ol";
  className?: string;
  itemClassName?: string;
}

/**
 * Container variants for staggered list animation
 */
const listContainerVariants: Variants = {
  hidden: {},
  visible: (staggerDelay: number) => ({
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.1
    }
  })
};

/**
 * Individual list item variants - fade in with slight slide from left
 */
const listItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -15
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
 * AnimatedList - Staggered list item reveals for ol/ul elements
 *
 * Wraps list items and animates each one sequentially with a fade-in
 * and slight slide from the left.
 *
 * @param children - li elements to animate
 * @param staggerDelay - Delay between each item (seconds), default 0.05
 * @param as - List type: "ul" or "ol"
 * @param className - CSS classes for the list container
 * @param itemClassName - CSS classes to add to each li element
 *
 * @example
 * <AnimatedList as="ol">
 *   <li>First item</li>
 *   <li>Second item</li>
 *   <li>Third item</li>
 * </AnimatedList>
 *
 * @example
 * <AnimatedList as="ul" staggerDelay={0.08} className="space-y-3">
 *   <li>Feature one</li>
 *   <li>Feature two</li>
 * </AnimatedList>
 */
export function AnimatedList({
  children,
  staggerDelay = 0.05,
  as = "ul",
  className,
  itemClassName
}: AnimatedListProps) {
  const MotionList = as === "ol" ? motion.ol : motion.ul;

  // Process children to wrap li elements with motion
  const animatedChildren = Children.map(children, (child, index) => {
    if (isValidElement(child) && child.type === "li") {
      return (
        <motion.li
          key={index}
          variants={listItemVariants}
          className={cn(child.props.className, itemClassName)}
        >
          {child.props.children}
        </motion.li>
      );
    }
    // If child is already a motion.li or other element, just return it
    return child;
  });

  return (
    <MotionList
      className={cn(className)}
      variants={listContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      custom={staggerDelay}
    >
      {animatedChildren}
    </MotionList>
  );
}

/**
 * AnimatedListItem - Individual animated list item for manual composition
 *
 * Use this when you need more control over the list structure or when
 * your list items contain complex nested content.
 *
 * @example
 * <motion.ul variants={staggerContainer} initial="hidden" whileInView="visible">
 *   <AnimatedListItem>Complex content here</AnimatedListItem>
 *   <AnimatedListItem>More content</AnimatedListItem>
 * </motion.ul>
 */
interface AnimatedListItemProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedListItem({ children, className }: AnimatedListItemProps) {
  return (
    <motion.li className={cn(className)} variants={listItemVariants}>
      {children}
    </motion.li>
  );
}

export default AnimatedList;
