import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-6 right-6 h-11 w-11 rounded-full z-50",
        "bg-gradient-to-tr from-[#FF5E00] to-[#AD0000]",
        "text-white shadow-lg shadow-orange-500/20 transition-all",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      <svg viewBox="0 0 24 24" className="mx-auto h-5 w-5" fill="currentColor"><path d="M12 5l7 7-1.4 1.4L13 10.8V19h-2v-8.2L6.4 13.4 5 12z"/></svg>
    </button>
  );
}
