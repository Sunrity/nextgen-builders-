import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {

    const navigate = useNavigate();

    return (
        <section className="relative h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            {/* Background Image */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-transparent dark:from-black/70 dark:via-black/50 dark:to-transparent"></div>
            </div>

            {/* Floating Accent Blur */}
            <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl"></div>

            {/* Hero Content */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.3, ease: "easeOut" }}
                className="relative z-10 container mx-auto px-6 text-center"
            >
                <div className="w-full mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        className="text-4xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight"
                    >
                        <span className="block mb-3">Mentoring Young Leaders</span>
                        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                        To Build the Future
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        Next Generation Builders transforms purpose-driven young minds
                        into visionary leaders — equipped with mindset, financial wisdom,
                        faith, and creativity to build companies and shape tomorrow.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6"
                    >
                        <Button
                            size="lg"
                            onClick={() => navigate("/contact")}
                            className="text-lg px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-indigo-500 hover:to-blue-600 text-white font-semibold shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-[1.03]"
                            
                        >
                            Start Your Journey
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => navigate("/about")}
                            className="text-lg px-10 py-5 rounded-2xl border-gray-400/60 text-gray-800 dark:text-gray-100 hover:bg-gray-100/60 dark:hover:bg-gray-800/50 font-medium transition-all duration-300"
                        >
                            Learn More
                        </Button>
                    </motion.div>
                </div>
            </motion.div>

            {/* Elegant Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-5 md:bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-[26px] h-[42px] border-2 border-gray-400/40 rounded-full flex justify-center p-1.5">
                    <div className="w-1.5 h-3 bg-gray-400/80 rounded-full animate-bounce"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
