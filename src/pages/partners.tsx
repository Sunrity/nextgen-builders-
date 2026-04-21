"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone } from "lucide-react";

/* ---------------- PARTNERS DATA (REDUCED CARDS) ---------------- */
const partners = [
  {
    name: "Rescaf",
    description: "Innovating digital solutions for youth empowerment.",
    logo: "/partners/rescaf.jpg",
    website: "https://rescaf.io",
  },
  {
    name: "Scitylana",
    description: "Supporting education and tech communities.",
    logo: "/partners/Scitylana.jpg",
    website: "https://www.scitylana.co.uk",
  },
  {
    name: "8Cousins",
    description: "Driving youth innovation and creativity.",
    logo: "/partners/8c.png",
    website: "https://8-cousins-digital-home.vercel.app/",
  },
];

/* ---------------- GOOGLE SHEET ---------------- */
const GOOGLE_SHEET_URL = "YOUR_WEB_APP_URL_HERE";

/* ---------------- ORGANIZATION ---------------- */
const ORG_BANK_DETAILS = {
  name: "Alkebulan Foundation",
  bank: "First Bank of Nigeria",
  accountNumber: "123......",
};

/* ---------------- PAGE ---------------- */
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

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          organization: "Alkebulan Foundation",
          bankName: ORG_BANK_DETAILS.bank,
          accountNumber: ORG_BANK_DETAILS.accountNumber,
        }),
      });

      setSubmitted(true);
      setFormData({ name: "", email: "", organization: "", message: "" });

      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 space-y-20">

      {/* ---------------- FORM ---------------- */}
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">

        <h2 className="text-3xl font-bold text-center text-blue-700">
          Partner With Alkebulan Foundation
        </h2>

        <p className="text-center text-gray-600 mt-2 mb-6">
          Let’s build impact together through innovation and collaboration.
        </p>

        {/* SUCCESS */}
        {submitted && (
          <div className="bg-green-100 text-green-700 p-3 mb-4 rounded-lg text-center">
            Message sent successfully ✔
          </div>
        )}

        {/* FORM */}
        <form onSubmit={handleSubmit} className="grid gap-4">

          <input name="name" placeholder="Your Name"
            className="p-3 border rounded-xl"
            value={formData.name}
            onChange={handleChange}
            required />

          <input name="email" placeholder="Email"
            className="p-3 border rounded-xl"
            value={formData.email}
            onChange={handleChange}
            required />

          <input name="organization" placeholder="Organization"
            className="p-3 border rounded-xl"
            value={formData.organization}
            onChange={handleChange}
            required />

          <textarea name="message" placeholder="Message"
            className="p-3 border rounded-xl"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required />

          <button className="bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700">
            Send Message
          </button>
        </form>

        {/* ---------------- BANK DETAILS (CONTACT STYLE + SHORT MESSAGE) ---------------- */}
        <div className="mt-10 space-y-4">

          <h3 className="text-xl font-bold text-center">
            Bank Details
          </h3>

          {/* Short Message */}
          <p className="text-center text-gray-600 text-sm mb-2">
            Every contribution you make helps us educate, empower, and transform lives across communities.
          </p>

          {/* Account Name */}
          <div className="flex gap-4 p-4 border rounded-xl hover:shadow-md transition">
            <div className="p-3 bg-blue-50 rounded-lg">
              <User className="text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Account Name</p>
              <p className="font-medium">{ORG_BANK_DETAILS.name}</p>
            </div>
          </div>

          {/* Bank */}
          <div className="flex gap-4 p-4 border rounded-xl hover:shadow-md transition">
            <div className="p-3 bg-blue-50 rounded-lg">
              <Mail className="text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Bank Name</p>
              <p className="font-medium">{ORG_BANK_DETAILS.bank}</p>
            </div>
          </div>

          {/* Account Number */}
          <div className="flex gap-4 p-4 border rounded-xl hover:shadow-md transition">
            <div className="p-3 bg-blue-50 rounded-lg">
              <Phone className="text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Account Number</p>
              <p className="font-medium tracking-widest">
                {ORG_BANK_DETAILS.accountNumber}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ---------------- PARTNERS (SMALLER CARDS) ---------------- */}
      <div>

        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
          Our Partners
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {partners.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-blue-600 text-white p-5 rounded-xl text-center"
            >

              <img
                src={p.logo}
                className="h-16 mx-auto mb-3 bg-white p-2 rounded-lg"
              />

              <h3 className="font-bold">{p.name}</h3>
              <p className="text-sm text-blue-100 mt-1">
                {p.description}
              </p>

              <div className="mt-3 flex justify-center gap-2">

                <button
                  onClick={() => {
                    setSelectedWebsite(p.website);
                    setSelectedName(p.name);
                  }}
                  className="bg-white text-blue-600 px-3 py-1 rounded-lg text-sm"
                >
                  Preview
                </button>

                <a
                  href={p.website}
                  target="_blank"
                  className="border px-3 py-1 rounded-lg text-sm"
                >
                  Visit
                </a>

              </div>
            </motion.div>
          ))}

        </div>
      </div>

      {/* ---------------- MODAL ---------------- */}
      {selectedWebsite && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">

          <div className="bg-white w-full max-w-5xl h-[80vh] rounded-xl overflow-hidden">

            <div className="p-3 flex justify-between border-b">
              <h3>{selectedName}</h3>
              <button onClick={() => setSelectedWebsite(null)}>✕</button>
            </div>

            <iframe src={selectedWebsite} className="w-full h-full" />

          </div>

        </div>
      )}

    </section>
  );
};

export default PartnersPage;