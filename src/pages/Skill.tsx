import { useState, useEffect } from "react";
import "./skill.css";

const REGISTRATION_END = new Date();
REGISTRATION_END.setDate(REGISTRATION_END.getDate() + 30);

const courses = [
  { name: "Web Development", duration: "12 weeks", topics: ["HTML", "CSS", "JavaScript", "React", "Node.js"] },
  { name: "UI/UX Design", duration: "10 weeks", topics: ["Design Principles", "Wireframing", "Prototyping", "Figma", "User Testing"] },
  { name: "Cybersecurity", duration: "14 weeks", topics: ["Network Security", "Cryptography", "Ethical Hacking", "Incident Response"] },
  { name: "Data Analytics", duration: "8 weeks", topics: ["Excel", "SQL", "Python", "Data Visualization", "Machine Learning Basics"] },
];

// Sample instructors
const instructors = [
  { name: "Amb. Prince Igwe C.", course: "Graphics Designer", location: "Port-Harcourt, Nigeria", image: "/Instructors/Prince-Igwe.jpg" },
  { name: "Suka Lazarus", course: "Web Developer", location: "Nairobi, Kenya", image: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Jerry Zhiya", course: "Web Developer", location: "Abuja, Nigeria", image: "/Instructors/jerry.jpg" },
  { name: "Esther", course: "Data Analytics", location: "Abuja, Nigeria", image: "" },
];

const Skill = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", gender: "", dob: "", country: "", school: "", level: "", course: "", reason: ""
  });
  const [timeLeft, setTimeLeft] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [openCourse, setOpenCourse] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const distance = REGISTRATION_END.getTime() - now.getTime();
      if (distance <= 0) {
        setTimeLeft("Registration Closed");
        clearInterval(timer);
        return;
      }
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      setTimeLeft(`${days} days ${hours} hours ${minutes} minutes`);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem("studentRegistrations") || "[]");
    const updated = [...existing, formData];
    localStorage.setItem("studentRegistrations", JSON.stringify(updated));
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", gender: "", dob: "", country: "", school: "", level: "", course: "", reason: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleCourseClick = (courseName: string) => {
    setFormData({ ...formData, course: courseName });
    setOpenCourse(openCourse === courseName ? null : courseName);
  };

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="mentorship-layout">
      {sidebarOpen && <div className="sidebar-overlay open" onClick={closeSidebar}></div>}

      <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <h2 className="sidebar-title">Courses</h2>
        <ul className="course-list">
          {courses.map((course) => (
            <li key={course.name} className="course-item">
              <button className="course-button" onClick={() => handleCourseClick(course.name)}>
                <strong>{course.name}</strong> ({course.duration})
              </button>
              {openCourse === course.name && (
                <ul className="topics-list expanded">
                  {course.topics.map((t) => (<li key={t} className="topic">{t}</li>))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </aside>

      <button className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>☰</button>

      <main className="mentorship-container">
        <header className="mentorship-header">
          <h1 className="skills-title"><span>Scholarship Registration</span></h1>
          <p className="mentorship-tagline">Apply for our sponsored training program and gain valuable digital skills.</p>
        </header>

        <p className="mentorship-time">Registration ends in: <b>{timeLeft}</b></p>

        {submitted ? (
          <div className="thank-you-message">
            <h2>Thank you for applying!</h2>
            <p>Your scholarship application has been received.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mentorship-form">
            <div className="form-grid">
              <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
              <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
              <select name="gender" value={formData.gender} onChange={handleChange} required>
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
              <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
              <input type="text" name="country" placeholder="Country / State" value={formData.country} onChange={handleChange} required />
              <input type="text" name="school" placeholder="School / Institution" value={formData.school} onChange={handleChange} required />
              <select name="level" value={formData.level} onChange={handleChange} required>
                <option value="">Level of Study</option>
                <option>Secondary School</option>
                <option>Undergraduate</option>
                <option>Graduate</option>
              </select>
              <select name="course" value={formData.course} onChange={handleChange} required>
                <option value="">Select Course</option>
                {courses.map((c) => (<option key={c.name} value={c.name}>{c.name}</option>))}
              </select>
              <textarea name="reason" placeholder="Why do you want this scholarship?" value={formData.reason} onChange={handleChange} rows={4} required />
            </div>
            <div className="form-actions">
              <button type="submit" className="form-submit">Apply for Scholarship</button>
            </div>
          </form>
        )}

        {/* Instructors Section */}
        <section className="instructors-section">
          <h2>Our Instructors</h2>
          <div className="instructors-grid">
            {instructors.map((ins) => (
              <div key={ins.name} className="instructor-card">
                <img src={ins.image} alt={ins.name} className="instructor-image" />
                <h3>{ins.name}</h3>
                <p>{ins.course}</p>
                <p className="location">{ins.location}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default Skill;