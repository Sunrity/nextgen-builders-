import React from "react";
import { motion } from "framer-motion";
import aboutBg from "../assets/about-bg.jpeg"; 

const About = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
            {/* Background Image */}
            <img
                src={aboutBg}
                alt="Next Generation Builders"
                className="absolute inset-0 w-full h-full object-cover opacity-20"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/90 to-transparent" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 lg:px-12 py-24 text-center lg:text-left grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Side - Mission */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8">
                        Building the <br />
                        <span className="bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
                        Next Generation
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
                        Our mission is to empower young builders with the mindset,
                        discipline, and faith to shape the future — through innovation,
                        skills, and community-driven growth.
                    </p>
                </motion.div>

                {/* Right Side - Vision Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl p-10">
                        <h3 className="text-3xl font-bold mb-4 text-white">Our Vision</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            To raise visionary leaders who create value, build sustainable
                            companies, and transform nations through integrity, innovation,
                            and collaboration.
                        </p>

                        <div className="border-t border-white/10 pt-6">
                            <h4 className="text-2xl font-semibold mb-2 text-white">Our Aim</h4>
                            <p className="text-gray-400 leading-relaxed">
                                We’re not just training minds — we’re building world changers.
                                Builders who are confident in purpose, strong in values, and
                                skilled in execution.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Quote / Impact Message */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                viewport={{ once: true }}
                className="absolute bottom-5 md:bottom-10 w-full text-center px-6"
            >
                <p className="text-gray-400 italic">
                    “We’re not just building businesses. We’re building the future.”
                </p>
            </motion.div>
        </section>
    );
};

export default About;
