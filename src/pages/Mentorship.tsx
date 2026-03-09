import { useState, useEffect } from "react";
import "../mentorship.css";

const REGISTRATION_END = new Date();
REGISTRATION_END.setDate(REGISTRATION_END.getDate() + 30);

const Mentorship = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
  });

  const [timeLeft, setTimeLeft] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // ⏳ Countdown timer
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
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );

      setTimeLeft(`${days} days ${hours} hours ${minutes} minutes`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // ✏️ handle input
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 📩 submit form
  const handleSubmit = (e) => {
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
    }, 2000); // Thank-you message disappears after 2s
  };

  return (
    <div className="mentorship-container">
      <h1 className="mentorship-title">Mentorship Registration</h1>

      <p className="mentorship-time">
        ⏳ Registration ends in: <b>{timeLeft}</b>
      </p>

      {submitted ? (
        <div className="thank-you-message">
          <h2>✅ Thank you for registering!</h2>
          <p>We have received your application. Our team will contact you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mentorship-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="form-input"
            >
              <option value="">Select Course</option>
              <option value="Web Development">Web Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="Data Analytics">Data Analytics</option>
            </select>
          </div>

          <button type="submit" className="form-submit">
            Register
          </button>
        </form>
      )}
    </div>
  );
};

export default Mentorship;