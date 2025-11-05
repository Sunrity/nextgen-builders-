import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, Target, Lightbulb, Rocket, Globe2, Award, BookOpen, HeartHandshake, Briefcase } from "lucide-react";
import aboutBg from "../assets/about-bg.jpeg";

const About = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
                <img
                    src={aboutBg}
                    alt="Next Generation Builders"
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/90 to-transparent" />

                <div className="relative z-10 container mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-4xl md:text-6xl font-bold md:font-extrabold mb-6"
                    >
                        About <span className="text-blue-300">Next Generation Builders</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100 leading-relaxed"
                    >
                        We are a growing movement committed to equipping the next generation with wisdom, leadership, and vision — empowering them to build impactful lives, organizations, and nations.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        className="mt-6 italic text-blue-200"
                    >
                        “We don’t just raise leaders; we build nation-transformers.”
                    </motion.p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-24 container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-bold mb-4">Our Story</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        The <strong>Next Generation Builders Organization (NGBO)</strong> began with a simple yet powerful belief: <em>that leadership, purpose, and godly values can reshape societies when cultivated early.</em>
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        Founded by visionary minds passionate about youth development, NGBO started as a local mentorship network. Over time, it grew into a structured initiative aimed at raising young men and women who think differently, act intentionally, and influence positively.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        Today, NGBO continues to evolve — nurturing leaders who combine faith, innovation, and excellence to build solutions that impact their communities and extend across borders.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center"
                    >
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white p-10 rounded-2xl shadow-lg max-w-sm">
                            <Globe2 className="w-12 h-12 mb-4" />
                            <h3 className="text-2xl font-semibold mb-2">A Vision Beyond Borders</h3>
                            <p className="text-blue-100 leading-relaxed">
                                Though young and growing, NGBO envisions a global footprint — influencing lives across nations through leadership programs, mentorship platforms, and impact-driven partnerships.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* What We Do */}
            <section className="bg-gray-50 dark:bg-gray-900 py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-12">What We Do</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {[
                            {
                                icon: <Users className="w-10 h-10 text-blue-600 mx-auto" />,
                                title: "Mentorship",
                                desc: "We provide mentorship that helps young people discover purpose, build vision, and develop discipline to achieve lasting impact.",
                            },
                            {
                                icon: <Target className="w-10 h-10 text-blue-600 mx-auto" />,
                                title: "Leadership Training",
                                desc: "Through seminars and programs, we raise leaders who embody excellence, service, and integrity in their spheres of influence.",
                            },
                            {
                                icon: <Lightbulb className="w-10 h-10 text-blue-600 mx-auto" />,
                                title: "Innovation & Skills",
                                desc: "We equip youths with creative thinking and technical skills needed to build solutions for real-world challenges.",
                            },
                            {
                                icon: <HeartHandshake className="w-10 h-10 text-blue-600 mx-auto" />,
                                title: "Faith & Purpose",
                                desc: "We uphold faith-based principles that inspire hope, purpose, and moral responsibility in leadership and innovation.",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all"
                            >
                                {item.icon}
                                <h3 className="text-xl font-semibold mt-4 mb-2">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="bg-white dark:bg-gray-950 py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-12">Our Core Values</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {[
                            { icon: <Lightbulb className="w-10 h-10 text-blue-600" />, title: "Innovation", desc: "We embrace creativity and forward-thinking to build solutions that shape the future." },
                            { icon: <Target className="w-10 h-10 text-blue-600" />, title: "Purpose", desc: "We live intentionally, focusing on impact and meaning in all that we do." },
                            { icon: <Users className="w-10 h-10 text-blue-600" />, title: "Leadership", desc: "We cultivate integrity, courage, and influence to lead others with excellence." },
                            { icon: <Rocket className="w-10 h-10 text-blue-600" />, title: "Growth", desc: "We believe in continuous personal, spiritual, and professional development." },
                        ].map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all"
                        >
                            <div className="flex justify-center mb-4">{value.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{value.desc}</p>
                        </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Future Goals */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl font-bold mb-6"
                >
                    Looking Ahead
                </motion.h2>
                <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                    As a growing organization, NGBO is laying the foundation for a future where young leaders across the globe collaborate to solve complex problems, champion innovation, and build thriving communities.  
                    We envision leadership academies, mentorship hubs, and digital learning platforms reaching millions of passionate builders worldwide.
                </p>
                <Briefcase className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <p className="italic text-blue-500">"The future belongs to those who are willing to build it."</p>
                </div>
            </section>

            {/* Impact Section */}
            {/* <section className="py-20 bg-white dark:bg-gray-950">
                <div className="container mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl font-bold mb-12"
                >
                    Our Impact in Numbers
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-10">
                    {[
                    { icon: <Users className="w-10 h-10 text-blue-600 mx-auto" />, label: "Youths Mentored", value: "5,000+" },
                    { icon: <Award className="w-10 h-10 text-blue-600 mx-auto" />, label: "Leadership Programs", value: "120+" },
                    { icon: <BookOpen className="w-10 h-10 text-blue-600 mx-auto" />, label: "Communities Reached", value: "20+" },
                    ].map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all"
                    >
                        {stat.icon}
                        <h3 className="text-4xl font-bold mt-4 mb-2 text-blue-600">{stat.value}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
                    </motion.div>
                    ))}
                </div>
                </div>
            </section> */}

            {/* CTA */}
            <section className="py-20 text-center">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl font-bold mb-6"
                >
                    Ready to Build the Future with Us?
                </motion.h2>
                <Button
                    size="lg"
                    onClick={() => (window.location.href = "/contact")}
                    className="px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-indigo-500 hover:to-blue-600 text-white font-semibold rounded-2xl shadow-lg shadow-blue-500/20 transition-all hover:scale-105"
                >
                    Get Involved
                </Button>
            </section>
        </div>
    );
};

export default About;
