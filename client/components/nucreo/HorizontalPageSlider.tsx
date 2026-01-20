import { ReactNode, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { usePageSlider } from "@/contexts/PageSliderContext";

interface HorizontalPageSliderProps {
  children: ReactNode[];
}

export function HorizontalPageSlider({ children }: HorizontalPageSliderProps) {
  const { currentPage } = usePageSlider();
  const containerRef = useRef<HTMLDivElement>(null);

  // Reset scroll position when changing pages
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [currentPage]);

  return (
    <div className="page-slider-viewport" ref={containerRef}>
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
          <div key={index} className="page-slider-page">
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
