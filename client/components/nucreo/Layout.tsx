import { PropsWithChildren } from "react";
import { Navbar } from "./Navbar";
import { usePageSlider } from "@/contexts/PageSliderContext";

export default function Layout({ children }: PropsWithChildren) {
  const { currentPage } = usePageSlider();
  const isTech = currentPage === 1;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="relative">
        <div aria-hidden className="pointer-events-none fixed inset-0 nucreo-glow transition-opacity duration-500 ease-in-out" style={{ opacity: isTech ? 0 : 1 }} />
        <div aria-hidden className="pointer-events-none fixed inset-0 nucreo-glow theme-tech transition-opacity duration-500 ease-in-out" style={{ opacity: isTech ? 1 : 0 }} />
        {children}
      </main>
    </div>
  );
}
