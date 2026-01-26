import { usePageSlider } from "@/contexts/PageSliderContext";

export function PageGlow() {
  const { currentPage } = usePageSlider();
  const isTech = currentPage === 1;

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 nucreo-glow transition-opacity duration-500 ease-in-out z-0"
        style={{ opacity: isTech ? 0 : 1 }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 nucreo-glow theme-tech transition-opacity duration-500 ease-in-out z-0"
        style={{ opacity: isTech ? 1 : 0 }}
      />
    </>
  );
}
