import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Programs from "./pages/Programs";
// import AdminDashboard from "./pages/AdminDashboard";
import Mentorship from "./pages/Mentorship";
import Blog from "./pages/Blog";
import AdminLogin from "./pages/AdminDashboard";
import AdminDashboard from "./pages/AdminDashboard";

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/programs" element={<Programs />} />
                    <Route path="/mentorship" element={<Mentorship />} />
                    <Route path="/blog" element={<Blog />} />
                    {/* Admin login and dashboard routes */}
                    <Route path="/AdminDashboard" element={<AdminDashboard />} />
                    {/* <Route path="/admin" element={<AdminDashboard />} /> */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </TooltipProvider>
    </QueryClientProvider>
);

export default App;