import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#0B132B] text-gray-300 py-14 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="flex flex-col md:flex-row items-start justify-start gap-10 md:gap-20">
                    {/* Brand Info */}
                    <div className="col-span-2">
                        <h3 className="text-2xl font-semibold text-white mb-3">
                            Next Generation <span className="text-blue-400">Builders</span>
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
                                 <Phone size={18} className="text-blue-400 flex-shrink-0" />
                                 <a
                                        href="tel:+2349130961875"
                                        className="text-blue-600 font-medium"
                                    >
                                    +234-913-096-1875
                                </a>
                            </li>

                          
                            <li className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-50 transition cursor-pointer">
                            <Phone size={18} className="text-blue-400 flex-shrink-0"/>
                            <a
                                href="tel:+2237013236152"
                                className="text-blue-600 font-medium"
                            >
                            +223-701-323-6152
                            </a>
                            </li>

                           <li>
                            <a
                                href="mailto:info@nextgenerationbuilders.org"
                                className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-50 transition text-blue-600 font-medium"
                            >
                                <Mail size={18} className="text-blue-400 flex-shrink-0" />
                                info@nextgenerationbuilders.org
                            </a>
                            </li>

                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
                        <div className="flex items-center gap-5">
                            <a href="https://web.facebook.com/profile.php?id=61586575755232" className="hover:text-blue-400 transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="https://www.instagram.com/nextgenerationbuilders130925/" className="hover:text-blue-400 transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="hover:text-blue-400 transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Next Generation Builders. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
