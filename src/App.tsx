// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DisenioWeb from "./pages/DisenioWeb";
import PosicionamientoSEO from "./pages/PosicionamientoSEO";
import MantenimientoWeb from "./pages/MantenimientoWeb";
import GoogleAds from "./pages/GoogleAds";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/diseno-web" element={<DisenioWeb />} />
          <Route path="/posicionamiento-seo" element={<PosicionamientoSEO />} />
          <Route path="/mantenimiento-web" element={<MantenimientoWeb />} />
          <Route path="/google-ads" element={<GoogleAds />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
