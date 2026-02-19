import { useState } from "react";
import { Mail, Phone, MapPin, User, Send } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone:"", gender:"", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = "service_2kp849z"; // Your EmailJS Service ID
    const templateID = "template_imyvufy";   // Your EmailJS Template ID
    const publicKey = "YXrnHKPZfuuqtFedO";  // Your EmailJS Public Key

    const templateParams = {
      name: formData.name,
      email: formData.email,
      Phone: formData.phone,
      gender: formData.gender,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        toast.success("Message sent successfully!");
        setSent(true); // showing thank you message 
        setFormData({ name: "", email: "", phone:"", gender:"", message: "" });

        //Hide the message after 7 seconds
        setTimeout(() =>{
          setSent(false);
        }, 7000); // 7000ms = 7 seconds
      })
      .catch((error) => {
        console.error("Email send error:", error);
        toast.error("Failed to send message. Try again.");
      })
      .finally(() => setLoading(false));
  };

  const contactInfo = [
    { icon: <Phone className="w-5 h-5 text-blue-600" />, title: "Customer Service (1)", value: "0913-096-1875", href: "tel:+2349130961875" },
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
            If you have questions about our mentoring programs, partnership opportunities, or insights that could contribute to our growth, we are here to provide guidance and collaborate with you toward meaningful success.
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
                    <a href={info.href} className="text-gray-600 hover:text-blue-700 transition-colors">{info.value}</a>
                  ) : (
                    <p className="text-gray-600">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          { sent ? ( 
             <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
              <h3 className="text-2xl font-semibold text-green-700 mb-3">
                ✅ Message Sent!
              </h3>
              <p className="text-gray-700">
                Thank you for reaching out to Next Generation Builders.
                We have received your message and will get back to you soon.
              </p>
            </div>
            ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-2xl shadow-lg p-8 space-y-6 border border-gray-100"
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
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
               placeholder="Share your message, questions, or how you would like to grow with us..."

                rows={5}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-medium transition-all justify-center"
            >
              <Send className="w-4 h-4" />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
