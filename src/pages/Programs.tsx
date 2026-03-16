import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code2, PenTool, Camera, MonitorSmartphone } from "lucide-react";

import webdevImg from "../assets/webdev.jpg";
import uiuxImg from "../assets/uiux.jpg";
import videoImg from "../assets/video.jpg";
import graphicsImg from "../assets/graphics.jpg";

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
      "Learn how to shoot, edit and produce professional videos using modern storytelling techniques.",
    image: videoImg,
  },
  {
    title: "Graphic Design",
    icon: <PenTool className="w-7 h-7 text-blue-600" />,
    description:
      "Master visual communication using Canva, Photoshop and Illustrator.",
    image: graphicsImg,
  },
];

const mindsetVideos = [
  {
    title: "Mindset & Focus Class",
    videoUrl: "https://www.youtube.com/embed/-nGlRyGxsB0",
  },
  {
    title: "Goal Setting & Productivity",
    videoUrl: "https://www.youtube.com/embed/OmjO3z1pRtw",
  },
  {
    title: "Leadership & Teamwork",
    videoUrl: "https://www.youtube.com/embed/psHmjKQxdWo",
  },
];

const liveMeetingLink = "https://meet.google.com/your-meeting-link";

// Get next Saturday 8 PM
const getNextSaturdayMeeting = () => {
  const now = new Date();
  const nextSaturday = new Date();
  const day = now.getDay();
  const daysUntilSaturday = (6 - day + 7) % 7 || 7;
  nextSaturday.setDate(now.getDate() + daysUntilSaturday);
  nextSaturday.setHours(20, 0, 0, 0); // 8 PM
  return nextSaturday;
};

const Programs = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [meetingStatus, setMeetingStatus] = useState("upcoming"); // upcoming | live | ended

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const meetingStart = getNextSaturdayMeeting();
      const meetingEnd = new Date(meetingStart.getTime() + 90 * 60 * 1000); // 1h30
      const appreciationEnd = new Date(meetingEnd.getTime() + 30 * 60 * 1000); // 30 min

      if (now >= meetingStart && now < meetingEnd) {
        setMeetingStatus("live");
      } else if (now >= meetingEnd && now < appreciationEnd) {
        setMeetingStatus("ended");
      } else {
        setMeetingStatus("upcoming");
        const difference = meetingStart - now;
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Floating LIVE Banner */}
        {meetingStatus === "live" && (
          <a
            href={liveMeetingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-red-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 animate-pulse hover:bg-red-700 transition cursor-pointer"
          >
            <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
            LIVE NOW — Join the Mindset Meeting
          </a>
        )}

        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-5"
          >
            Our Programs
          </motion.h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our creative and leadership programs designed to equip the
            next generation with technical skills and a strong mindset.
          </p>
        </div>

        {/* Live Mindset Meeting */}
        <div className="bg-white rounded-3xl shadow-lg p-10 mb-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Weekly Mindset Meeting
          </h3>
          <p className="text-gray-600 mb-6">Every Saturday at 8:00 PM</p>

          {meetingStatus === "upcoming" && (
            <>
              <p className="text-gray-500 mb-4">Next meeting starts in:</p>
              <div className="flex justify-center gap-6 mb-6">
                <div>
                  <p className="text-3xl font-bold text-blue-600">{timeLeft.days}</p>
                  <span className="text-gray-500 text-sm">Days</span>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">{timeLeft.hours}</p>
                  <span className="text-gray-500 text-sm">Hours</span>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">{timeLeft.minutes}</p>
                  <span className="text-gray-500 text-sm">Minutes</span>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">{timeLeft.seconds}</p>
                  <span className="text-gray-500 text-sm">Seconds</span>
                </div>
              </div>
            </>
          )}

          {meetingStatus === "live" && (
            <>
              <div className="flex justify-center items-center gap-2 mb-6">
                <span className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></span>
                <span className="text-red-600 font-semibold">LIVE NOW</span>
              </div>
              <a
                href={liveMeetingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition shadow-lg"
              >
                Join Live Mindset Meeting 🚀
              </a>
            </>
          )}

          {meetingStatus === "ended" && (
            <div className="text-center">
              <div className="text-green-600 text-2xl font-semibold mb-4">
                🙏 Thank You Builders!
              </div>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                Thank you for joining today's mindset meeting.
                Your commitment to building yourself is inspiring.
                Keep applying what you learned today.
              </p>
              <p className="text-gray-500 mb-4">Countdown to the next meeting:</p>
              <div className="flex justify-center gap-6">
                <div>
                  <p className="text-3xl font-bold text-blue-600">{timeLeft.days}</p>
                  <span className="text-gray-500 text-sm">Days</span>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">{timeLeft.hours}</p>
                  <span className="text-gray-500 text-sm">Hours</span>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">{timeLeft.minutes}</p>
                  <span className="text-gray-500 text-sm">Minutes</span>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">{timeLeft.seconds}</p>
                  <span className="text-gray-500 text-sm">Seconds</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mindset Videos */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Mindset & Focus Classes
          </h3>
          <div className="flex space-x-6 overflow-x-auto py-2 px-4">
            {mindsetVideos.map((video, index) => (
              <div
                key={index}
                className="min-w-[280px] bg-white rounded-3xl shadow-lg p-6 flex-shrink-0 flex flex-col items-center"
              >
                <div className="w-full aspect-video mb-4">
                  <iframe
                    className="w-full h-full rounded-xl"
                    src={video.videoUrl}
                    title={video.title}
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  {video.title}
                </h4>
                <a
                  href="https://chat.whatsapp.com/JL6fsvqSshrAGbByW2K80Z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 font-medium hover:text-blue-900"
                >
                  Join Community →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Programs */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl"
            >
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-100 rounded-xl">{program.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{program.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <a
                  href="https://wa.me/2348139023970"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 font-medium hover:text-blue-900"
                >
                  Learn More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;