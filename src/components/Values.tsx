"use client";

import { motion } from "framer-motion";
import {
    ShieldCheck,
    Lightbulb,
    Star,
    Crown,
    Cross,
    Flame,
} from "lucide-react";

const Values = () => {
    const values = [
        {
            title: "Faith in God",
            description:
                "We believe that true success begins with a strong foundation in faith — trusting God’s plan and walking in His wisdom.",
            icon: Cross,
            color: "from-purple-500 to-indigo-500",
        },
        {
            title: "Discipline",
            description:
                "Success isn’t an accident — it’s the result of daily discipline, consistency, and intentional effort.",
            icon: Flame,
            color: "from-orange-500 to-red-500",
        },
        {
            title: "Excellence",
            description:
                "We strive for excellence in everything we do, not for perfection, but to honor the purpose we’ve been given.",
            icon: Star,
            color: "from-yellow-400 to-amber-500",
        },
        {
            title: "Innovation",
            description:
                "We encourage creativity, innovation, and courage to think differently — turning problems into opportunities.",
            icon: Lightbulb,
            color: "from-teal-400 to-cyan-500",
        },
        {
            title: "Integrity",
            description:
                "We lead with honesty, humility, and strong moral principles that never change, even when no one is watching.",
            icon: ShieldCheck,
            color: "from-green-500 to-emerald-600",
        },
        {
            title: "Leadership",
            description:
                "We build leaders who serve with vision, inspire with love, and lead by example for a better generation.",
            icon: Crown,
            color: "from-pink-500 to-rose-500",
        },
    ];

    return (
        <section className="relative py-28 overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background">
            {/* Decorative gradient glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-accent/10 blur-3xl rounded-full" />
            </div>

            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                        The Core <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Values</span> We Live By
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Every builder in the Next Generation grows by these timeless values — the foundation of character, vision, and impact.
                    </p>
                </motion.div>

                {/* Timeline Layout */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-accent/20 via-border to-accent/20 transform -translate-x-1/2 rounded-full" />

                    <div className="space-y-24">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            const isLeft = index % 2 === 0;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 80 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`relative flex flex-col md:flex-row items-center ${
                                        isLeft ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                                >
                                    {/* Connector Dot */}
                                    <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-accent shadow-lg shadow-accent/30 z-10" />

                                {/* Content */}
                                    <div
                                        className={`md:w-1/2 mt-10 md:mt-0 ${
                                        isLeft ? "md:pr-12" : "md:pl-12"
                                        }`}
                                    >
                                        <div
                                            className={`bg-gradient-to-br ${value.color} p-[1px] rounded-3xl shadow-xl`}
                                        >
                                            <div className="bg-card/80 backdrop-blur-xl rounded-3xl p-8 hover:shadow-2xl transition-all duration-500">
                                                <div className="flex items-center gap-4 mb-5">
                                                    <div
                                                        className={`p-4 bg-gradient-to-br ${value.color} rounded-2xl text-white`}
                                                    >
                                                        <Icon className="w-7 h-7" />
                                                    </div>
                                                    <h3 className="text-2xl font-bold text-foreground">
                                                        {value.title}
                                                    </h3>
                                                </div>
                                                <p                  className="text-muted-foreground leading-relaxed text-lg">
                                                    {value.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Spacer for alternating layout */}
                                    <div className="hidden md:block md:w-1/2" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Values;
