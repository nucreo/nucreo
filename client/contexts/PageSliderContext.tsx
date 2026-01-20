import { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface PageSliderContextType {
  currentPage: number;
  goToPage: (index: number) => void;
  goToMain: () => void;
  goToTech: () => void;
}

const PageSliderContext = createContext<PageSliderContextType | null>(null);

export function PageSliderProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState(0);

  const goToPage = useCallback((index: number) => {
    setCurrentPage(index);
  }, []);

  const goToMain = useCallback(() => {
    setCurrentPage(0);
  }, []);

  const goToTech = useCallback(() => {
    setCurrentPage(1);
  }, []);

  return (
    <PageSliderContext.Provider value={{ currentPage, goToPage, goToMain, goToTech }}>
      {children}
    </PageSliderContext.Provider>
  );
}

export function usePageSlider() {
  const context = useContext(PageSliderContext);
  if (!context) {
    throw new Error("usePageSlider must be used within a PageSliderProvider");
  }
  return context;
}
