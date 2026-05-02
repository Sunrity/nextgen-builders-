import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code2, PenTool, MonitorSmartphone } from "lucide-react";

import webdevImg from "../assets/webdev.jpg";
import uiuxImg from "../assets/uiux.jpg";
import graphicsImg from "../assets/graphics.jpg";

/* ===============================
   PROGRAMS
================================ */
const programs = [
  {
    title: "Website Development",
    icon: <Code2 className="w-7 h-7 text-blue-600" />,
    description:
      "Learn how to build responsive modern websites using HTML, CSS, JavaScript and React.",
    image: webdevImg,
  },
  {
    title: "UI/UX Design",
    icon: <MonitorSmartphone className="w-7 h-7 text-blue-600" />,
    description:
      "Learn how to design beautiful and user-friendly interfaces using Figma and modern design thinking.",
    image: uiuxImg,
  },
  {
    title: "Graphic Design",
    icon: <PenTool className="w-7 h-7 text-blue-600" />,
    description:
      "Master visual communication using Canva and Adobe tools.",
    image: graphicsImg,
  },
];

/* ===============================
   MEETING LOGIC
================================ */
const getNextSaturday8PM = (fromDate = new Date()) => {
  const date = new Date(fromDate);

  const day = date.getDay(); // 0 = Sunday, 6 = Saturday
  const daysUntilSaturday = (6 - day + 7) % 7;

  date.setDate(date.getDate() + daysUntilSaturday);
  date.setHours(20, 0, 0, 0); // 8:00 PM

  const meetingEnd = new Date(date.getTime() + 90 * 60 * 1000); // 9:30 PM

  // If past 9:30 PM on Saturday → move to next week
  if (fromDate > meetingEnd) {
    date.setDate(date.getDate() + 7);
  }

  return date;
};

const liveMeetingLink =
  "https://calendar.app.google/PeEcnigtLzd4QizU9";

const Programs = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [meetingStatus, setMeetingStatus] = useState("upcoming");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();

      const meetingStart = getNextSaturday8PM(now); // 8PM
      const meetingEnd = new Date(meetingStart.getTime() + 90 * 60 * 1000); // 9:30PM
      const joinTime = new Date(meetingStart.getTime() - 30 * 60 * 1000); // 7:30PM

      // 🔴 LIVE (8PM - 9:30PM)
      if (now >= meetingStart && now < meetingEnd) {
        setMeetingStatus("live");
      }

      // 🟢 JOIN PHASE (7:30PM - 8PM)
      else if (now >= joinTime && now < meetingStart) {
        setMeetingStatus("join");

        const diff = meetingStart - now;

        setTimeLeft({
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }

      // 🔵 OUTSIDE MEETING → COUNTDOWN TO NEXT SATURDAY
      else {
        setMeetingStatus("upcoming");

        const diff = meetingStart - now;

        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* LIVE BUTTON */}
        {meetingStatus === "live" && (
          <a
            href={liveMeetingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-red-600 text-white px-6 py-3 rounded-full animate-pulse"
          >
            🔴 LIVE NOW — Join Meeting
          </a>
        )}

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Programs
          </h2>
          <p className="text-gray-600">
            Building skills, mindset, and leadership for the next generation.
          </p>
        </div>

        {/* JOIN SECTION (7:30 - 8:00 PM) */}
        {meetingStatus === "join" && (
          <div className="bg-white rounded-3xl shadow-lg p-10 mb-16 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Meeting Starting Soon
            </h3>

            <a
              href={liveMeetingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-3 rounded-full animate-pulse inline-block"
            >
              🟢 Join Meeting Now
            </a>

            <p className="text-gray-600 mt-4">
              Starts in {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </p>
          </div>
        )}

        {/* COUNTDOWN (OTHER TIMES) */}
        {meetingStatus === "upcoming" && (
          <div className="bg-white rounded-3xl shadow-lg p-10 mb-16 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Next Weekly Meeting
            </h3>

            <div className="flex justify-center gap-6">
              {["days", "hours", "minutes", "seconds"].map((unit) => (
                <div key={unit}>
                  <p className="text-3xl font-bold text-blue-600">
                    {timeLeft[unit]}
                  </p>
                  <span className="text-sm text-gray-500">{unit}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PROGRAMS GRID */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden"
            >
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  {program.icon}
                  <h3 className="text-xl font-bold text-gray-800">
                    {program.title}
                  </h3>
                </div>
                <p className="text-gray-600">{program.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Programs;