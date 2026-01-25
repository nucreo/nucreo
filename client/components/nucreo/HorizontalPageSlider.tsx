import { ReactNode, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { usePageSlider } from "@/contexts/PageSliderContext";

interface HorizontalPageSliderProps {
  children: ReactNode[];
}

export function HorizontalPageSlider({ children }: HorizontalPageSliderProps) {
  const { currentPage } = usePageSlider();
  const containerRef = useRef<HTMLDivElement>(null);
  const pageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [pageHeights, setPageHeights] = useState<number[]>([]);

  // Measure page heights after mount and on resize
  useEffect(() => {
    const measureHeights = () => {
      const heights = pageRefs.current.map(ref => {
        if (ref) {
          // Get the actual content height of each page
          // Use getBoundingClientRect for more accurate measurement
          const rect = ref.getBoundingClientRect();
          return Math.max(ref.scrollHeight, rect.height);
        }
        return window.innerHeight;
      });
      setPageHeights(heights);
    };

    // Initial measurement
    measureHeights();

    // Re-measure on window resize
    window.addEventListener('resize', measureHeights);

    // Re-measure multiple times to catch content loading
    const timer1 = setTimeout(measureHeights, 100);
    const timer2 = setTimeout(measureHeights, 500);
    const timer3 = setTimeout(measureHeights, 1000);

    return () => {
      window.removeEventListener('resize', measureHeights);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [children]);

  // Reset scroll position when changing pages
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [currentPage]);

  // Set body height to match current page to prevent scrolling beyond content
  useEffect(() => {
    const currentHeight = pageHeights[currentPage];
    if (currentHeight && currentHeight > 0) {
      // Set body height to constrain scrolling
      document.body.style.height = `${currentHeight}px`;
      document.body.style.overflow = 'auto';
      document.body.style.overflowX = 'hidden';

      // Set html height but allow scrolling
      document.documentElement.style.height = `${currentHeight}px`;
      document.documentElement.style.overflow = 'auto';
      document.documentElement.style.overflowX = 'hidden';
    }

    return () => {
      document.body.style.height = '';
      document.body.style.overflow = '';
      document.body.style.overflowX = '';

      document.documentElement.style.height = '';
      document.documentElement.style.overflow = '';
      document.documentElement.style.overflowX = '';
    };
  }, [currentPage, pageHeights]);

  return (
    <div
      className="page-slider-viewport"
      ref={containerRef}
    >
      <motion.div
        className="page-slider-track"
        animate={{
          x: `-${currentPage * 100}vw`,
        }}
        transition={{
          type: "tween",
          duration: 0.5,
          ease: [0.4, 0, 0.2, 1], // easeInOut cubic-bezier
        }}
      >
        {children.map((child, index) => (
          <div
            key={index}
            className="page-slider-page"
            ref={el => pageRefs.current[index] = el}
          >
            {child}
          </div>
        ))}
      </motion.div>

      {/* Page indicator dots */}
      <div className="page-slider-dots">
        {children.map((_, index) => (
          <PageDot key={index} index={index} />
        ))}
      </div>
    </div>
  );
}

function PageDot({ index }: { index: number }) {
  const { currentPage, goToPage } = usePageSlider();
  const isActive = currentPage === index;

  return (
    <button
      onClick={() => goToPage(index)}
      className={`page-slider-dot ${isActive ? "active" : ""}`}
      aria-label={`Go to page ${index + 1}`}
      aria-current={isActive ? "page" : undefined}
    />
  );
}
