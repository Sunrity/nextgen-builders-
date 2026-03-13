import { useEffect, useState } from "react";
import "../admin.css"

type Registration = {
  name: string;
  email: string;
  course: string;
};

const AdminDashboard = () => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);

  useEffect(() => {
    const stored = JSON.parse(
      localStorage.getItem("mentorshipRegistrations") || "[]"
    );
    setRegistrations(stored);
  }, []);

  const deleteRegistration = (index: number) => {
    const updated = registrations.filter((_, i) => i !== index);
    setRegistrations(updated);
    localStorage.setItem("mentorshipRegistrations", JSON.stringify(updated));
  };

  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin Dashboard</h1>

      <p className="admin-count">
        Total Registrations: <b>{registrations.length}</b>
      </p>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {registrations.length === 0 ? (
            <tr>
              <td colSpan={4}>No registrations yet</td>
            </tr>
          ) : (
            registrations.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.course}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteRegistration(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;