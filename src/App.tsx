// App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Programs from "./pages/Programs";
import Community from "./pages/Community"; // Newly added
import Mentorship from "./pages/Mentorship";
import Blog from "./pages/Blog";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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

                    <Routes>
                        <Route path="/" element={<Index />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/programs" element={<Programs />} />
                        <Route path="/community-guide" element={<Community />} />
                        <Route path="/mentorship" element={<Mentorship />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/admindashboard" element={<AdminDashboard />} />

                        {/* Fallback for unmatched routes */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>

                    <Footer />
                </BrowserRouter>
            </TooltipProvider>
        </QueryClientProvider>
    );
};

export default App;