import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (password === "admion2026") { // <-- Replace with your admin password
            navigate("/admin");
        } else {
            alert("Incorrect password!");
        }
    };

    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-80">
                <h2 className="text-xl font-bold mb-4 text-center">Admin Login</h2>
                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border p-2 rounded mb-4"
                />
                <button
                    onClick={handleLogin}
                    className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default AdminLogin;