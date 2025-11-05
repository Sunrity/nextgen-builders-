import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeLink, setActiveLink] = useState<string>("/");

    const location = useLocation();

    // Track active route
    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

  // Scroll visibility + shadow effect
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrolled(currentScrollY > 10);

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Programs", href: "/programs" },
        { name: "Mentorship", href: "/mentorship" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <motion.nav
            initial={{ y: 0 }}
            animate={{ y: showNavbar ? 0 : -100 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`fixed top-0 left-0 w-full z-50 overflow-hidden transition-all duration-300 ${
                scrolled ? "bg-white/95 shadow-md backdrop-blur-md" : "bg-white shadow-sm"
            }`}
        >
            {/* CONTAINER */}
            <div
                className="
                w-full max-w-[90rem] mx-auto 
                flex items-center justify-between 
                px-4 sm:px-6 md:px-10 py-4
                overflow-hidden
                "
            >
                {/* LOGO */}
                <a
                    href="/"
                    className="flex items-center space-x-2"
                    onClick={() => setActiveLink("/")}
                >
                    <span className="text-[1.4rem] font-semibold tracking-tight text-gray-900 whitespace-nowrap">
                        Next<span className="text-blue-700">Gen</span> Builders
                    </span>
                </a>

                {/* DESKTOP NAV LINKS */}
                <div className="hidden md:flex items-center space-x-8 flex-shrink-0">
                    {navLinks.map((link) => {
                        const isActive = activeLink === link.href;
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setActiveLink(link.href)}
                                className={`relative font-medium transition-colors duration-200 ${
                                isActive ? "text-blue-700" : "text-gray-700 hover:text-blue-700"
                                }`}
                            >
                                {link.name}
                                <motion.span
                                    layoutId="underline"
                                    className="absolute left-0 -bottom-1 h-[2px] bg-blue-700 rounded-full"
                                    initial={false}
                                    animate={{ width: isActive ? "100%" : "0%" }}
                                    transition={{ duration: 0.3 }}
                                />
                            </a>
                        );
                    })}
                </div>

                {/* CTA BUTTON */}
                <div className="hidden md:flex flex-shrink-0">
                    <a
                        href="https://chat.whatsapp.com/JL6fsvqSshrAGbByW2K80Z"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-all duration-200"
                    >
                        Join Us
                    </a>
                </div>

                {/* MOBILE TOGGLE */}
                <button
                    className="md:hidden text-gray-800 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden bg-gradient-to-b from-white to-blue-200 border-t border-gray-200 shadow-sm w-full h-screen overflow-hidden"
                    >
                        <div className="flex flex-col space-y-4 px-6 py-5 w-full">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => {
                                        setActiveLink(link.href);
                                        setIsOpen(false);
                                    }}
                                    className={`font-medium transition-colors ${
                                        activeLink === link.href
                                        ? "text-blue-700"
                                        : "text-gray-700 hover:text-blue-700"
                                    }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="https://chat.whatsapp.com/JL6fsvqSshrAGbByW2K80Z"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-center px-5 py-2 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition"
                            >
                                Join Us
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
