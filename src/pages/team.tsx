"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const TeamPage = () => {
  const [activeTab, setActiveTab] = useState("mentors");

  /* ===================== DATA ===================== */
  const mentors = [
    {
      name: "Michael",
      role: "Leadership Mentor",
      location: "Austria, Europe",
      image: "/mentors/Michael.jpg",
      description: "Equipping young leaders with principles to lead teams and build impactful organizations."
    },
    {
      name: "Felix Kpormon",
      role: "Mindset Coach",
      location: "Port Harcourt, Nigeria",
      image: "/mentors/Felix.jpg",
      description: "Helping young people develop the mindset required to succeed in life and leadership."
    },
    {
      name: "Francis Labi",
      role: "Tech Coach",
      location: "Los Angeles, USA",
      image: "/mentors/Francis.jpg",
      description: "Empowering developers with practical tech skills to thrive in the digital world."
    },
    {
      name: "Samuel Nsoedo",
      role: "Financial Coach",
      location: "London, United Kingdom",
      image: "/mentors/Samuel.jpg",
      description: "Teaching financial discipline, wealth creation, and smart money management."
    },
    {
      name: "Dr. Princewill Opubo",
      role: "Innovation Mentor",
      location: "Port Harcourt, Nigeria",
      image: "/mentors/Princewill.jpg",
      description: "Guiding young minds to think creatively, solve problems, and innovate for the future."
    },
  ];

  const mentees = [
    {
      name: "Folorunsho Esther",
      role: "Graphic Designer",
      location: "Lagos, Nigeria",
      image: "/testimonials/Esther.jpg",
      testimonial:
        "Since joining the program, I have improved my design skills and gained the confidence to take on more challenging projects.",
    },
    {
      name: "Jackson Ndifreke",
      role: "Web Developer",
      location: "Port Harcourt, Nigeria",
      image: "/testimonials/Jackson.jpg",
      testimonial:
        "The mentorship and practical exercises helped me understand coding concepts more clearly and apply them in real projects.",
    },
    {
      name: "Omereji Success Sunday",
      role: "UI/UX Designer",
      location: "Port Harcourt, Nigeria",
      image: "/testimonials/Success.jpg",
      testimonial:
        "I have learned how to approach design challenges effectively and improve user experience in my projects.",
    },
    {
      name: "Marion Sakwa",
      role: "Entrepreneur",
      location: "Nairobi, Kenya",
      image: "/testimonials/Rion.jpg",
      testimonial:
        "The program has enhanced my business thinking and helped me plan better for my future startup ideas.",
    },
  ];

  const instructors = [
    { 
      name: "Amb. Prince Igwe C.", 
      course: "Graphics Designer", 
      location: "Port Harcourt, Nigeria", 
      image: "/Instructors/Prince-Igwe.jpg",
      testimonial: "It’s fulfilling to help mentees discover their talents and build their confidence step by step."
    },
    { 
      name: "Suka Lazarus", 
      course: "Web Developer", 
      location: "Nairobi, Kenya", 
      image: "/Instructors/suka.jpeg",
      testimonial: "Guiding young people and seeing them improve is one of the most rewarding experiences."
    },
    { 
      name: "Jerry Zhiya", 
      course: "Web Developer", 
      location: "Abuja, Nigeria", 
      image: "/Instructors/jerry.jpg",
      testimonial: "I enjoy sharing practical skills that mentees can immediately apply and grow from."
    },
    { 
      name: "Esther", 
      course: "Data Analytics", 
      location: "Abuja, Nigeria", 
      image: "", 
      testimonial: "Helping mentees understand data and solve real problems motivates me every day."
    },
  ];

  const tabs = [
    { id: "mentors", label: "Mentors" },
    { id: "mentees", label: "Mentees" },
    { id: "instructors", label: "Instructors" },
  ];

  return (
    <div className="team-page bg-gray-50 text-gray-800">

      {/* ===================== HERO ===================== */}
      <section className="py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Our mentors, mentees, and instructors are committed to building the next generation of leaders, innovators, and changemakers.
        </p>
      </section>

      {/* ===================== TABS ===================== */}
      <div className="flex justify-center gap-4 mb-12">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`px-6 py-2 rounded-xl font-semibold ${
              activeTab === tab.id
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 shadow hover:shadow-md"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ===================== TEAM CARDS ===================== */}
      <section className="max-w-7xl mx-auto px-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {(activeTab === "mentors"
          ? mentors
          : activeTab === "mentees"
          ? mentees
          : instructors
        ).map((member, idx) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="p-6 text-center rounded-2xl shadow-lg hover:shadow-xl transition hover:scale-105">
              <img
                src={member.image || "https://via.placeholder.com/150"}
                alt={member.name}
                className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-xl mb-1">{member.name}</h3>
              <p className="text-blue-600 font-semibold mb-1">
                {activeTab === "instructors" ? member.course : member.role}
              </p>
              {member.location && <p className="text-blue-500 text-sm mb-2">{member.location}</p>}
              {(member.description || member.testimonial) && (
                <p className="text-gray-600 text-sm">
                  {member.description || member.testimonial}
                </p>
              )}
            </Card>
          </motion.div>
        ))}
      </section>

      {/* ===================== CTA BUTTONS ===================== */}
      <div className="flex justify-center mt-12">
        {activeTab === "mentors" && (
          <Button className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-800">
            Become a Mentor
          </Button>
        )}
        {activeTab === "mentees" && (
          <Button className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-800">
            Join as a Mentee
          </Button>
        )}
        {activeTab === "instructors" && (
          <Button className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-800">
            Become an Instructor
          </Button>
        )}
      </div>
    </div>
  );
};

export default TeamPage;