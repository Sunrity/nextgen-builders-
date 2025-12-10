import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

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
                <Link
                    to="/"
                    className="flex items-center space-x-2"
                    onClick={() => setActiveLink("/")}
                >
                    <span className="text-[1.4rem] font-semibold tracking-tight text-gray-900 whitespace-nowrap">
                        Next<span className="text-blue-700">Gen</span> Builders
                    </span>
                </Link>

                {/* DESKTOP NAV LINKS */}
                <div className="hidden md:flex items-center space-x-8 flex-shrink-0">
                    {navLinks.map((link) => {
                        const isActive = activeLink === link.href;
                        return (
                            <Link
                                key={link.name}
                                to={link.href}
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
                            </Link>
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
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden fixed inset-0 bg-white z-50"
                    >
                        {/* HEADER WITH CLOSE BUTTON */}
                        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
                            <span 
                                className="text-[1.4rem] font-semibold tracking-tight text-gray-900 whitespace-nowrap"
                            >
                                Next<span className="text-blue-700">Gen</span> Builders
                            </span>
                            <button onClick={() => setIsOpen(false)}>
                                <X size={26} className="text-gray-800" />
                            </button>
                        </div>

                        {/* MENU LIST */}
                        <div className="px-5 py-4 overflow-y-auto pb-32">
                            <div className="flex flex-col divide-y divide-gray-100 border border-gray-200 rounded-xl bg-gray-50">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.href}
                                        onClick={() => {
                                            setActiveLink(link.href);
                                            setIsOpen(false);
                                        }}
                                        className={`px-4 py-4 text-[16px] font-medium transition-colors ${
                                            activeLink === link.href
                                            ? "text-blue-600 bg-white"
                                            : "text-gray-700 hover:bg-white hover:text-blue-600"
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>


                        {/* FIXED BOTTOM CTA BUTTON */}
                        <div className="fixed bottom-0 left-0 w-full px-5 pb-6">
                            <a
                                href="https://chat.whatsapp.com/JL6fsvqSshrAGbByW2K80Z"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    block w-full text-center py-3 
                                    bg-blue-700 text-white font-semibold 
                                    rounded-xl
                                    hover:bg-blue-800 
                                    transition 
                                    shadow-[0_6px_20px_rgba(59,130,246,0.45)]
                                "
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
