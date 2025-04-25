import React, { useEffect, useState } from "react";
import api from "../api";

const MyReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          alert("You must be logged in to view reservations.");
          return;
        }

        // Decode JWT to get user ID
        const decoded = JSON.parse(atob(token.split(".")[1]));
        const userId = decoded?.user?.id;

        const res = await api.get(`/reservations/${userId}`);
        setReservations(res.data);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  if (loading) return <p>Loading reservations...</p>;

  return (
    <div className="my-reservations">
      <h2>My Reservations</h2>
      {reservations.length === 0 ? (
        <p>No reservations found.</p>
      ) : (
        <ul>
          {reservations.map((res) => (
            <li key={res.id}>
              <strong>Date:</strong> {res.date} <br />
              <strong>Time:</strong> {res.time} <br />
              <strong>Guests:</strong> {res.party_size}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyReservations;
