import { useState } from "react";
import { Mail, Phone, MapPin, Send, User } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const serviceID = "YOUR_SERVICE_ID";
        const templateID = "YOUR_TEMPLATE_ID";
        const publicKey = "YOUR_PUBLIC_KEY";

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_name: "Next Generation Builders CEO", // optional
        };

        emailjs
        .send(serviceID, templateID, templateParams, publicKey)
        .then(() => {
            toast.success("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
            console.error("Email send error:", error);
            toast.error("Failed to send message.");
        })
        .finally(() => setLoading(false));
    };

    const contactInfo = [
        { icon: <Phone className="w-5 h-5 text-blue-600" />, title: "Customer Service (1)", value: "0701-323-6152", href: "tel:+2347013236152" },
        { icon: <Phone className="w-5 h-5 text-blue-600" />, title: "Customer Service (2)", value: "0813-902-3970", href: "tel:+2348139023970" },
        { icon: <User className="w-5 h-5 text-blue-600" />, title: "CEO Contact", value: "0814-700-8005", href: "tel:+2348147008005" },
        { icon: <Mail className="w-5 h-5 text-blue-600" />, title: "Email", value: "info@nextgenerationbuilders.org", href: "mailto:contact@nextgenbuilders.org" },
        { icon: <MapPin className="w-5 h-5 text-blue-600" />, title: "Office", value: "Port Harcourt, Nigeria", href: "#" },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-5"
                    >
                        Get in Touch
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        Whether you have a question about our mentoring programs, partnership opportunities, or general inquiries — we’re here to help.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="space-y-10"
                    >
                        {contactInfo.map((info, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-blue-50">{info.icon}</div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900">{info.title}</h4>
                                    {info.href !== "#" ? (
                                        <a href={info.href} className="text-gray-600 hover:text-blue-700 transition-colors">
                                            {info.value}
                                        </a>
                                    ) : (
                                        <p className="text-gray-600">{info.value}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="bg-gray-50 rounded-2xl shadow-sm p-8 space-y-6"
                    >
                        <div>
                            <label className="block text-sm font-medium text-gray-800 mb-2">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-800 mb-2">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-800 mb-2">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Write your message..."
                                rows={5}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                                required
                            />
                        </div>

                        <Button
                            type="submit"
                            disabled={loading}
                            className="w-full sm:w-auto flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-medium transition-all"
                        >
                            <Send className="w-4 h-4" />
                            {loading ? "Sending..." : "Send Message"}
                        </Button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
