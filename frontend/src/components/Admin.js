import React, { useState, useEffect } from "react";
import api from "../api";
import "../styles/Admin.css";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [reservations, setReservations] = useState([]); // State for reservations
  const [loading, setLoading] = useState(true); // State for loading
  const [showEditModal, setShowEditModal] = useState(false); // State for modal visibility
  const [currentReservation, setCurrentReservation] = useState(null); // State for current reservation
  const [message, setMessage] = useState(""); // State for success or error messages
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    const fetchReservations = async () => {
      const token = localStorage.getItem("token"); // Get token from localStorage

      if (!token) {
        console.error("No token found. Redirecting to login.");
        navigate("/login");
        return;
      }

      try {
        setLoading(true);
        const res = await api.get("/reservations/all", {
          headers: {
            "x-auth-token": token,
          },
        });
        console.log("Fetched Reservations:", res.data);
        setReservations(res.data);
      } catch (err) {
        console.error("API Error:", err.response?.data || err.message);
        if (err.response?.status === 401) {
          console.error("Unauthorized access. Redirecting to login.");
          navigate("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, [navigate]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this reservation?")) {
      try {
        await api.delete(`/reservations/${id}`, {
          headers: {
            "x-auth-token": localStorage.getItem("token"),
          },
        });
        setReservations(reservations.filter((res) => res.id !== id));
        setMessage("Reservation deleted successfully.");
      } catch (err) {
        console.error(
          "Error deleting reservation:",
          err.response?.data || err.message
        );
        setMessage("Failed to delete reservation.");
      }
    }
  };

  const onSaveEdit = async (updatedReservation) => {
    try {
      await api.put(
        `/reservations/${updatedReservation.id}`,
        {
          name: updatedReservation.name,
          guestEmail: updatedReservation.guestEmail,
          guestPhone: updatedReservation.guestPhone,
          date: updatedReservation.date,
          time: updatedReservation.time,
          partySize: updatedReservation.partySize,
        },
        {
          headers: {
            "x-auth-token": localStorage.getItem("token"),
          },
        }
      );
      setReservations((prev) =>
        prev.map((res) =>
          res.id === updatedReservation.id ? updatedReservation : res
        )
      );
      setMessage("Reservation updated successfully.");
      setShowEditModal(false);
    } catch (err) {
      console.error(
        "Error updating reservation:",
        err.response?.data || err.message
      );
      setMessage("Failed to update reservation.");
    }
  };

  const handleEdit = (reservation) => {
    setCurrentReservation(reservation);
    setShowEditModal(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>

      {message && (
        <p className={message.includes("Failed") ? "error" : "message"}>
          {message}
        </p>
      )}

      <div className="admin-reservations">
        <h2>Reservations</h2>
        {loading ? (
          <p>Loading reservations...</p>
        ) : reservations.length === 0 ? (
          <p>No reservations yet</p>
        ) : (
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
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation) => (
                <tr key={reservation.id}>
                  <td>{reservation.id}</td>
                  <td>{reservation.name || "N/A"}</td>
                  <td>{reservation.guestEmail || "N/A"}</td>
                  <td>{reservation.guestPhone || "N/A"}</td>
                  <td>{new Date(reservation.date).toLocaleDateString()}</td>
                  <td>{reservation.time}</td>
                  <td>
                    {reservation.partySize ?? reservation.party_size ?? "N/A"}
                  </td>
                  <td>
                    <button
                      onClick={() => handleEdit(reservation)}
                      className="edit-btn"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(reservation.id)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {showEditModal && currentReservation && (
          <div className="modal">
            <h2>Edit Reservation</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSaveEdit(currentReservation);
              }}
            >
              <input
                type="text"
                value={currentReservation.name || ""}
                onChange={(e) =>
                  setCurrentReservation({
                    ...currentReservation,
                    name: e.target.value,
                  })
                }
                placeholder="Guest Name"
              />
              <input
                type="email"
                value={currentReservation.guestEmail || ""}
                onChange={(e) =>
                  setCurrentReservation({
                    ...currentReservation,
                    guestEmail: e.target.value,
                  })
                }
                placeholder="Guest Email"
              />
              <input
                type="tel"
                value={currentReservation.guestPhone || ""}
                onChange={(e) =>
                  setCurrentReservation({
                    ...currentReservation,
                    guestPhone: e.target.value,
                  })
                }
                placeholder="Guest Phone"
              />
              <input
                type="date"
                value={new Date(currentReservation.date)
                  .toISOString()
                  .substr(0, 10)}
                onChange={(e) =>
                  setCurrentReservation({
                    ...currentReservation,
                    date: e.target.value,
                  })
                }
              />
              <input
                type="time"
                value={currentReservation.time || ""}
                onChange={(e) =>
                  setCurrentReservation({
                    ...currentReservation,
                    time: e.target.value,
                  })
                }
              />
              <input
                type="number"
                value={currentReservation.partySize || ""}
                onChange={(e) =>
                  setCurrentReservation({
                    ...currentReservation,
                    partySize: e.target.value,
                  })
                }
                placeholder="Party Size"
              />
              <button type="submit">Save</button>
              <button type="button" onClick={() => setShowEditModal(false)}>
                Cancel
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
