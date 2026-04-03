"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Mentoring = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50 text-center">
      <div className="max-w-3xl mx-auto px-4">
        {/* ===================== HEADING ===================== */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Meet Our <span className="text-blue-600">Team</span>
        </h2>
        <p className="text-gray-600 mb-10">
          Our mentors, mentees, and instructors are committed to building the next generation of leaders, innovators, and changemakers.
          Click below to see all our amazing team members.
        </p>

        {/* ===================== BUTTON ===================== */}
        <Link to="/team">
          <Button className="bg-blue-700 text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:bg-blue-800 transition">
            Meet Our Team
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Mentoring;