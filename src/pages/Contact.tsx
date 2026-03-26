import { useState } from "react";
import { Mail, Phone, MapPin, User, Send } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = "service_2kp849z";
    const templateID = "template_imyvufy";
    const publicKey = "YXrnHKPZfuuqtFedO";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      gender: formData.gender,
      message: `
New Contact Message from Next Generation Builders

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Gender: ${formData.gender}

Message:
${formData.message}
      `,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        toast.success("Message sent successfully!");
        setSent(true);

        setFormData({
          name: "",
          email: "",
          phone: "",
          gender: "",
          message: "",
        });

        setTimeout(() => {
          setSent(false);
        }, 7000);
      })
      .catch((error) => {
        console.error("Email send error:", error);
        toast.error("Failed to send message. Try again.");
      })
      .finally(() => setLoading(false));
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5 text-blue-600" />,
      title: "Customer Service (1)",
      value: "0913-096-1875",
      href: "tel:+2349130961875",
    },
    {
      icon: <Phone className="w-5 h-5 text-blue-600" />,
      title: "Customer Service (2)",
      value: "0813-902-3970",
      href: "tel:+2348139023970",
    },
    {
      icon: <User className="w-5 h-5 text-blue-600" />,
      title: "Founder",
      value: "0814-700-8005",
      href: "tel:+2348147008005",
    },
    {
      icon: <Mail className="w-5 h-5 text-blue-600" />,
      title: "Email",
      value: "nextgenerationbuilders4@gmail.com",
      href: "mailto:nextgenerationbuilders4@gmail.com",
    },
    {
      icon: <MapPin className="w-5 h-5 text-blue-600" />,
      title: "Office",
      value: "Port Harcourt, Nigeria",
      href: "#",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-5"
          >
            Get in Touch
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            If you have questions about our mentoring programs, partnership
            opportunities, or insights that could contribute to our growth,
            we are here to guide and collaborate with you.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            {contactInfo.map((info, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-50">
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {info.title}
                  </h4>
                  {info.href !== "#" ? (
                    <a
                      href={info.href}
                      className="text-gray-600 hover:text-blue-700"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-600">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form or Success Message */}
          {sent ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
              <h3 className="text-2xl font-semibold text-green-700 mb-3">
                ✅ Message Sent Successfully!
              </h3>
              <p className="text-gray-700">
                Thank you for reaching out to Next Generation Builders.
                We’ve received your message and will respond shortly.
              </p>
            </div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl shadow-lg p-8 space-y-6 border"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border rounded-lg px-4 py-3"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full border rounded-lg px-4 py-3"
                required
              />

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full border rounded-lg px-4 py-3"
              />

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows={5}
                className="w-full border rounded-lg px-4 py-3"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg"
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