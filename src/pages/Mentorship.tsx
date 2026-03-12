import { useState, useEffect } from "react";
import "../mentorship.css";

const REGISTRATION_END = new Date();
REGISTRATION_END.setDate(REGISTRATION_END.getDate() + 30);

const courses = [
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
];

const Mentorship = () => {
  const [formData, setFormData] = useState({ name: "", email: "", course: "" });
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.course) {
      alert("Please fill all fields");
      return;
    }

    const existing = JSON.parse(localStorage.getItem("mentorshipRegistrations") || "[]");
    const updated = [...existing, formData];
    localStorage.setItem("mentorshipRegistrations", JSON.stringify(updated));

    setSubmitted(true);
    setFormData({ name: "", email: "", course: "" });

    setTimeout(() => {
      setSubmitted(false);
    }, 2000);
  };

  const handleCourseClick = (courseName: string) => {
    setFormData({ ...formData, course: courseName });
    setOpenCourse(openCourse === courseName ? null : courseName);
  };

  return (
    <div className="mentorship-layout">
      <button
        aria-label={sidebarOpen ? "Close courses" : "Open courses"}
        className={`sidebar-toggle ${sidebarOpen ? "active" : ""}`}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <span className="hamburger" aria-hidden>
          ☰
        </span>
      </button>

      <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`} aria-hidden={!sidebarOpen}>
        <div className="sidebar-inner">
          <h2 className="sidebar-title">Courses</h2>
          <p className="sidebar-sub">Choose a course to auto-fill the form</p>
          <ul className="course-list" role="list">
            {courses.map((course) => (
              <li
                key={course.name}
                className={`course-item ${formData.course === course.name ? "selected" : ""}`}
              >
                <button
                  className="course-button"
                  onClick={() => handleCourseClick(course.name)}
                  aria-expanded={openCourse === course.name}
                >
                  <div className="course-left">
                    <strong>{course.name}</strong>
                    <span className="course-duration">{course.duration}</span>
                  </div>
                  <div className={`course-arrow ${openCourse === course.name ? "open" : ""}`}>▶</div>
                </button>

                <ul
                  className={`topics-list ${openCourse === course.name ? "expanded" : ""}`}
                  aria-hidden={openCourse !== course.name}
                >
                  {course.topics.map((t) => (
                    <li key={t} className="topic">
                      {t}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <div className="sidebar-footer">
            <small>Need help choosing? Pick any course and register — we’ll follow up.</small>
          </div>
        </div>
      </aside>

      <main className={`mentorship-container ${sidebarOpen ? "shifted" : ""}`} role="main">
        <header className="mentorship-header">
          <h1 className="skills-title">
            Skill <span>Registration</span>
          </h1>
          <p className="mentorship-tagline"> Learn practical skills, build real projects, and launch your career.</p>
        </header>

        <div className="mentorship-meta">
          <p className="mentorship-time">
             Registration ends in: <b>{timeLeft}</b>
          </p>
        </div>

        {submitted ? (
          <div className="thank-you-message" role="status">
            <h2> Thank you for registering!</h2>
            <p>We have received your application. Our team will contact you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mentorship-form" aria-label="Mentorship registration form">
            <div className="form-grid">
              <label className="form-label">
                <span className="label-text">Full name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Next Generation Builders"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </label>

              <label className="form-label">
                <span className="label-text">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </label>

              <label className="form-label full">
                <span className="label-text">Course</span>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="form-input"
                  required
                >
                  <option value="">Select Course</option>
                  {courses.map((c) => (
                    <option key={c.name} value={c.name}>
                      {c.name}
                    </option>
                  ))}

                </select>
              </label>
            </div>

            <div className="form-actions">
              <button type="submit" className="form-submit">
                Register Now
              </button>
              <button
                type="button"
                className="form-ghost"
                onClick={() => {
                  setFormData({ name: "", email: "", course: "" });
                }}
              >
                Reset
              </button>
            </div>
          </form>
        )}
      </main>
    </div>
  );
};


export default Mentorship;
