"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const partners = [
  {
    name: "Rescaf",
    description: "Building innovative digital solutions and empowering young tech talents.",
    logo: "/partners/rescaf.jpg",
    website: "https://rescaf.io",
  },
  {
    name: "Scitylana",
    description: "Supporting local tech communities and educational initiatives.",
    logo: "/partners/Scitylana.jpg",
    website: "https://www.scitylana.co.uk",
  },
  {
    name: "8Cousins",
    description: "Investing in youth development and innovation projects.",
    logo: "/partners/8cousins.png",
    website: "https://example.com",
  },
  {
    name: "MJ Netwood",
    description: "Mentorship-driven tech community for young developers.",
    logo: "/mj-next.webp",
    website: "https://mjnextwoodglobal.com",
  },
];

// Replace with your Google Apps Script Web App URL
const GOOGLE_SHEET_URL = "YOUR_WEB_APP_URL_HERE";

// Organization Bank Details
const ORG_BANK_DETAILS = {
  name: "NextGenBuilders",
  bank: "First Bank of Nigeria",
  accountNumber: "123......",
};

const PartnersPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [selectedWebsite, setSelectedWebsite] = useState<string | null>(null);
  const [selectedName, setSelectedName] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          organizationAccountName: ORG_BANK_DETAILS.name,
          bankName: ORG_BANK_DETAILS.bank,
          accountNumber: ORG_BANK_DETAILS.accountNumber,
        }),
      });
      setSubmitted(true);
      setFormData({ name: "", email: "", organization: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-12 py-16 space-y-20">
      {/* Contact Form */}
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-2 text-center text-blue-700">
          Partner With Us
        </h2>

        {/* Friendly Message */}
        <p className="text-center text-gray-600 mb-6">
          We believe in building strong partnerships that drive innovation and
          growth. Reach out to us today and let’s create impact together.
        </p>

        {submitted && (
          <div className="bg-green-100 text-green-700 p-4 mb-4 rounded-lg text-center font-medium">
            Thank you! Your message has been sent successfully.
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="text"
            name="organization"
            placeholder="Organization Name"
            value={formData.organization}
            onChange={handleChange}
            required
            className="p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
            className="p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>

        {/* Organization Bank Details */}
        <div className="mt-6 text-center text-gray-700 space-y-1">
          <p>
            <strong>Account Name:</strong> {ORG_BANK_DETAILS.name}
          </p>
          <p>
            <strong>Bank:</strong> {ORG_BANK_DETAILS.bank}
          </p>
          <p>
            <strong>Account Number:</strong> {ORG_BANK_DETAILS.accountNumber}
          </p>
        </div>
      </div>

      {/* Partners Grid */}
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">
          Our Partners
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl shadow-2xl p-6 text-center hover:-translate-y-2 hover:shadow-3xl transition-transform"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-20 mx-auto mb-4 object-contain bg-white p-2 rounded-xl"
              />
              <h3 className="font-bold text-xl">{partner.name}</h3>
              <p className="text-sm mt-2 text-blue-100">{partner.description}</p>

              <div className="flex gap-3 justify-center mt-4 flex-wrap">
                <button
                  onClick={() => {
                    setSelectedWebsite(partner.website);
                    setSelectedName(partner.name);
                  }}
                  className="bg-white text-blue-600 px-5 py-2 rounded-xl text-sm font-semibold hover:bg-blue-100 transition-colors"
                >
                  Preview
                </button>

                <a
                  href={partner.website}
                  target="_blank"
                  className="border border-white px-5 py-2 rounded-xl text-sm hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Visit
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Preview Modal */}
      {selectedWebsite && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-6xl h-[80vh] rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-semibold text-lg">{selectedName}</h3>
              <button
                onClick={() => setSelectedWebsite(null)}
                className="text-red-500 font-bold text-xl"
              >
                ✕
              </button>
            </div>
            <iframe
              src={selectedWebsite}
              className="w-full h-full"
              title={selectedName}
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default PartnersPage;