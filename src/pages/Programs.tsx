import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code2, PenTool, Camera, MonitorSmartphone } from "lucide-react";

import webdevImg from "../assets/webdev.jpg";
import uiuxImg from "../assets/uiux.jpg";
import videoImg from "../assets/video.jpg";
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
    title: "Videography & Editing",
    icon: <Camera className="w-7 h-7 text-blue-600" />,
    description:
      "Learn how to shoot, edit and produce professional videos.",
    image: videoImg,
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
   🎬 VIDEOS ARRAY (EASY TO SCALE)
================================ */
const videos = [
  {
    src: "/videos/work.mp4",
    poster: "/videos/poster/alkebulan-logo.jpg",
  },
  {
    src: "/videos/Esther.mp4",
    poster: "/videos/poster/self-dev.png",
  },
  {
    src: "/videos/Suka.mp4",
      poster: "/videos/poster/balancing-life.png",
  },
  // 👉 ADD MORE VIDEOS HERE
];

/* ===============================
   NEXT SATURDAY LOGIC
================================ */
const getNextSaturdayMeeting = () => {
  const now = new Date();
  const nextSaturday = new Date(now);

  const day = now.getDay();
  const daysUntilSaturday = (6 - day + 7) % 7;

  nextSaturday.setDate(now.getDate() + daysUntilSaturday);
  nextSaturday.setHours(20, 0, 0, 0);

  if (now > nextSaturday) {
    nextSaturday.setDate(nextSaturday.getDate() + 7);
  }

  return nextSaturday;
};

const liveMeetingLink = "https://calendar.app.google/GLYBC2E9NfzCtRaw6";

const Programs = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [meetingStatus, setMeetingStatus] = useState("upcoming");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const meetingStart = getNextSaturdayMeeting();
      const meetingEnd = new Date(meetingStart.getTime() + 90 * 60 * 1000);
      const joinTime = new Date(meetingStart.getTime() - 30 * 60 * 1000);

      if (now >= meetingStart && now < meetingEnd) {
        setMeetingStatus("live");
      } else if (now >= joinTime && now < meetingStart) {
        setMeetingStatus("join");
      } else {
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

        {/* LIVE */}
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

        {/* COUNTDOWN */}
        <div className="bg-white rounded-3xl shadow-lg p-10 mb-16 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Weekly Mindset Meeting
          </h3>

          {meetingStatus === "upcoming" && (
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
          )}
        </div>

        {/* 🎬 VIDEO GRID */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-6">
            This Is Alkebulan in Action
          </h3>

          <p className="text-center text-gray-600 mb-10">
            Real impact. Real transformation. Real growth.
          </p>

          {/* ✅ RESPONSIVE GRID */}
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((video, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              >
                <video
                  src={video.src}
                  poster={video.poster}
                  controls
                  muted
                  className="w-full h-64 object-cover hover:scale-105 transition"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Programs;