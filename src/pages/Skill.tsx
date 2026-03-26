"use client";

import { useState, useEffect } from "react";
import "./skill.css";

/* REGISTRATION TIMER */
const REGISTRATION_END = new Date();
REGISTRATION_END.setDate(REGISTRATION_END.getDate() + 30);

/* COURSES */
const courses = [
  { name: "Web Development", duration: "12 weeks", topics: ["HTML", "CSS", "JavaScript", "React", "Node.js"] },
  { name: "UI/UX Design", duration: "10 weeks", topics: ["Design Principles", "Wireframing", "Prototyping", "Figma", "User Testing"] },
  { name: "Cybersecurity", duration: "14 weeks", topics: ["Network Security", "Cryptography", "Ethical Hacking", "Incident Response"] },
  { name: "Data Analytics", duration: "8 weeks", topics: ["Excel", "SQL", "Python", "Data Visualization", "Machine Learning Basics"] },
];

/* INSTRUCTORS */
const instructors = [
  { name: "Amb. Prince Igwe C.", course: "Graphics Designer", location: "Port Harcourt, Nigeria", image: "/Instructors/Prince-Igwe.jpg" },
  { name: "Suka Lazarus", course: "Web Developer", location: "Nairobi, Kenya", image: "" },
  { name: "Jerry Zhiya", course: "Web Developer", location: "Abuja, Nigeria", image: "/Instructors/jerry.jpg" },
  { name: "Esther", course: "Data Analytics", location: "Abuja, Nigeria", image: "" },
];

const PremiumSkillPage = () => {
  const [timeLeft, setTimeLeft] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openTopics, setOpenTopics] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const distance = REGISTRATION_END.getTime() - now.getTime();
      if (distance <= 0) {
        setTimeLeft("Closed");
        clearInterval(timer);
        return;
      }
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      setTimeLeft(`${days}d ${hours}h`);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleTopics = (courseName: string) => {
    setOpenTopics(openTopics === courseName ? null : courseName);
  };

  return (
    <div className="layout">
      {/* VIEW COURSES BUTTON */}
      <header className="header text-center py-16 bg-blue-50">
        <h1 className="text-4xl font-bold mb-2">Next Generation Builders</h1>
        <h2 className="text-2xl font-semibold mb-2">Next Gen Tech Skills Scholarship</h2>
        <p className="text-gray-700 mb-4">Learn Data Science & Web Development, Level Up Your Skills</p>
        <p className="text-gray-800 font-semibold mb-6">
          Registration ends in: <span className="text-blue-700">{timeLeft}</span>
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
        <h2 className="sidebar-title">Courses</h2>
        <ul className="course-list">
          {courses.map((course) => (
            <li key={course.name} className="course-item">
              <div className="course-header">
                <span className="course-name">{course.name}</span>
                <button className="topics-btn" onClick={() => toggleTopics(course.name)}>
                  {openTopics === course.name ? "▲" : "▼"}
                </button>
              </div>
              {openTopics === course.name && (
                <ul className="topics-list">
                  {course.topics.map((topic) => (
                    <li key={topic} className="topic">{topic}</li>
                  ))}
                  <button className="apply-btn mt-2">Apply for this course</button>
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
                className="instructor-image w-full h-40 object-cover rounded-lg mb-3"
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