"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, Lightbulb, Rocket, Globe2 } from "lucide-react";
import coursesBg from "../assets/about-bg.jpeg";

const coursesData = [
  { name: "Web Development", duration: "12 weeks", topics: ["HTML", "CSS", "JavaScript", "React", "Node.js"] },
  { name: "UI/UX Design", duration: "10 weeks", topics: ["Design Principles", "Wireframing", "Prototyping", "Figma", "User Testing"] },
  { name: "Cybersecurity", duration: "14 weeks", topics: ["Network Security", "Cryptography", "Ethical Hacking", "Incident Response"] },
  { name: "Data Analytics", duration: "8 weeks", topics: ["Excel", "SQL", "Python", "Data Visualization", "Machine Learning Basics"] },
];

const instructorsData = [
  { name: "Amb. Prince Igwe C.", course: "Graphics Designer", location: "Port Harcourt, Nigeria", image: "/Instructors/Prince-Igwe.jpg" },
  { name: "Suka Lazarus", course: "Web Developer", location: "Nairobi, Kenya", image: "" },
  { name: "Jerry Zhiya", course: "Web Developer", location: "Abuja, Nigeria", image: "/Instructors/jerry.jpg" },
  { name: "Esther", course: "Data Analytics", location: "Abuja, Nigeria", image: "" },
];

const SkillsPage = () => {
  const [openCourse, setOpenCourse] = useState<string | null>(null);

  const toggleCourse = (name: string) => {
    setOpenCourse(openCourse === name ? null : name);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        <img src={coursesBg} alt="Next Generation Builders" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/90 to-transparent" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-4xl md:text-6xl font-bold md:font-extrabold mb-6 text-blue-300">
            Next Generation Builders
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 1 }} className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100 leading-relaxed">
            Explore our premium skill programs and take the first step toward mastering real-world technical and leadership skills.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 1 }} className="mt-6 italic text-blue-200">
            “Learn, Apply, and Build the Future.”
          </motion.p>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-24 container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Our Courses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {coursesData.map((course, idx) => (
            <motion.div
              key={course.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg cursor-pointer"
            >
              <div onClick={() => toggleCourse(course.name)}>
                <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
                <p className="text-gray-500 dark:text-gray-300 mb-2">{course.duration}</p>
                <div className="flex justify-center mb-2">
                  <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700">View Topics</Button>
                </div>
                {openCourse === course.name && (
                  <ul className="mt-4 text-left text-gray-700 dark:text-gray-200 list-disc list-inside">
                    {course.topics.map(topic => <li key={topic}>{topic}</li>)}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Google Form Section */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Apply Now</h2>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSelacTrcMgh3Z8hCemWWVo_0Ti3uasi3eNGmOLOc6mFqTOaYw/viewform?embedded=true"
          width="640"
          height="1344"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          className="mx-auto rounded-xl shadow-lg"
        >
          Loading…
        </iframe>
      </section>

      {/* Instructors Section */}
      <section className="py-24 container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Meet Our Instructors</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 justify-center">
          {instructorsData.map((ins, idx) => (
            <motion.div
              key={ins.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg"
            >
              <img src={ins.image || "https://via.placeholder.com/150"} alt={ins.name} className="w-full h-40 object-cover rounded-lg mb-3" />
              <h3 className="font-semibold">{ins.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">{ins.course}</p>
              <span className="text-gray-400 text-sm">{ins.location}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} className="text-3xl font-bold mb-6">
          Ready to Build the Future with Us?
        </motion.h2>
        <Button
          size="lg"
          onClick={() => (window.location.href = "/contact")}
          className="px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-indigo-500 hover:to-blue-600 text-white font-semibold rounded-2xl shadow-lg shadow-blue-500/20 transition-all hover:scale-105"
        >
          Get Involved
        </Button>
      </section>

    </div>
  );
};

export default SkillsPage;