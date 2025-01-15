import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Element, ...rest }) => {
  const token = localStorage.getItem("token"); // Ensure correct key is used
  let isAdmin = false;

  if (token) {
    try {
      const decoded = JSON.parse(atob(token.split(".")[1])); // Decode the JWT payload
      if (decoded?.user?.role === "admin") {
        isAdmin = true;
      }
    } catch (err) {
      console.error("Error decoding token:", err.message);
    }
  }

  // Render the component if admin, otherwise redirect to login
  return isAdmin ? <Element {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
