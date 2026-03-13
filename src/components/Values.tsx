"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import mentoringImage from "@/assets/mentoring-image.jpg";

const Mentoring: React.FC = () => {
  const programs = [
    {
      title: "Leadership Development",
      description: "Intensive training on leadership principles, vision casting, and team building.",
      duration: "12 weeks",
      format: "Online + Workshops",
    },
    {
      title: "Financial Literacy",
      description: "Comprehensive training on money management, investing, and business building.",
      duration: "8 weeks",
      format: "Online Sessions",
    },
    {
      title: "Mindset Mastery",
      description: "Transform your thinking patterns and develop a success-oriented mindset.",
      duration: "6 weeks",
      format: "Online Coaching",
    },
    {
      title: "Faith & Purpose",
      description: "Discover your divine purpose and align your goals with biblical principles.",
      duration: "10 weeks",
      format: "Online + Community",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Background shapes */}
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-blue-200/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 sm:w-72 sm:h-72 bg-indigo-300/20 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Online{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              Mentoring
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your life with guidance from seasoned mentors who help you
            develop leadership, mindset, and purpose-driven growth.
          </p>
        </motion.div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={mentoringImage}
              alt="Mentoring Program"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-center lg:text-left"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 leading-tight">
              Grow with Purpose and Community
            </h3>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              Our mentoring system blends biblical values, practical leadership,
              and community-based learning — all online, flexible, and transformational.
            </p>

            <ul className="space-y-2 text-gray-700 text-left sm:text-left max-w-md mx-auto lg:mx-0">
              {[
                "Live Interactive Mentorship",
                "Personalized Coaching & Growth Plans",
                "Collaborative Learning Groups",
                "Practical Assignments & Real Projects",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>

            <Button
              className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-xl shadow-lg transition-all duration-300"
            >
              Join Mentoring Program
            </Button>
          </motion.div>
        </div>

        {/* Programs Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20"
        >
          {programs.map((program, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl rounded-2xl border border-gray-200 transition-all">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900 mb-1">
                    {program.title}
                  </CardTitle>
                  <p className="text-sm text-blue-600 font-medium">
                    {program.duration} • {program.format}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl py-12 px-6 sm:py-16 sm:px-12 text-center shadow-xl"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready to Take the Next Step?
          </h3>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto text-blue-100">
            Join us in our online mentoring today and be equipped to lead with confidence, faith, and purpose.
          </p>
          <a
            href="https://chat.whatsapp.com/JL6fsvqSshrAGbByW2K80Z"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-700 hover:bg-blue-100 text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 rounded-xl font-semibold inline-block"
          >
            Join Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Mentoring;