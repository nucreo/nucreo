import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageSliderProvider } from "@/contexts/PageSliderContext";
import { HorizontalPageSlider } from "@/components/nucreo/HorizontalPageSlider";
import { Navbar } from "@/components/nucreo/Navbar";
import { PageGlow } from "@/components/nucreo/PageGlow";
import Index from "./pages/Index";
import TechIndex from "./pages/TechIndex";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function HomePage() {
  return (
    <PageSliderProvider>
      {/* Navbar rendered OUTSIDE the slider to prevent transform breaking fixed positioning */}
      <Navbar />
      <PageGlow />
      <HorizontalPageSlider>
        <Index />
        <TechIndex />
      </HorizontalPageSlider>
    </PageSliderProvider>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tech" element={<HomePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
