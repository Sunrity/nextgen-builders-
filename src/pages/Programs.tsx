import React from "react";
import { motion } from "framer-motion";
import { Code2, PenTool, Camera, Brain, MonitorSmartphone } from "lucide-react";

// Example local images (replace with your own in /assets)
import mindsetImg from "../assets/mindset.jpg"
import webdevImg from "../assets/webdev.jpg";
import uiuxImg from "../assets/uiux.jpg";
import videoImg from "../assets/video.jpg";
import graphicsImg from "../assets/graphics.jpg";

const programs = [
    {
        title: "General Mindset & Focus Class",
        icon: <Brain className="w-7 h-7 text-blue-600" />,
        description:
        "This class helps young builders develop the right mindset for success — discipline, consistency, purpose, and focus that lead to real impact.",
        image: mindsetImg,
    },
    {
        title: "Website Development",
        icon: <Code2 className="w-7 h-7 text-blue-600" />,
        description:
        "Learn how to build responsive, modern websites from scratch using HTML, CSS, JavaScript, and React. Become a confident frontend or full-stack developer.",
        image: webdevImg,
    },
    {
        title: "UI/UX Design",
        icon: <MonitorSmartphone className="w-7 h-7 text-blue-600" />,
        description:
        "Master the art of crafting beautiful and user-friendly interfaces. Learn Figma, design thinking, prototyping, and real-world design collaboration.",
        image: uiuxImg,
    },
    {
        title: "Videography & Editing",
        icon: <Camera className="w-7 h-7 text-blue-600" />,
        description:
        "Discover how to shoot, edit, and produce stunning videos that tell stories. Learn camera handling, lighting, and professional editing techniques.",
        image: videoImg,
    },
    {
        title: "Graphic Design",
        icon: <PenTool className="w-7 h-7 text-blue-600" />,
        description:
        "Unlock your creativity with design tools like Canva, Photoshop, and Illustrator. Learn branding, visual communication, and content creation.",
        image: graphicsImg,
    },
];

const Programs = () => {
    return (
        <section className="bg-gray-50 py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 mt-5"
                    >
                        Our Programs
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        Explore our creative and leadership programs designed to equip the next generation with technical skills, creative confidence, and a purpose-driven mindset.
                    </motion.p>
                </div>

                {/* Program Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {programs.map((program, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
                        >
                        {/* Image Section */}
                        <div className="relative w-full h-56 overflow-hidden">
                            <img
                                src={program.image}
                                alt={program.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        </div>

                        {/* Content Section */}
                        <div className="p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-blue-100 rounded-xl">{program.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900">
                                    {program.title}
                                </h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {program.description}
                            </p>

                            <a
                                href="https://wa.me/2348139023970"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-blue-700 font-medium hover:text-blue-900 transition"
                            >
                                Learn More →
                            </a>
                        </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;
