import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Element, ...rest }) => {
  const token = localStorage.getItem("x-auth-token"); // Get token from localStorage
  let isAdmin = false;

  // If token exists, verify role from the token
  if (token) {
    const decoded = JSON.parse(atob(token.split(".")[1])); // Decode the JWT token
    if (decoded?.user?.role === "admin") {
      isAdmin = true;
    }
  }

  // If the user is an admin, render the component (Element); if not, redirect to login
  return isAdmin ? <Element {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
