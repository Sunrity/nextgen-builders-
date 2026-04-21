"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, User, Send } from "lucide-react";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const ContactDonatePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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

    emailjs
      .send(
        "service_2kp849z",
        "template_imyvufy",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "YXrnHKPZfuuqtFedO"
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setSent(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        setTimeout(() => setSent(false), 5000);
      })
      .catch(() => {
        toast.error("Failed to send message.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white text-center py-16 px-6">
        <h1 className="text-3xl md:text-5xl font-bold mt-20">
          Contact & Support Us
        </h1>
        <p className="text-gray-200 mt-3 max-w-2xl mx-auto">
          Get in touch, partner with us, or support our mission through donations.
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div className="space-y-8">

          {/* CONTACT INFO */}
          <div className="bg-white p-6 rounded-xl shadow space-y-5">

            <h2 className="text-xl font-bold">Contact Information</h2>

            <div className="flex items-center gap-3">
              <Phone className="text-blue-600" />
              <p>+234 913 096 1875 / +234 813 902 3970</p>
            </div>

            <div className="flex items-center gap-3">
              <User className="text-blue-600" />
              <p>Founder: 0814 700 8005</p>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-blue-600" />
              <p>alkebulanfoundation08@gmail.com</p>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-blue-600" />
              <p>Port Harcourt, Nigeria</p>
            </div>

          </div>

          {/* DONATION */}
          <div className="bg-white p-6 rounded-xl shadow border">

            <h2 className="text-xl font-bold mb-3 text-blue-600">
              Support Our Mission
            </h2>

            <p className="text-gray-600 mb-4">
              Your support is more than a donation, it is a lifeline that helps us empower communities, transform lives, and create lasting impact.
            </p>

            <div className="space-y-2 text-gray-700">
              <p><strong>Bank:</strong> Zenith Bank</p>
              <p><strong>Account:</strong> Alkebulan Foundation</p>
              <p><strong>Account No:</strong> 0000000000</p>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="bg-white p-6 rounded-xl shadow">

          {sent ? (
            <div className="text-center py-10">
              <h3 className="text-green-600 text-xl font-bold">
                Message Sent Successfully 🎉
              </h3>
              <p className="text-gray-600 mt-2">
                We will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">

              <h2 className="text-xl font-bold mb-2">
                Send a Message
              </h2>

              <input
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                required
              />

              <input
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                required
              />

              <input
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
              />

              <textarea
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full p-3 border rounded-lg"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition flex justify-center items-center gap-2"
              >
                <Send size={16} />
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>
          )}

        </div>

      </div>

    </div>
  );
};

export default ContactDonatePage;