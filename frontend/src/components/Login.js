import React, { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api";
import "../styles/Register.css";
import foodPresentation from "../assets/foodPresentation.webp";

// NEW: basic validation patterns (injection-aware)
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DANGEROUS_CHARS_RE = /[<>"]/; // blocks obvious XSS payload chars

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [errorField, setErrorField] = useState(null);
  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // NEW: injection-aware front-end validation
  const validate = () => {
    const emailTrim = email.trim();

    // hard stop on obvious XSS characters in email
    if (DANGEROUS_CHARS_RE.test(emailTrim)) {
      setError("Invalid characters in email.");
      setErrorField("email");
      requestAnimationFrame(() => emailRef.current?.focus());
      return false;
    }

    if (!EMAIL_RE.test(emailTrim)) {
      setError("Please enter a valid email address (e.g., name@example.com)");
      setErrorField("email");
      requestAnimationFrame(() => emailRef.current?.focus());
      return false;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      setErrorField("password");
      requestAnimationFrame(() => passwordRef.current?.focus());
      return false;
    }

    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setErrorField(null);

    // NEW: run validation before sending to backend
    if (!validate()) return;

    // NEW: minimal sanitization
    const payload = {
      email: email.trim().toLowerCase(),
      password, // keep as-is; backend handles hashing/verification
    };

    try {
      const response = await api.post("/auth/login", payload);

      // keep YOUR existing flow exactly as-is
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("role", user.role || "user");

      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error) {
      const message = error.response?.data?.msg || "Login failed";
      setError(message);

      if (message.toLowerCase().includes("email")) {
        setErrorField("email");
        requestAnimationFrame(() => emailRef.current?.focus());
      } else {
        setErrorField("password");
        requestAnimationFrame(() => passwordRef.current?.focus());
      }
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

            {error && (
              <p
                id="login-error"
                className="error"
                role="alert"
                style={{
                  color: "#fcd27a",
                  fontWeight: "bold",
                  textDecoration: "underline",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                {error}
              </p>
            )}

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
                fontSize: "13px",
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
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              ref={emailRef}
              aria-required="true"
              aria-invalid={errorField === "email"}
              aria-describedby={
                errorField === "email" ? "login-error email-help" : "email-help"
              }
            />
            {errorField === "email" && (
              <p
                id="email-help"
                style={{
                  fontSize: "0.9rem",
                  color: "#ffffff",
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
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              ref={passwordRef}
              aria-required="true"
              aria-invalid={errorField === "password"}
              aria-describedby={
                errorField === "password" ? "login-error" : undefined
              }
            />

            <button type="submit" style={{ marginTop: "16px" }}>
              Login
            </button>

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
