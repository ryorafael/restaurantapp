import React, { useState } from "react";
import api from "../api"; // Import the API client
import "../styles/Register.css";
import foodPresentation from "../assets/foodPresentation.webp"; // Import the image
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send login request to backend
      const res = await api.post("/auth/login", formData); // Adjust the API endpoint if needed
      console.log(res.data);

      // Store token in localStorage after successful login
      localStorage.setItem("x-auth-token", res.data.token);

      // Redirect user to the admin page or another page
      window.location.href = "/admin"; // Or use react-router's navigate
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  return (
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
            onChange={onChange}
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Password"
            required
          />
          <button type="submit" onClick={onSubmit}>
            Login
          </button>
          <Link to="/registration" className="link">
            Don't have an account? Register here!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
