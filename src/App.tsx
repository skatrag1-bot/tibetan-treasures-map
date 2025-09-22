import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import MonasteryDetail from "./pages/MonasteryDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/monastery/:id" element={<MonasteryDetail />} />
          <Route path="/tours" element={<div className="min-h-screen bg-background flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold mb-4">Virtual Tours</h1><p className="text-xl text-muted-foreground">Coming Soon</p></div></div>} />
          <Route path="/map" element={<div className="min-h-screen bg-background flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold mb-4">Interactive Map</h1><p className="text-xl text-muted-foreground">Coming Soon</p></div></div>} />
          <Route path="/calendar" element={<div className="min-h-screen bg-background flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold mb-4">Cultural Calendar</h1><p className="text-xl text-muted-foreground">Coming Soon</p></div></div>} />
          <Route path="/audio" element={<div className="min-h-screen bg-background flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold mb-4">Audio Guides</h1><p className="text-xl text-muted-foreground">Coming Soon</p></div></div>} />
          <Route path="/plan" element={<div className="min-h-screen bg-background flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold mb-4">Plan Your Visit</h1><p className="text-xl text-muted-foreground">Coming Soon</p></div></div>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
