import React, { useState, useRef } from "react";
import api from "../api";
import { Link } from "react-router-dom";
import "../styles/Register.css";
import foodPresentation from "../assets/foodPresentation.webp";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const { name, email, password, confirmPassword } = formData;

  // Refs to input fields
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim()) {
      setError("Please enter your name.");
      requestAnimationFrame(() => nameRef.current?.focus());
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address (e.g., name@example.com)");
      requestAnimationFrame(() => emailRef.current?.focus());
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      requestAnimationFrame(() => passwordRef.current?.focus());
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      requestAnimationFrame(() => confirmRef.current?.focus());
      return;
    }

    try {
      const userData = { ...formData, role: "user" };
      const res = await api.post("/auth/register", userData);
      setSuccess("Registration successful! Redirecting to login...");
      setTimeout(() => {
        window.location.href = "/login";
      }, 1500);
    } catch (err) {
      setError(err.response?.data?.msg || "Something went wrong");
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
          <p className="required-note">All fields are required.</p>

          {error && (
            <p
              id="error-message"
              className="form-message error"
              role="alert"
              aria-live="assertive"
            >
              {error}
            </p>
          )}
          {success && (
            <p
              id="success-message"
              className="form-message success"
              role="status"
              aria-live="polite"
            >
              {success}
            </p>
          )}

          <label htmlFor="name" className="visually-hidden">
            Name
          </label>
          <input
            ref={nameRef}
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            placeholder="Your name"
            required
            aria-required="true"
            aria-invalid={!!error && error.toLowerCase().includes("name")}
            aria-describedby="error-message"
          />

          <label htmlFor="email" className="visually-hidden">
            Email
          </label>
          <p id="email-desc" className="visually-hidden">
            Use a valid email format like name@example.com
          </p>
          <input
            ref={emailRef}
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Email"
            required
            aria-required="true"
            aria-invalid={!!error && error.toLowerCase().includes("email")}
            aria-describedby="email-desc error-message"
          />

          <label htmlFor="password" className="visually-hidden">
            Password
          </label>
          <input
            ref={passwordRef}
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Create password"
            required
            aria-required="true"
            aria-invalid={!!error && error.toLowerCase().includes("password")}
            aria-describedby="error-message"
          />

          <label htmlFor="confirmPassword" className="visually-hidden">
            Confirm Password
          </label>
          <input
            ref={confirmRef}
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={onChange}
            placeholder="Confirm password"
            required
            aria-required="true"
            aria-invalid={
              !!error &&
              (error.toLowerCase().includes("confirm") ||
                error.toLowerCase().includes("match"))
            }
            aria-describedby="error-message"
          />

          <button type="submit" onClick={onSubmit}>
            Register
          </button>
          <Link to="/login" className="link">
            Already have an account? Login here!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
