"use client";

import { Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
    const sponsors = [
        { name: "Rescaf", logo: "/partners/rescaf.jpg", url: "https://rescaf.io/" },
        { name: "Scitylana", logo: "/partners/Scitylana.jpg", url: "https://www.scitylana.co.uk/" },
        { name: "8cousins", logo: "/partners/8c.png", url: "https://8-cousins-digital-home.vercel.app/" },
    ];

    return (
        <footer className="bg-[#0B132B] text-gray-300 py-14 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-20">

                    {/* Sponsors Section */}
                    <section className="col-span-1">
                        <h2 className="text-xl font-bold text-white mb-2">Our Sponsors</h2>
                        <p className="text-gray-400 mb-4">Proudly supported by:</p>

                        <div className="grid grid-cols-2 gap-4">
                            {sponsors.map((sponsor) => (
                                <a
                                    key={sponsor.name}
                                    href={sponsor.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block relative z-10"
                                >
                                    <div className="hover:bg-white/20 transition p-4 rounded-lg flex items-center justify-center cursor-pointer transform hover:scale-105 duration-300">
                                        {sponsor.logo ? (
                                            <img
                                                src={sponsor.logo}
                                                alt={sponsor.name}
                                                className="h-12 object-contain"
                                            />
                                        ) : (
                                            <span className="text-white font-semibold">
                                                {sponsor.name}
                                            </span>
                                        )}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </section>

                    {/* Brand Info */}
                    <div>
                        <h3 className="text-2xl font-semibold text-white mb-3">
                            <span className="text-blue-400">Alkebulan </span> Foundation
                        </h3>
                        <p className="text-gray-400 leading-relaxed max-w-md">
                            We empower young minds to grow into impactful leaders by blending mentorship,
                            innovation, and purpose-driven education.
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-50 transition cursor-pointer">
                                <Phone size={18} className="text-blue-400" />
                                <a href="tel:+2349130961875" className="text-blue-600 font-medium">
                                    +234-913-096-1875
                                </a>
                            </li>

                            <li className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-50 transition cursor-pointer">
                                <Phone size={18} className="text-blue-400" />
                                <a href="tel:+2348139023970" className="text-blue-600 font-medium">
                                    +234-813-902-3970
                                </a>
                            </li>

                            <li>
                                <a
                                    href="mailto:alkebulanfoundation08@gmail.com"
                                    className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-50 transition text-blue-600 font-medium"
                                >
                                    <Mail size={18} className="text-blue-400" />
                                    alkebulanfoundation08@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
                        <div className="flex items-center gap-5">
                            <a
                                href="https://web.facebook.com/profile.php?id=61586575755232"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-400 transition"
                            >
                                <Facebook size={20} />
                            </a>

                            <a
                                href="https://www.instagram.com/nextgenerationbuilders130925/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-400 transition"
                            >
                                <Instagram size={20} />
                            </a>

                            <a href="#" className="hover:text-blue-400 transition">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Alkebulan Foundation. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;