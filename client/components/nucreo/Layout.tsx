import { PropsWithChildren } from "react";
import { Navbar } from "./Navbar";
import { usePageSlider } from "@/contexts/PageSliderContext";

export default function Layout({ children }: PropsWithChildren) {
  const { currentPage } = usePageSlider();
  // Page 1 is TechIndex, so use 'tech' theme, otherwise 'default'
  const theme = currentPage === 1 ? "tech" : "default";

  return (
    <div className="min-h-screen bg-background text-foreground" data-theme={theme}>
      <Navbar />
      <main className="relative">
        <div aria-hidden className="pointer-events-none fixed inset-0 nucreo-glow" />
        {children}
      </main>
    </div>
  );
}
