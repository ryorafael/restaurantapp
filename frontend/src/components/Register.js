import React, { useState } from "react";
import api from "../api";
import "../styles/Register.css";
import foodPresentation from "../assets/foodPresentation.webp"; // Import the image

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { email, password, confirmPassword } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/register", formData);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
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
          <button type="submit">Register</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
