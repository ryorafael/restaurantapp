import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api"; // Import the API client
import "../styles/Register.css";
import foodPresentation from "../assets/foodPresentation.webp"; // Import the image

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/login", { email, password });
      const { token, user } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("role", user.role || "user"); // Default to "user" if role is missing

      // Redirect based on user role
      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="register-container">
        <div className="register-frame">
          <img
            src={foodPresentation}
            alt="Food Presentation"
            className="register-image"
          />
          <div className="register-form">
            <h2>Welcome back!</h2>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
              placeholder="Email"
              required
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
              placeholder="Password"
              required
            />
            <button type="submit">Login</button>
            <Link to="/registration" className="link">
              Don't have an account? Register here!
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
