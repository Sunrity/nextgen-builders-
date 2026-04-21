import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/logo.jpeg";

// Navigation links
const navLinks = [
  { name: "Home", href: "/" },

  // ✅ FIXED ROUTE (must match App.tsx)
  { name: "Donations", href: "/donations" },

  { name: "Donate Now", href: "/contact" },
  {
    name: "About",
    dropdown: [
      { name: "Who we are", href: "/who" },
      { name: "Our Team", href: "/team" },
    ],
  },
  {
    name: "Resources",
    dropdown: [
      { name: "Blog", href: "/blog" },
      { name: "FAQ", href: "/qapage" },
    ],
  },
  {
    name: "Community",
    dropdown: [
      { name: "Programs", href: "/programs" },
      { name: "Skill", href: "/skills" },
      { name: "Community Guide", href: "/community-guide" },
    ],
  },
  {
    name: "Partners",
    dropdown: [{ name: "Partners", href: "/partners" }],
  },
];

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleMobileDropdown = (name: string) => {
    setMobileDropdownOpen((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Alkebulan Foundation"
            className="h-14 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">

          {navLinks.map((link) => {
            if (link.dropdown) {
              return (
                <div key={link.name} className="relative group">
                  <button className="flex items-center font-medium text-gray-700 hover:text-blue-700 transition">
                    {link.name}
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </button>

                  {/* Dropdown */}
                  <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 min-w-[180px] opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setActiveLink(item.href)}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`font-medium transition ${
                  activeLink === link.href
                    ? "text-blue-700"
                    : "text-gray-700 hover:text-blue-700"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Join Button */}
          <a
            href="https://chat.whatsapp.com/JL6fsvqSshrAGbByW2K80Z"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
          >
            Join Us
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white shadow-xl overflow-hidden mt-2 mx-4 rounded-xl"
          >
            <div className="flex flex-col p-4 space-y-2">

              {navLinks.map((link) => {
                if (link.dropdown) {
                  return (
                    <div key={link.name}>
                      <button
                        onClick={() => toggleMobileDropdown(link.name)}
                        className="w-full flex justify-between items-center font-medium text-gray-700 py-2"
                      >
                        {link.name}
                        <ChevronDown
                          className={`w-4 h-4 transition ${
                            mobileDropdownOpen[link.name] ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {mobileDropdownOpen[link.name] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="pl-4 border-l border-gray-200"
                          >
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                onClick={() => {
                                  setActiveLink(item.href);
                                  setMobileMenuOpen(false);
                                }}
                                className="block py-2 text-gray-700 hover:text-blue-700"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2 text-gray-700 hover:text-blue-700 font-medium"
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* Mobile Join Button */}
              <a
                href="https://chat.whatsapp.com/JL6fsvqSshrAGbByW2K80Z"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 px-4 py-3 bg-blue-700 text-white rounded-lg text-center hover:bg-blue-800"
              >
                Join Us
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;