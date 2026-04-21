import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages (lazy loaded)
const Index = lazy(() => import("./pages/Index"));
const Team = lazy(() => import("./pages/team"));
const Qapage = lazy(() => import("./pages/qapage"));
const Who = lazy(() => import("./pages/Who"));
const Contact = lazy(() => import("./pages/Contact"));
const Programs = lazy(() => import("./pages/Programs"));
const Community = lazy(() => import("./pages/Community"));
const Skill = lazy(() => import("./pages/Skill"));
const Blog = lazy(() => import("./pages/Blog"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Partners = lazy(() => import("./pages/partners"));

// ✅ IMPORTANT: Donations page (NOT lazy, to avoid confusion)
import DonationsPage from "./pages/DonationsPage";

// React Query
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>

        {/* Toasts */}
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <ScrollToTop />

          <Navbar />

          <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
            <Routes>

              <Route path="/" element={<Index />} />
              <Route path="/team" element={<Team />} />
              <Route path="/who" element={<Who />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/qapage" element={<Qapage />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/community-guide" element={<Community />} />
              <Route path="/skills" element={<Skill />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/admindashboard" element={<AdminDashboard />} />
              <Route path="/partners" element={<Partners />} />

              {/* ✅ DONATIONS ROUTE FIXED */}
              <Route path="/donations" element={<DonationsPage />} />

              {/* 404 fallback */}
              <Route path="*" element={<NotFound />} />

            </Routes>
          </Suspense>

          <Footer />
        </BrowserRouter>

      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;