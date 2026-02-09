import { motion, Variants } from "framer-motion";
import { defaultViewport, EASING, TIMING } from "@/lib/animations";

/**
 * Container variants for staggered footer animation
 */
const footerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

/**
 * Content fade up animation
 */
const fadeUpVariants: Variants = {
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
const logoScaleVariants: Variants = {
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
 * Contact link variants with stagger
 */
const contactLinkVariants: Variants = {
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

export function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-black/60">
      <motion.div
        className="container py-12 md:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={footerContainerVariants}
      >
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Title */}
          <motion.h3
            className="text-2xl md:text-3xl font-extrabold tracking-tight"
            variants={fadeUpVariants}
          >
            CREATIVE DESIGN AGENCY
          </motion.h3>

          {/* Contact grid */}
          <motion.div
            className="grid gap-8 md:grid-cols-3 w-full max-w-3xl items-center"
            variants={fadeUpVariants}
          >
            {/* Email */}
            <motion.div
              className="order-2 md:order-1 text-sm text-white/70"
              variants={contactLinkVariants}
            >
              <motion.div
                className="flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: TIMING.fast }}
              >
                <span className="sr-only">Email</span>
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <a
                  className="hover:underline hover:text-white transition-colors"
                  href="mailto:info@nucreo.art"
                >
                  info@nucreo.art
                </a>
              </motion.div>
            </motion.div>

            {/* Logo */}
            <motion.div
              className="order-1 md:order-2 flex items-center justify-center"
              variants={logoScaleVariants}
            >
              <div className="relative inline-flex items-center justify-center rounded-lg p-2">
                <video
                  src="/logo.mov"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-29 w-29 rounded"
                />
              </div>
            </motion.div>

            {/* Telegram */}
            <motion.div
              className="order-3 text-sm text-white/70"
              variants={contactLinkVariants}
            >
              <motion.div
                className="flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: TIMING.fast }}
              >
                <span className="sr-only">Telegram</span>
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M9.04 15.41l-.39 5.49c.56 0 .8-.24 1.09-.53l2.62-2.52 5.43 3.98c1 .55 1.72.26 1.99-.93l3.61-16.89h.01c.32-1.47-.53-2.05-1.5-1.69L1.5 9.6c-1.45.56-1.43 1.37-.25 1.73l5.49 1.71L18.88 6.5c.62-.41 1.18-.18.72.23" />
                </svg>
                <a
                  className="hover:underline hover:text-white transition-colors"
                  href="https://t.me/nucreoadmin"
                  target="_blank"
                  rel="noreferrer"
                >
                  @nucreoadmin
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Copyright */}
          <motion.p className="text-xs text-white/40" variants={fadeUpVariants}>
            &copy; {new Date().getFullYear()} NUCREO. All rights reserved.
          </motion.p>
        </div>
      </motion.div>
    </footer>
  );
}
