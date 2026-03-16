import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code2, PenTool, Camera, MonitorSmartphone } from "lucide-react";

import webdevImg from "../assets/webdev.jpg";
import uiuxImg from "../assets/uiux.jpg";
import videoImg from "../assets/video.jpg";
import graphicsImg from "../assets/graphics.jpg";

const programs = [
  { title: "Website Development", icon: <Code2 className="w-7 h-7 text-blue-600" />, description: "Learn how to build responsive modern websites using HTML, CSS, JavaScript and React.", image: webdevImg },
  { title: "UI/UX Design", icon: <MonitorSmartphone className="w-7 h-7 text-blue-600" />, description: "Learn how to design beautiful and user-friendly interfaces using Figma and modern design thinking.", image: uiuxImg },
  { title: "Videography & Editing", icon: <Camera className="w-7 h-7 text-blue-600" />, description: "Learn how to shoot, edit and produce professional videos using modern storytelling techniques.", image: videoImg },
  { title: "Graphic Design", icon: <PenTool className="w-7 h-7 text-blue-600" />, description: "Master visual communication using Canva, Photoshop and Illustrator.", image: graphicsImg },
];

const mindsetVideos = [
  { title: "Mindset & Focus Class", videoUrl: "https://www.youtube.com/embed/-nGlRyGxsB0" },
  { title: "Goal Setting & Productivity", videoUrl: "https://www.youtube.com/embed/OmjO3z1pRtw" },
  { title: "Leadership & Teamwork", videoUrl: "https://www.youtube.com/embed/psHmjKQxdWo" },
];

const liveMeetingLink = "https://meet.google.com/your-meeting-link";

// Calculate next Saturday at 8 PM
const getNextSaturdayMeeting = () => {
  const now = new Date();
  const nextSaturday = new Date();

  const day = now.getDay();
  const daysUntilSaturday = (6 - day + 7) % 7 || 7; // Saturday = 6

  nextSaturday.setDate(now.getDate() + daysUntilSaturday);
  nextSaturday.setHours(20, 0, 0, 0); // 8 PM
  return nextSaturday;
};

const Programs = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [meetingStatus, setMeetingStatus] = useState("upcoming"); // "upcoming" | "live" | "ended"

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const meetingStart = getNextSaturdayMeeting();
      const meetingEnd = new Date(meetingStart.getTime() + 90 * 60 * 1000); // 1h30m meeting
      const appreciationEnd = new Date(meetingEnd.getTime() + 30 * 60 * 1000); // 30 min appreciation

      // Determine meeting status
      if (now >= meetingStart && now < meetingEnd) setMeetingStatus("live");
      else if (now >= meetingEnd && now < appreciationEnd) setMeetingStatus("ended");
      else setMeetingStatus("upcoming");

      // Countdown to next meeting
      const nextMeeting = now >= appreciationEnd ? getNextSaturdayMeeting() : meetingStart;
      const diff = nextMeeting - now;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">Our Programs</motion.h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our creative and leadership programs designed to equip the next generation with technical skills and a strong mindset.
          </p>
        </div>

        {/* Live Meeting */}
        <div className="bg-white rounded-3xl shadow-lg p-10 mb-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Weekly Mindset Meeting</h3>
          <p className="text-gray-600 mb-6">Every Saturday at 8:00 PM</p>

          {meetingStatus === "upcoming" && (
            <div>
              <p className="text-gray-500 mb-4">Next meeting starts in:</p>
              <div className="flex justify-center gap-6 mb-6">
                <div><p className="text-3xl font-bold text-blue-600">{timeLeft.days}</p><span className="text-gray-500 text-sm">Days</span></div>
                <div><p className="text-3xl font-bold text-blue-600">{timeLeft.hours}</p><span className="text-gray-500 text-sm">Hours</span></div>
                <div><p className="text-3xl font-bold text-blue-600">{timeLeft.minutes}</p><span className="text-gray-500 text-sm">Minutes</span></div>
                <div><p className="text-3xl font-bold text-blue-600">{timeLeft.seconds}</p><span className="text-gray-500 text-sm">Seconds</span></div>
              </div>
            </div>
          )}

          {meetingStatus === "live" && (
            <>
              <div className="flex justify-center items-center gap-2 mb-6">
                <span className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></span>
                <span className="text-red-600 font-semibold">LIVE NOW</span>
              </div>
              <a href={liveMeetingLink} target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition shadow-lg">
                Join Live Mindset Meeting 🚀
              </a>
            </>
          )}

          {meetingStatus === "ended" && (
            <div>
              <div className="text-green-600 text-2xl font-semibold mb-4">🙏 Thank You Builders!</div>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                Thank you for joining today's mindset meeting. Your commitment to building yourself is inspiring.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Programs;