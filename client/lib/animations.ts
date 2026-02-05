import { Transition, Variants } from "framer-motion";

// ============================================================================
// TIMING SYSTEM
// ============================================================================

export const TIMING = {
  fast: 0.2,      // Micro-interactions, hovers
  normal: 0.4,    // Standard reveals
  slow: 0.6,      // Hero elements, emphasis
  stagger: 0.08,  // Delay between siblings
} as const;

export const EASING = {
  smooth: [0.4, 0, 0.2, 1] as const,     // General purpose cubic-bezier
  bounce: { type: "spring", bounce: 0.25 } as const,
  snappy: { type: "spring", stiffness: 400, damping: 30 } as const,
} as const;

// ============================================================================
// BASE VARIANTS
// ============================================================================

/**
 * Fade up animation - element fades in while sliding up
 */
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30
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

/**
 * Simple fade in animation
 */
export const fadeIn: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: TIMING.normal
    }
  }
};

/**
 * Scale in animation - element scales up while fading in
 */
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: TIMING.normal
    }
  }
};

/**
 * Slide from left animation
 */
export const slideFromLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60
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
 * Slide from right animation
 */
export const slideFromRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60
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

// ============================================================================
// STAGGER CONTAINERS
// ============================================================================

/**
 * Container for staggered children animations
 */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: TIMING.stagger,
      delayChildren: 0.1
    }
  }
};

/**
 * Individual item for use within stagger container
 */
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: TIMING.normal
    }
  }
};

/**
 * Stagger container with custom delay
 */
export function createStaggerContainer(staggerDelay = TIMING.stagger, childDelay = 0.1): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: childDelay
      }
    }
  };
}

// ============================================================================
// LIST ANIMATIONS
// ============================================================================

/**
 * List item animation - fade in with slight slide from left
 */
export const listItemReveal: Variants = {
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
 * List container with custom stagger
 */
export function createListContainer(staggerDelay = 0.05): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1
      }
    }
  };
}

// ============================================================================
// CARD ANIMATIONS
// ============================================================================

/**
 * Card entrance animation - fade + scale from bottom
 */
export const cardEntrance: Variants = {
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

/**
 * Card hover - lift effect
 */
export const cardHoverLift = {
  y: -8,
  transition: { duration: TIMING.fast }
};

/**
 * Card hover - glow effect (for orange theme)
 */
export const cardHoverGlow = {
  boxShadow: "0 10px 40px rgba(255, 94, 0, 0.25)",
  transition: { duration: TIMING.fast }
};

/**
 * Card hover - glow effect (for purple/tech theme)
 */
export const cardHoverGlowTech = {
  boxShadow: "0 10px 40px rgba(138, 43, 226, 0.25)",
  transition: { duration: TIMING.fast }
};

/**
 * Card hover - scale effect
 */
export const cardHoverScale = {
  scale: 1.03,
  transition: { duration: TIMING.fast }
};

// ============================================================================
// SPECIAL ANIMATIONS
// ============================================================================

/**
 * Number pop animation - for workflow step numbers
 */
export const numberPop: Variants = {
  hidden: {
    scale: 0,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: TIMING.slow
    }
  }
};

/**
 * Line draw animation - for timeline connecting lines
 */
export const lineDraw: Variants = {
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
 * Continuous floating animation - for BracketLabel and similar elements
 * Use with animate prop, not variants
 */
export const floatAnimation = {
  y: [0, -10, 0],
  transition: {
    repeat: Infinity,
    duration: 3,
    ease: "easeInOut"
  } as Transition
};

/**
 * Create a custom float animation with specified parameters
 */
export function createFloatAnimation(amplitude = 10, duration = 3) {
  return {
    y: [0, -amplitude, 0],
    transition: {
      repeat: Infinity,
      duration,
      ease: "easeInOut"
    } as Transition
  };
}

// ============================================================================
// HERO ANIMATIONS
// ============================================================================

/**
 * Hero text reveal - slower, more dramatic entrance
 */
export const heroTextReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: TIMING.slow,
      ease: EASING.smooth
    }
  }
};

/**
 * Hero stagger container - slower stagger for hero elements
 */
export const heroStaggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

/**
 * Hero stagger item - individual items within hero stagger
 */
export const heroStaggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: TIMING.slow,
      ease: EASING.smooth
    }
  }
};

// ============================================================================
// SECTION TITLE ANIMATIONS
// ============================================================================

/**
 * Kicker text animation - slides in from left
 */
export const kickerReveal: Variants = {
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
 * Title reveal animation - fades up with slight scale
 */
export const titleReveal: Variants = {
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
      ease: EASING.smooth,
      delay: 0.1
    }
  }
};

// ============================================================================
// BUTTON ANIMATIONS
// ============================================================================

/**
 * Button hover animation values (use with whileHover)
 */
export const buttonHover = {
  scale: 1.03,
  transition: { duration: TIMING.fast }
};

/**
 * Button tap animation values (use with whileTap)
 */
export const buttonTap = {
  scale: 0.98
};

/**
 * Primary button hover with glow intensification (orange theme)
 */
export const primaryButtonHover = {
  scale: 1.03,
  boxShadow: "0 10px 40px rgba(255, 94, 0, 0.4)",
  transition: { duration: TIMING.fast }
};

/**
 * Primary button hover with glow intensification (tech/purple theme)
 */
export const primaryButtonHoverTech = {
  scale: 1.03,
  boxShadow: "0 10px 40px rgba(138, 43, 226, 0.4)",
  transition: { duration: TIMING.fast }
};

/**
 * Secondary/outline button hover
 */
export const secondaryButtonHover = {
  scale: 1.02,
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  transition: { duration: TIMING.fast }
};

// ============================================================================
// FOOTER ANIMATIONS
// ============================================================================

/**
 * Footer content fade up
 */
export const footerFadeUp: Variants = {
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

/**
 * Logo scale in animation
 */
export const logoScaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: TIMING.slow
    }
  }
};

/**
 * Contact link stagger animation
 */
export const contactLinkReveal: Variants = {
  hidden: {
    opacity: 0,
    x: -10
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

// ============================================================================
// VIEWPORT OPTIONS
// ============================================================================

/**
 * Default viewport options for whileInView animations
 */
export const defaultViewport = {
  once: true,
  margin: "-100px"
};

/**
 * Viewport options with custom amount trigger
 */
export function createViewport(margin = "-100px", amount = 0.3) {
  return {
    once: true,
    margin,
    amount
  };
}

// ============================================================================
// PARALLAX UTILITIES
// ============================================================================

/**
 * Configuration for parallax scroll effect
 * Use with useScroll and useTransform from framer-motion
 *
 * @example
 * const ref = useRef(null);
 * const { scrollYProgress } = useScroll({
 *   target: ref,
 *   offset: parallaxConfig.offset
 * });
 * const y = useTransform(scrollYProgress, [0, 1], parallaxConfig.range);
 */
export const parallaxConfig = {
  offset: ["start end", "end start"] as ["start end", "end start"],
  range: [50, -50] as [number, number],
  rangeSubtle: [25, -25] as [number, number],
  rangeStrong: [100, -100] as [number, number]
};

/**
 * Create custom parallax range
 */
export function createParallaxRange(amount: number): [number, number] {
  return [amount, -amount];
}
