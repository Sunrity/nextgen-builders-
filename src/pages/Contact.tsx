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

        setTimeout(() => setSent(false), 7000);
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
      title: "Customer Support",
      value: "0913-096-1875 / 0813-902-3970",
      href: "tel:+2349130961875",
    },
    {
      icon: <User className="w-5 h-5 text-blue-600" />,
      title: "Founder",
      value: "0814-700-8005",
      href: "tel:+2348147008005",
    },
    {
      icon: <Mail className="w-5 h-5 text-blue-600" />,
      title: "Email Address",
      value: "alkebulanfoundation08@gmail.com",
      href: " alkebulanfoundation08@gmail.com",
    },
    {
      icon: <MapPin className="w-5 h-5 text-blue-600" />,
      title: "Location",
      value: "Port Harcourt, Nigeria",
      href: "#",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Contact Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We’re open to partnerships, collaborations, and inquiries.
            Reach out and our team will respond within 24–48 hours.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {contactInfo.map((info, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm border hover:shadow-md transition"
              >
                <div className="p-3 rounded-lg bg-blue-50">
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-md font-semibold text-gray-900">
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

          {/* Form / Success */}
          {sent ? (
            <div className="bg-white border rounded-2xl p-10 text-center shadow-md">
              <h3 className="text-2xl font-semibold text-green-600 mb-3">
                Message Sent Successfully
              </h3>
              <p className="text-gray-600">
                Thank you for reaching out. Our team will get back to you shortly.
              </p>
            </div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl shadow-lg p-8 space-y-6 border"
            >
              {/* Name */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-1 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-1 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full mt-1 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full mt-1 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full mt-1 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg transition"
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