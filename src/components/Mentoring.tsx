"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Mentoring = () => {
  const [openMentorForm, setOpenMentorForm] = useState(false);

  /* ===================== MENTORS ===================== */
  const mentors = [
    {
      name: "Michael",
      role: "Leadership Mentor",
      location: "Austria, Europe",
      image: "/mentors/Michael.jpg",
      description:
        "Equipping young leaders with the principles needed to lead teams and build impactful organizations.",
    },
    {
      name: "Felix Kpormon",
      role: "Mindset Coach",
      location: "Port Harcourt, Nigeria",
      image: "/mentors/Felix.jpg",
      description:
        "Helping young people develop the mindset required to succeed in life and leadership.",
    },
    {
      name: "Francis Labi",
      role: "Tech Coach",
      location: "Los Angeles, USA",
      image: "/mentors/Francis.jpg",
      description:
        "Empowering developers with practical tech skills to thrive in the digital world.",
    },
    {
      name: "Samuel Nsoedo",
      role: "Financial Coach",
      location: "London, United Kingdom",
      image: "/mentors/Samuel.jpg",
      description:
        "Teaching financial discipline, wealth creation, and smart money management.",
    },
    {
      name: "Dr. Princewill Opubo",
      role: "Innovation Mentor",
      location: "Port Harcourt, Nigeria",
      image: "/mentors/Princewill.jpg",
      description:
        "Guiding young minds to think creatively, solve problems, and innovate for the future.",
    },
  ];

  /* ===================== MENTEES ===================== */
  const mentees = [
    {
      name: "Folorunsho Esther",
      role: "Graphic Designer",
      location: "Lagos, Nigeria",
      image: "/testimonials/Esther.jpg",
    },
    {
      name: "Jackson Ndifreke",
      role: "Web Developer",
      location: "Port Harcourt, Nigeria",
      image: "/testimonials/Jackson.jpg",
    },
    {
      name: "Omereji Success Sunday",
      role: "UI/UX Designer",
      location: "Port Harcourt, Nigeria",
      image: "/testimonials/Success.jpg",
    },
    {
      name: "Marion Sakwa",
      role: "Entrepreneur",
      location: "Nairobi, Kenya",
      image: "/testimonials/Rion.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* ===================== HEADING ===================== */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Meet Our <span className="text-blue-600">Mentors</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are building leaders through mentorship, skills, mindset, and purpose-driven growth.
          </p>
        </div>

        {/* ===================== MENTORS ===================== */}
        <div className="mb-12">
          <div className="flex justify-center">
            <div className="flex gap-6 overflow-x-auto pb-4 px-2">
              {mentors.map((mentor, index) => (
                <Card key={index} className="w-60 p-5 text-center rounded-2xl shadow-md hover:shadow-xl transition">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
                  />
                  <h4 className="font-semibold text-lg">{mentor.name}</h4>
                  <p className="text-blue-600 text-sm">{mentor.role}</p>
                  <p className="text-blue-500 text-sm mb-2">{mentor.location}</p>
                  <p className="text-gray-600 text-sm">{mentor.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Become Mentor Button */}
          <div className="flex justify-center mt-8">
            <Button
              onClick={() => setOpenMentorForm(true)}
              className="bg-blue-700 text-white px-6 py-3 text-lg rounded-lg shadow-lg hover:bg-blue-800"
            >
              Become a Mentor
            </Button>
          </div>
        </div>

        {/* ===================== MENTEES ===================== */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Our Mentees
          </h3>

          <div className="flex justify-center">
            <div className="flex gap-6 overflow-x-auto pb-4 px-2">
              {mentees.map((mentee, index) => (
                <Card key={index} className="w-56 p-5 text-center rounded-2xl shadow-md hover:shadow-xl transition">
                  <img
                    src={mentee.image}
                    alt={mentee.name}
                    className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                  />
                  <h4 className="font-semibold">{mentee.name}</h4>
                  <p className="text-blue-600 text-sm">{mentee.role}</p>
                  <p className="text-gray-500 text-sm">{mentee.location}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* TEXT + CTA */}
          <div className="text-center mt-10 max-w-2xl mx-auto">
            <p className="text-gray-600 mb-6">
              Join our mentorship program and begin your journey toward leadership,
              financial growth, and purpose-driven success. Learn from experienced mentors,
              gain practical skills, and become the leader you were created to be.
            </p>

            {/* ✅ CONNECTED TO SKILL PAGE */}
            <Link to="/skills">
              <Button className="bg-blue-700 text-white px-6 py-3 text-lg rounded-lg hover:bg-blue-800">
                Become a Mentee
              </Button>
            </Link>
          </div>
        </div>

        {/* ===================== MENTOR FORM ===================== */}
        {openMentorForm && (
          <Modal title="Become a Mentor" onClose={() => setOpenMentorForm(false)}>
            <input type="text" placeholder="Full Name" className="input" />
            <input type="email" placeholder="Email Address" className="input" />
            <input type="text" placeholder="Phone Number" className="input" />
            <input type="text" placeholder="Area of Expertise" className="input" />
            <textarea placeholder="Why do you want to become a mentor?" className="input h-24" />
            <textarea placeholder="Tell us about your experience" className="input h-24" />
            <SubmitButton />
          </Modal>
        )}

      </div>
    </section>
  );
};

/* ===================== MODAL ===================== */
const Modal = ({ title, children, onClose }: any) => (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-xl relative space-y-4">
      <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-black">
        ✕
      </button>
      <h2 className="text-xl font-bold text-center">{title}</h2>
      {children}
    </div>
  </div>
);

/* ===================== BUTTON ===================== */
const SubmitButton = () => (
  <Button className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800">
    Submit Application
  </Button>
);

export default Mentoring;