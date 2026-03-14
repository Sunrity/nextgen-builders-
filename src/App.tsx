// App.tsx
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Partners from "./pages/partners";

// Lazy-loaded Pages
const Index = lazy(() => import("./pages/Index"));
const Who = lazy(() => import("./pages/Who"));
const Contact = lazy(() => import("./pages/Contact"));
const Programs = lazy(() => import("./pages/Programs"));
const Community = lazy(() => import("./pages/Community"));
const Mentorship = lazy(() => import("./pages/Mentorship"));
const Blog = lazy(() => import("./pages/Blog"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Initialize React Query client
const queryClient = new QueryClient();

const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                {/* Global Toasters */}
                <Toaster />
                <Sonner />

                {/* Routing */}
                <BrowserRouter>
                    <Navbar />

                    <Suspense fallback={<div className="loading">Loading...</div>}>
                        <Routes>
                            <Route path="/" element={<Index />} />
                            <Route path="/Who" element={<Who />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/programs" element={<Programs />} />
                            <Route path="/community-guide" element={<Community />} />
                            <Route path="/mentorship" element={<Mentorship />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/admindashboard" element={<AdminDashboard />} />
                            {/* Partners Page */}
                            <Route path="/partners" element={<Partners />} />
                            {/* Fallback for unmatched routes */}
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