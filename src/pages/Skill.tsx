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
  { name: "Suka Lazarus", course: "Web Developer", location: "Nairobi, Kenya", image: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Jerry Zhiya", course: "Web Developer", location: "Abuja, Nigeria", image: "/Instructors/jerry.jpg" },
  { name: "Esther", course: "Data Analytics", location: "Abuja, Nigeria", image: "" },
];

const Skill = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", course: "" });
  const [timeLeft, setTimeLeft] = useState("");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  /* TIMER */
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // const selectCourse = (courseName: string) => setFormData({ ...formData, course: courseName });
  // const toggleDropdown = (courseName: string) => setOpenDropdown(openDropdown === courseName ? null : courseName);
  const selectCourse = (courseName: string) => {
  setFormData({ ...formData, course: courseName });
  setSidebarOpen(false); // <-- closes sidebar automatically
};

  return (
    <div className="layout">

      {/* MOBILE MENU */}
      {sidebarOpen && <div className="overlay" onClick={() => setSidebarOpen(false)} />}

      {/* SIDEBAR */}
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <h2 className="sidebar-title">Courses</h2>
        <ul className="course-list">
          {courses.map((course) => (
            <li key={course.name} className="course-item">
              <div className="course-row">
                <button className="course-button" onClick={() => selectCourse(course.name)}>
                  <div>
                    <strong>{course.name}</strong>
                    <p className="duration">{course.duration}</p>
                  </div>
                </button>
                <span className={`arrow ${openDropdown === course.name ? "rotate" : ""}`} onClick={() =>(course.name)}>▼</span>
              </div>
              {openDropdown === course.name && (
                <ul className="topics-list">
                  {course.topics.map((topic) => (
                    <li key={topic} className="topic">• {topic}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </aside>

      {/* MAIN */}
      <main className="main">
        <button className="menu-btn" onClick={() => setSidebarOpen(true)}>☰</button>
        <h1>Scholarship Registration</h1>
        <p className="subtitle">Select a course and begin your journey.</p>
        <p className="timer">Registration ends in: <b>{timeLeft}</b></p>

        <form className="form">
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
          <input type="text" placeholder="Selected Course" value={formData.course} readOnly />
          <button type="submit" className="form-submit">Apply</button>
        </form>

        {/* INSTRUCTORS */}
        <section className="instructors">
          <h2>Our Instructors</h2>
          <div className="instructors-grid">
            {instructors.map((ins) => (
              <div key={ins.name} className="instructor-card">
                <img src={ins.image || "https://via.placeholder.com/150"} alt={ins.name} className="instructor-image" />
                <h3>{ins.name}</h3>
                <p>{ins.course}</p>
                <span>{ins.location}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Skill;