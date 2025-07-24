import React, { useState, useRef, useEffect } from "react";
import reservationImage from "../assets/frontoffrog.jpeg";
import "../styles/Reservation.css";
import DatePicker from "react-datepicker"; // Import DatePicker
import "react-datepicker/dist/react-datepicker.css"; // Import DatePicker CSS
import api from "../api";

const Reservation = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    comments: "",
  });
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [submittedData, setSubmittedData] = useState({});
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);
  const triggerBtnRef = useRef(null);

  useEffect(() => {
    const previouslyFocusedElement = document.activeElement;

    if (showModal) {
      document
        .getElementById("main-content")
        .setAttribute("aria-hidden", "true");

      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const trapFocus = (e) => {
        if (e.key === "Tab") {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        } else if (e.key === "Escape") {
          handleCloseModal();
        }
      };

      document.addEventListener("keydown", trapFocus);

      setTimeout(() => {
        closeBtnRef.current?.focus();
      }, 0);

      return () => {
        document.removeEventListener("keydown", trapFocus);
        document.getElementById("main-content").removeAttribute("aria-hidden");
        previouslyFocusedElement?.focus();
      };
    }
  }, [showModal]);

  const handleCloseModal = () => {
    setShowModal(false);
    setTimeout(() => {
      triggerBtnRef.current?.focus();
    }, 0);
  };

  // List of holidays in yyyy-mm-dd format
  const holidays = ["2024-12-24", "2024-04-06", "2024-11-27"];

  const isHoliday = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    return holidays.includes(formattedDate);
  };

  // Check if it's a Monday
  const isMonday = (date) => {
    const day = date.getDay();
    return day === 1; // Monday is represented by 1 in JS
  };

  // Disable Mondays, holidays, and past dates
  const isInvalidDate = (date) => {
    // We want to disable dates that are Mondays, holidays, or in the past
    return isMonday(date) || isHoliday(date) || date < new Date();
  };

  const handleDateChange = (selectedDate) => {
    setFormData({
      ...formData,
      date: selectedDate,
    });
  };

  // Validate the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate full name
    if (!formData.fullName) {
      setError("Full name is required");
      return;
    }

    // Validate phone number
    if (!formData.phoneNumber) {
      setError("Phone number is required");
      return;
    }

    // Validate email
    if (!formData.email) {
      setError("Email is required");
      return;
    }

    // Validate date
    if (!formData.date) {
      setError("Reservation date is required");
      return;
    }

    const currentDate = new Date().toISOString().split("T")[0];
    const selectedDate = new Date(formData.date).toISOString().split("T")[0];

    if (selectedDate < currentDate) {
      setError("Reservation date cannot be in the past");
      return;
    }

    if (isMonday(new Date(formData.date))) {
      setError("Reservations are not available on Mondays");
      return;
    }

    if (isHoliday(new Date(formData.date))) {
      setError("Reservations are not available on holidays");
      return;
    }

    // Validate time
    const timeValue = parseFloat(formData.time.replace(":", "."));
    const dayOfWeek = new Date(formData.date).getDay();

    if ((dayOfWeek >= 2 && dayOfWeek <= 4) || dayOfWeek === 0) {
      // Tue-Wed-Thu-Sun
      if (timeValue < 17 || timeValue > 20.3) {
        setError("Time must be between 5:00 PM and 8:30 PM (Tue-Thu, Sun)");
        return;
      }
    } else if (dayOfWeek === 5 || dayOfWeek === 6) {
      // Fri-Sat
      if (timeValue < 17 || timeValue > 21.3) {
        setError("Time must be between 5:00 PM and 9:30 PM (Fri-Sat)");
        return;
      }
    }

    // Validate guest limit
    if (formData.guests > 6 || formData.guests < 1) {
      setError("For more than 6 guests, please call the restaurant");
      return;
    }

    // If all validations pass
    setSubmittedData({
      fullName: formData.fullName,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      date: new Date(formData.date).toLocaleDateString(), // proper format
      time: formData.time,
      guests: formData.guests,
    });
    setShowModal(true);
    setError("");

    try {
      const response = await api.post("/reservations", {
        name: formData.fullName,
        date: formData.date,
        time: formData.time,
        partySize: parseInt(formData.guests, 10),
        guestEmail: formData.email,
        guestPhone: formData.phoneNumber,
        comments: formData.comments || null, // Optional comments
      });
      // alert("Reservation submitted successfully!");
      setShowModal(true);
      console.log("Reservation Response:", response.data);
      // Optionally clear the form
      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        date: "",
        time: "",
        guests: "",
        comments: "",
      });
    } catch (err) {
      console.error("Error submitting reservation:", err.message);
      setError("Failed to submit reservation. Please try again.");
    }
  };

  // Handle form change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="reservation-container">
      <div className="reservation-form" id="main-content">
        <h2>Book A Table</h2>
        {error && (
          <p role="alert" className="error">
            {error}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <p>
            All fields marked required are necessary to complete your
            reservation.
          </p>
          <div className="form-left">
            <label for="fullName">Full Name (required)</label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
              autoComplete="name"
            />
            <label for="phoneNumber">Phone Number (required)</label>
            <input
              id="phoneNumber"
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              autoComplete="tel"
            />
            <label for="email">Email (required)</label> {/* Email field */}
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              autoComplete="email"
            />
            <label for="date">Date (required)</label>
            <DatePicker
              name="date"
              id="date"
              selected={formData.date}
              onChange={handleDateChange}
              filterDate={(date) => !isInvalidDate(date)} // Disable invalid dates (not allow Mondays, holidays, or past dates)
              minDate={new Date()}
              placeholderText="Select a date"
              required
            />
          </div>

          <div className="form-right">
            <label for="time">Time (required)</label>
            <input
              id="time"
              type="time"
              name="time"
              min="17:00"
              max="21:30"
              value={formData.time}
              onChange={handleChange}
              required
            />

            <label for="guests">Guest (required)</label>
            <input
              id="guests"
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              placeholder="Guests"
              max="6"
              required
            />

            <label for="comments">Comments</label>
            <textarea
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              placeholder="Comments (e.g., anniversary, birthday)"
            ></textarea>
          </div>

          <button class="reservation-btn" type="submit">
            Reservation
          </button>
        </form>
        {showModal && (
          <div
            className="modal-backdrop"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            ref={modalRef}
            tabIndex="-1"
          >
            <div className="modal-content">
              <h2 id="modal-title">Reservation Confirmed</h2>
              <p id="modal-desc">
                Your reservation has been successfully submitted with the
                following details:
              </p>
              <ul>
                <li>
                  <strong>Name:</strong> {submittedData.fullName}
                </li>
                <li>
                  <strong>Phone:</strong> {submittedData.phoneNumber}
                </li>
                <li>
                  <strong>Email:</strong> {submittedData.email}
                </li>
                <li>
                  <strong>Date:</strong> {submittedData.date}
                </li>
                <li>
                  <strong>Time:</strong> {submittedData.time}
                </li>
                <li>
                  <strong>Guests:</strong> {submittedData.guests}
                </li>
              </ul>
              <button ref={closeBtnRef} onClick={handleCloseModal}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="reservation-image">
        <img src={reservationImage} alt="" />
      </div>
    </div>
  );
};

export default Reservation;
