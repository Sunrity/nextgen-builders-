"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Users, Heart, Globe2 } from "lucide-react";

const faqs = [
  {
    section: "Program Eligibility",
    question: "Who is eligible to join your programs?",
    answer:
      "Our programs are open to anyone who is  passionate about learning, leadership, and personal growth. No prior experience is required, only commitment and eagerness to learn.",
  },
  {
    section: "How to Volunteer",
    question: "How can I volunteer with your NGO?",
    answer:
      "Volunteering is easy! Visit our 'Get Involved' page to submit a volunteer application. We offer opportunities in mentorship, events, skill training, and administration. Orientation will be provided for all volunteers.",
  },
  {
    section: "How to Donate",
    question: "How can I donate to support your mission?",
    answer:
      "You can support our programs financially via our secure online platform or bank transfer. Donations help provide mentorship, training, and resources to youth. Every contribution, big or small, makes a difference.",
  },
  {
    section: "How Partnerships Work",
    question: "How does your partnership program work?",
    answer:
      "We partner with organizations, schools, and businesses to expand our impact. Partnerships may involve co-hosting events, sharing resources, or collaborative projects. Interested organizations can contact us through our partnership form.",
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white text-gray-800">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[50vh] flex items-center justify-center text-center bg-blue-50">
        <div className="px-6 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-blue-700 mb-4"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 leading-relaxed text-lg"
          >
            Find answers to the most common questions about our NGO, programs, and how you can get involved.
          </motion.p>
        </div>
      </section>

      {/* ================= FAQ SECTIONS ================= */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        {["Program Eligibility", "How to Volunteer", "How to Donate", "How Partnerships Work"].map(
          (sectionTitle) => (
            <div key={sectionTitle} className="mb-12">
              <h2 className="text-2xl font-bold text-blue-600 mb-6">{sectionTitle}</h2>

              <div className="space-y-4">
                {faqs
                  .filter((faq) => faq.section === sectionTitle)
                  .map((faq, index) => (
                    <div
                      key={index}
                      className="bg-white shadow rounded-2xl overflow-hidden border"
                    >
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-blue-50 focus:outline-none"
                      >
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <span className="text-blue-600 text-xl">{openIndex === index ? "−" : "+"}</span>
                      </button>
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={openIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-4 text-gray-700"
                      >
                        {faq.answer}
                      </motion.div>
                    </div>
                  ))}
              </div>
            </div>
          )
        )}
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-blue-50 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-3xl mx-auto"
        >
          <Globe2 className="mx-auto text-blue-600 mb-4" size={45} />
          <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-gray-700 mb-6">
            If your question isn’t listed here, we’d love to hear from you directly. Reach out and we’ll get back to you promptly.
          </p>
          <Button
            onClick={() => (window.location.href = "/contact")}
            className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg hover:bg-blue-700"
          >
            Contact Us
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default FAQPage;