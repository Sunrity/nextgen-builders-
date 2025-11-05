import React from "react";
import { motion } from "framer-motion";
import {
    Brain,
    PiggyBank,
    Hammer,
    BookOpen,
    Users,
    HeartHandshake,
    Lightbulb,
    Rocket,
    ArrowRight,
} from "lucide-react";

const Purpose = () => {
    const purposes = [
        {
            title: "Mindset Training",
            description:
                "We cultivate a growth mindset — empowering young minds to think beyond limits and lead with purpose.",
            icon: <Brain size={40} className="text-cyan-400" />,
        },
        {
            title: "Financial Wisdom",
            description:
                "We teach smart money habits and business leadership — helping youths build sustainable wealth and impact.",
            icon: <PiggyBank size={40} className="text-cyan-400" />,
        },
        {
            title: "Practical Skills",
            description:
                "We equip young people with in-demand skills that turn creativity and discipline into opportunity.",
            icon: <Hammer size={40} className="text-cyan-400" />,
        },
        {
            title: "Spiritual Foundation",
            description:
                "We strengthen moral and spiritual depth through biblical principles — raising value-driven leaders.",
            icon: <BookOpen size={40} className="text-cyan-400" />,
        },
        // {
        //     title: "Leadership Development",
        //     description:
        //         "We raise confident, selfless, and visionary leaders who influence their communities with integrity and innovation.",
        //     icon: <Users size={40} className="text-cyan-400" />,
        // },
        // {
        //     title: "Community Impact",
        //     description:
        //         "We foster a culture of service — empowering youths to initiate positive change within their communities.",
        //     icon: <HeartHandshake size={40} className="text-cyan-400" />,
        // },
        // {
        //     title: "Innovation & Creativity",
        //     description:
        //         "We encourage forward-thinking and problem-solving, helping young minds build ideas that shape the future.",
        //     icon: <Lightbulb size={40} className="text-cyan-400" />,
        // },
        // {
        //     title: "Career & Entrepreneurship",
        //     description:
        //         "We mentor youths to build careers and businesses that align with their purpose, passion, and long-term vision.",
        //     icon: <Rocket size={40} className="text-cyan-400" />,
        // },
    ];

    return (
        <section className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
            {/* Decorative gradient blur */}
            <div className="absolute top-1/3 -left-20 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-400/10 blur-3xl rounded-full"></div>

            {/* Section Content */}
            <div className="relative z-10 container mx-auto px-6 lg:px-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
                        Our{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                        Purpose
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Empowering the next generation to lead, innovate, and create change —
                        anchored in mindset, faith, and skill.
                    </p>
                </motion.div>

                {/* Purpose Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
                    {purposes.map((purpose, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: index * 0.1,
                                duration: 0.8,
                                ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                            className="group relative bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/20 hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="mb-6">{purpose.icon}</div>
                            <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-cyan-300 transition-colors duration-300">
                                {purpose.title}
                            </h3>
                            <p className="text-gray-300 leading-relaxed text-base">
                                {purpose.description}
                            </p>

                            {/* Accent Glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-cyan-400/30 blur-3xl rounded-full"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="w-full flex items-end justify-end mt-3">
                    <button className="text-white flex items-center gap-2 cursor-pointe rounded-full p-2 r hover:bg-gray-500 transition">
                        Read More <ArrowRight size={14} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Purpose;
