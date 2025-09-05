import React, { useState, useRef } from "react";
import api from "../api";
import { Link } from "react-router-dom";
import "../styles/Register.css";
import foodPresentation from "../assets/foodPresentation.webp";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_SAFE_RE = /^[a-zA-Z0-9\s.,'-]*$/; // basic XSS guard (no < > etc.)

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [errorField, setErrorField] = useState(null);

  const { name, email, password, confirmPassword } = formData;

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
    setErrorField(null);

    // --- validations ---
    if (!name.trim()) {
      setError("Please enter your name.");
      setErrorField("name");
      requestAnimationFrame(() => nameRef.current?.focus());
      return;
    }

    if (!NAME_SAFE_RE.test(name)) {
      setError("Name contains invalid characters.");
      setErrorField("name");
      requestAnimationFrame(() => nameRef.current?.focus());
      return;
    }

    const emailTrim = email.trim();
    if (!EMAIL_RE.test(emailTrim)) {
      setError("Please enter a valid email address (e.g., name@example.com)");
      setErrorField("email");
      requestAnimationFrame(() => emailRef.current?.focus());
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      setErrorField("password");
      requestAnimationFrame(() => passwordRef.current?.focus());
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setErrorField("confirmPassword");
      requestAnimationFrame(() => confirmRef.current?.focus());
      return;
    }
    // --- end validations ---

    try {
      // sanitize before send
      const userData = {
        name: name.trim(),
        email: emailTrim.toLowerCase(),
        password,
        role: "user",
      };

      await api.post("/auth/register", userData);
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
          loading="lazy"
          src={foodPresentation}
          alt="Food Presentation"
          className="register-image"
          width="400"
          height="300"
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

          <label
            htmlFor="name"
            style={{
              color: "#fff",
              fontWeight: "bold",
              display: "block",
              marginTop: "10px",
            }}
          >
            Name
          </label>
          <input
            ref={nameRef}
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            required
            aria-required="true"
            aria-invalid={errorField === "name"}
            aria-describedby="error-message"
            autoComplete="name"
          />

          <label
            htmlFor="email"
            style={{
              color: "#fff",
              fontWeight: "bold",
              display: "block",
              marginTop: "10px",
            }}
          >
            Email
          </label>
          <p
            className="suggestion"
            style={{
              fontSize: "12px",
              color: "#fcd27a",
              fontFamily: "Playfair Display, serif",
              textAlign: "left",
              marginTop: "10px",
              marginBottom: "10px",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            (example: johnsmith@email.com)
          </p>
          <input
            ref={emailRef}
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
            autoComplete="email"
            aria-required="true"
            aria-invalid={errorField === "email"}
            aria-describedby={
              errorField === "email" ? "error-message email-help" : "email-help"
            }
          />
          {errorField === "email" && (
            <p
              id="email-help"
              style={{
                fontSize: "0.9rem",
                color: "#FFD700",
                marginTop: "4px",
                marginBottom: "8px",
              }}
            >
              Example: name@example.com
            </p>
          )}

          <label
            htmlFor="password"
            style={{
              color: "#fff",
              fontWeight: "bold",
              display: "block",
              marginTop: "10px",
            }}
          >
            Password
          </label>
          <input
            ref={passwordRef}
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            aria-required="true"
            aria-invalid={errorField === "password"}
            aria-describedby="error-message"
            autoComplete="new-password"
          />

          <label
            htmlFor="confirmPassword"
            style={{
              color: "#fff",
              fontWeight: "bold",
              display: "block",
              marginTop: "10px",
            }}
          >
            Confirm Password
          </label>
          <input
            ref={confirmRef}
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={onChange}
            required
            aria-required="true"
            aria-invalid={errorField === "confirmPassword"}
            aria-describedby="error-message"
            autoComplete="new-password"
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
