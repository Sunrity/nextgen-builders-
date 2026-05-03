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
      name: "Ugwumba Daniel Ikechukwu",
      role: "Graphic Designer",
      location: "Anambra, Nigeria ",
      image: "/testimonials/dannybest.jpeg",
      testimonial:
        "Since joining the program, I have improved my design skills and gained the confidence to take on more challenging projects.",
    },
    {
      name: "Jackson Ndifreke",
      role: "Web Developer",
      location: "Port Harcourt, Nigeria",
      image: "/testimonials/Jackson.jpg",
      testimonial:
        "The mentorship and hands-on exercises helped me improve my coding skills and apply them effectively in real projects.",
    },
    {
      name: "Omereji Success Sunday",
      role: "UI/UX Designer",
      location: "Port Harcourt, Nigeria",
      image: "/testimonials/Success.jpg",
      testimonial:
        "I have learned to approach design challenges strategically and create better user experiences in my projects.",
    },
    {
      name: "Marion Sakwa",
      role: "Entrepreneur",
      location: "Nairobi, Kenya",
      image: "/testimonials/Rion.jpg",
      testimonial:
        "The program enhanced my business thinking and gave me clarity to plan and execute my startup ideas.",
    },
    {
      name: "Demaro Uduyork Wilfred",
      role: "Front-end Developer",
      location: "Port Harcourt, Nigeria",
      image: "/testimonials/Demaro.jpeg",
      testimonial:
        "Through this program, I gained confidence in front-end development and can now build responsive and interactive web applications.",
    },
    {
      name: "Blessing Chidinma Chiemela ",
      role: "Video Editor",
      location: "Abia, Nigeria",
      image: "/testimonials/Blessing.jpeg",
      testimonial:
        "Being part of this program has significantly improved my video editing skills. I have learned how to create engaging content, tell better stories through visuals, and edit with confidence using professional tools.",
    },
  ];

  const instructors = [
    { 
      name: "Amb. Prince Igwe C.", 
      course: "Skill Group Leader", 
      location: "Port Harcourt, Nigeria", 
      image: "/Instructors/Prince-Igwe.jpg",
      testimonial: "Leads and coordinates training sessions, guiding members to build practical skills, grow confidence, and apply what they learn for real impact."
    },
    { 
      name: "John .", 
      course: "Graphics Designer", 
      location: "Port Harcourt, Nigeria", 
      image: "/Instructors/John.jpeg",
      testimonial: "It’s fulfilling to help mentees discover their talents and build their confidence step by step."
    },
    { 
      name: "Suka Lazarus", 
      course: "Web Developer", 
      location: "Port Harcourt, Nigeria", 
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
      name: "Folorunsho Esther", 
      course: "Data Analytics", 
      location: "Lagos, Nigeria", 
      image: "/Instructors/Esther.jpg",
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

      {/* HERO */}
      <section className="py-20 text-center bg-[url('/hero-bg.jpg')] bg-cover bg-center">
        <h1 className="text-4xl md:text-5xl font-bold mt-20">Meet Our Team</h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-20">
          Our mentors, mentees, and instructors are committed to building the next generation of leaders.
        </p>
      </section>

      {/* TABS */}
      <div className="flex justify-center gap-4 mb-12 mt-10">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`px-6 py-2 rounded-xl font-semibold ${
              activeTab === tab.id
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 shadow"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* CARDS */}
      <section className="max-w-7xl mx-auto px-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {(activeTab === "mentors"
          ? mentors
          : activeTab === "mentees"
          ? mentees
          : instructors
        ).map((member, idx) => (
          <motion.div key={idx} className="h-full">
            <Card className="h-full flex flex-col p-6 text-center rounded-2xl shadow-lg hover:shadow-xl transition">

              <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full flex-shrink-0">
                <img
                  src={member.image || "https://via.placeholder.com/150"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col flex-grow">
                <h3 className="font-bold text-xl mb-1">{member.name}</h3>

                <p className="text-blue-600 font-semibold mb-1">
                  {activeTab === "instructors" ? member.course : member.role}
                </p>

                {member.location && (
                  <p className="text-blue-500 text-sm mb-2">
                    {member.location}
                  </p>
                )}

                <p className="text-gray-600 text-sm flex-grow">
                  {member.description || member.testimonial}
                </p>
              </div>

            </Card>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <div className="flex justify-center mt-12">
        <Button className="bg-blue-700 text-white px-6 py-3 rounded-lg">
          {activeTab === "mentors"
            ? "Become a Mentor"
            : activeTab === "mentees"
            ? "Join as a Mentee"
            : "Become an Instructor"}
        </Button>
      </div>
    </div>
  );
};

export default TeamPage;