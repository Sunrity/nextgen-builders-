"use client";

import { useState, useEffect } from "react";
import "./skill.css";

/* REGISTRATION DATES */
const REGISTRATION_START = new Date("2026-04-01T00:00:00"); // April 1st start
const REGISTRATION_END = new Date("2026-04-30T23:59:59");   // April 30th end

/* COURSES */
const courses = {
  foundation: [
    {
      name: "Mindset Development",
      duration: "Ongoing",
      topics: [
        "Growth vs Fixed Mindset",
        "Building Self-Discipline",
        "Overcoming Fear and Doubt",
        "Confidence Building",
        "Consistency and Daily Habits",
        "Goal Setting and Vision",
        "Time Management",
        "Handling Failure and Rejection",
        "Positive Thinking and Gratitude",
        "Leadership Mindset",
      ],
    },
    {
      name: "Leadership Development",
      duration: "10 weeks",
      topics: ["Leadership Principles", "Communication Skills", "Decision Making", "Team Building", "Emotional Intelligence"],
    },
    {
      name: "Personal Development",
      duration: "Ongoing",
      topics: ["Self Awareness", "Goal Setting", "Daily Habits", "Discipline", "Productivity"],
    },
  ],
  tech: [
    {
      name: "Web Development",
      duration: "12 weeks",
      topics: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    },
    {
      name: "UI/UX Design",
      duration: "10 weeks",
      topics: ["Design Principles", "Wireframing", "Prototyping", "Figma", "User Testing"],
    },
    {
      name: "Cybersecurity",
      duration: "14 weeks",
      topics: ["Network Security", "Cryptography", "Ethical Hacking", "Incident Response"],
    },
    {
      name: "Data Analytics",
      duration: "8 weeks",
      topics: ["Excel", "SQL", "Python", "Data Visualization", "Machine Learning Basics"],
    },
  ],
  business: [
    {
      name: "Digital Marketing",
      duration: "8 weeks",
      topics: ["Social Media Marketing", "Content Creation", "SEO Basics", "Email Marketing", "Facebook & Google Ads"],
    },
    {
      name: "Entrepreneurship",
      duration: "8 weeks",
      topics: ["Business Ideas", "Problem Solving", "Starting a Business", "Branding", "Scaling"],
    },
    {
      name: "Financial Literacy",
      duration: "6 weeks",
      topics: ["Money Management", "Saving & Budgeting", "Investing Basics", "Multiple Income Streams", "Building Wealth"],
    },
    {
      name: "Freelancing",
      duration: "4 weeks",
      topics: ["Getting Clients", "Upwork & Fiverr", "Building Portfolio", "Pricing", "Client Communication"],
    },
  ],
};

/* INSTRUCTORS */
const instructors = [
  { name: "Amb. Prince Igwe C.", course: "Graphics Designer", location: "Port Harcourt, Nigeria", image: "/Instructors/Prince-Igwe.jpg" },
  { name: "Suka Lazarus", course: "Web Developer", location: "Nairobi, Kenya", image: "Instructors/suka.jpeg" },
  { name: "Jerry Zhiya", course: "Web Developer", location: "Abuja, Nigeria", image: "/Instructors/jerry.jpg" },
  { name: "Esther", course: "Data Analytics", location: "Abuja, Nigeria", image: "" },
];

const PremiumSkillPage = () => {
  const [timeStatus, setTimeStatus] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openTopics, setOpenTopics] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<"foundation" | "tech" | "business">("foundation");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();

      if (now < REGISTRATION_START) {
        const distanceToStart = REGISTRATION_START.getTime() - now.getTime();
        const days = Math.floor(distanceToStart / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distanceToStart / (1000 * 60 * 60)) % 24);
        setTimeStatus(`Registration starts in: ${days}d ${hours}h`);
      } else if (now >= REGISTRATION_START && now <= REGISTRATION_END) {
        setTimeStatus("Registration is ongoing");
      } else {
        setTimeStatus("Registration closed");
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleTopics = (courseName: string) => {
    setOpenTopics(openTopics === courseName ? null : courseName);
  };

  return (
    <div className="layout">
      {/* HEADER */}
      <header className="header text-center py-16 bg-blue-50">
        <h1 className="text-4xl font-bold mb-2">Next Generation Builders</h1>
        <h2 className="text-2xl font-semibold mb-2">Next Gen Tech Skills Scholarship</h2>
        <p className="text-gray-700 mb-4">Level Up Your Skills: Foundation, Tech & Business</p>
        <p className="text-gray-800 font-semibold mb-6">
          <span className={`text-blue-700 ${timeStatus === "Registration closed" ? "text-red-600" : ""}`}>{timeStatus}</span>
        </p>
        <button
          onClick={() => setSidebarOpen(true)}
          className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
        >
          View Courses
        </button>
      </header>

      {/* SIDEBAR */}
      {sidebarOpen && <div className="overlay" onClick={() => setSidebarOpen(false)} />}
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <h2 className="sidebar-title text-xl font-bold mb-4">Courses</h2>

        {/* CATEGORY TABS */}
        <div className="categories flex justify-between mb-4">
          <button
            className={`category-btn ${activeCategory === "foundation" ? "active" : ""}`}
            onClick={() => setActiveCategory("foundation")}
          >
            Foundation
          </button>
          <button
            className={`category-btn ${activeCategory === "tech" ? "active" : ""}`}
            onClick={() => setActiveCategory("tech")}
          >
            Tech
          </button>
          <button
            className={`category-btn ${activeCategory === "business" ? "active" : ""}`}
            onClick={() => setActiveCategory("business")}
          >
            Business
          </button>
        </div>

        <ul className="course-list">
          {courses[activeCategory].map((course) => (
            <li key={course.name} className="course-item">
              <div className="course-header">
                <span className="course-name font-semibold">{course.name} ({course.duration})</span>
                <button className="topics-btn" onClick={() => toggleTopics(course.name)}>
                  {openTopics === course.name ? "▲" : "▼"}
                </button>
              </div>
              {openTopics === course.name && (
                <ul className="topics-list">
                  {course.topics.map((topic) => (
                    <li key={topic} className="topic">{topic}</li>
                  ))}
                  <button className="apply-btn mt-2 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
                    Apply for this course
                  </button>
                </ul>
              )}
            </li>
          ))}
        </ul>
      </aside>

      {/* GOOGLE FORM EMBED */}
      <section className="google-form-section py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Apply Now</h2>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSelacTrcMgh3Z8hCemWWVo_0Ti3uasi3eNGmOLOc6mFqTOaYw/viewform?embedded=true"
          width="640"
          height="1344"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
        >
          Loading…
        </iframe>
      </section>

      {/* INSTRUCTORS */}
      <section className="instructors py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Instructors</h2>
        <div className="instructors-grid grid sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">
          {instructors.map((ins) => (
            <div key={ins.name} className="instructor-card bg-white border rounded-xl p-4 shadow hover:shadow-lg">
              <img
                src={ins.image || "https://via.placeholder.com/150"}
                alt={ins.name}
                className="instructor-image w-full h-50 object-cover rounded-lg mb-3"
              />
              <h3 className="font-semibold">{ins.name}</h3>
              <p className="text-gray-600">{ins.course}</p>
              <span className="text-gray-400 text-sm">{ins.location}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PremiumSkillPage;