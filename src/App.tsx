import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { MotionConfig } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getPreviewRouterBasename } from "@/lib/previewBase";
import Index from "./pages/Index";
import AboutBook from "./pages/AboutBook";
import AboutAuthor from "./pages/AboutAuthor";
import Gallery from "./pages/Gallery";
import Church from "./pages/Church";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const App = () => (
  // reducedMotion="user": under the visitor's reduced-motion setting, framer
  // skips transform animations site-wide.
  <MotionConfig reducedMotion="user">
    <TooltipProvider>
      <Sonner />
      <BrowserRouter
        basename={getPreviewRouterBasename()}
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-book" element={<AboutBook />} />
          <Route path="/about-author" element={<AboutAuthor />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/church" element={<Church />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </MotionConfig>
);

export default App;
