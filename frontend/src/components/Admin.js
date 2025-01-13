import React, { useState, useEffect } from "react";
import api from "../api"; // Make sure api.js is correctly set up
import "../styles/Admin.css";
import { useNavigate } from "react-router-dom"; // For navigation

const Admin = () => {
  const [reservations, setReservations] = useState([]);
  const navigate = useNavigate(); // For navigation, e.g., for user logout

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const res = await api.get("/reservations/all", {
          headers: {
            "x-auth-token": localStorage.getItem("x-auth-token"),
          },
        });
        setReservations(res.data);
      } catch (err) {
        console.error(err.response?.data || err.message);
      }
    };

    fetchReservations();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("x-auth-token");
    navigate("/login"); // Redirect to login page after logging out
  };

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>

      <div className="admin-reservations">
        <h2>Reservations</h2>
        <table className="reservation-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Date</th>
              <th>Time</th>
              <th>Party Size</th>
            </tr>
          </thead>
          <tbody>
            {reservations.length === 0 ? (
              <tr>
                <td colSpan="7">No reservations yet</td>
              </tr>
            ) : (
              reservations.map((reservation) => (
                <tr key={reservation.id}>
                  <td>{reservation.id}</td>
                  <td>{reservation.guest_name || "N/A"}</td>
                  <td>{reservation.guest_email || "N/A"}</td>
                  <td>{reservation.guest_phone || "N/A"}</td>
                  <td>{new Date(reservation.date).toLocaleDateString()}</td>
                  <td>{reservation.time}</td>
                  <td>{reservation.party_size}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
