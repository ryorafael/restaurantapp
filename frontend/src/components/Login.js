import React, { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api";
import "../styles/Register.css";
import foodPresentation from "../assets/foodPresentation.webp";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [errorField, setErrorField] = useState(null);
  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setErrorField(null);

    try {
      const response = await api.post("/auth/login", { email, password });
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
                  color: "red",
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
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
                  color: "#666",
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
