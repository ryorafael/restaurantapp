import React, { useState } from "react";
import api from "../api"; // Import the API client
import "../styles/Register.css";
import foodPresentation from "../assets/foodPresentation.webp"; // Import the image

const Register = () => {
  const [formData, setFormData] = useState({
    name: "", // Add name field to form data
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    // Basic password match validation
    if (password !== confirmPassword) {
      return alert("Passwords do not match");
    }

    try {
      // Add the role as 'user' for regular users (or 'admin' if required)
      const userData = { ...formData, role: "user" }; // Set the role as 'user' by default

      // Send register request to backend
      const res = await api.post("/auth/register", userData); // Adjust the API endpoint if needed
      console.log(res.data);

      // Redirect user to login page after successful registration
      window.location.href = "/login"; // Or use react-router's navigate
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
          <h2>Sign up</h2>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            placeholder="Your name"
            required
          />
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
            placeholder="Create password"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={onChange}
            placeholder="Confirm password"
            required
          />
          <button type="submit" onClick={onSubmit}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
