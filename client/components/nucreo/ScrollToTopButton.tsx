import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * ScrollToTopButton - Animated button that appears when scrolling down
 *
 * Features:
 * - Spring animation when appearing/disappearing
 * - Scale animation on hover
 * - Tap feedback animation
 * - Smooth scroll to top on click
 */
export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={cn(
            "fixed bottom-6 right-6 h-11 w-11 rounded-full z-50",
            "bg-gradient-to-tr from-[#FF5E00] to-[#AD0000]",
            "text-white shadow-lg shadow-orange-500/20"
          )}
          // Initial state when mounting
          initial={{
            opacity: 0,
            y: 20,
            scale: 0.8
          }}
          // Animate to this state when visible
          animate={{
            opacity: 1,
            y: 0,
            scale: 1
          }}
          // Exit animation when unmounting
          exit={{
            opacity: 0,
            y: 20,
            scale: 0.8
          }}
          // Use spring physics for natural feel
          transition={{
            type: "spring" as const,
            stiffness: 300,
            damping: 25
          }}
          // Hover animation
          whileHover={{
            scale: 1.1,
            boxShadow: "0 8px 30px rgba(255, 94, 0, 0.4)",
            transition: { duration: 0.2 }
          }}
          // Tap animation
          whileTap={{
            scale: 0.9
          }}
        >
          <svg
            viewBox="0 0 24 24"
            className="mx-auto h-5 w-5"
            fill="currentColor"
          >
            <path d="M12 5l7 7-1.4 1.4L13 10.8V19h-2v-8.2L6.4 13.4 5 12z" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
