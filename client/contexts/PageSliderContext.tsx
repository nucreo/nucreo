import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface PageSliderContextType {
  currentPage: number;
  goToPage: (index: number) => void;
  goToMain: () => void;
  goToTech: () => void;
}

const PageSliderContext = createContext<PageSliderContextType | null>(null);

export function PageSliderProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(() => {
    // Initialize based on current URL
    return location.pathname === '/tech' ? 1 : 0;
  });

  // Sync slider position when URL changes (browser back/forward)
  useEffect(() => {
    const newPage = location.pathname === '/tech' ? 1 : 0;
    if (newPage !== currentPage) {
      setCurrentPage(newPage);
    }
  }, [location.pathname]);

  const goToPage = useCallback((index: number) => {
    setCurrentPage(index);
    // Update URL based on page index
    navigate(index === 0 ? '/' : '/tech', { replace: false });
  }, [navigate]);

  const goToMain = useCallback(() => {
    setCurrentPage(0);
    navigate('/', { replace: false });
  }, [navigate]);

  const goToTech = useCallback(() => {
    setCurrentPage(1);
    navigate('/tech', { replace: false });
  }, [navigate]);

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
