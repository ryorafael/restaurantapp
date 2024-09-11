import React, { useState } from "react";
import reservationImage from "../assets/frontoffrog.jpeg";
import "../styles/Reservation.css";
import DatePicker from "react-datepicker"; // Import DatePicker
import "react-datepicker/dist/react-datepicker.css"; // Import DatePicker CSS
import { addDays } from "date-fns"; // Import date functions

const Reservation = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    date: "", // We will use DatePicker to update this
    time: "",
    guests: "",
    comments: "",
  });

  const [error, setError] = useState("");

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
  const handleSubmit = (e) => {
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
    if (formData.guests > 6) {
      setError("For more than 6 guests, please call the restaurant");
      return;
    }

    // If all validations pass
    setError("");
    alert("Reservation submitted successfully!");
    // Handle sending the data to the backend
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
      <div className="reservation-form">
        <h2>Book A Table</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-left">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
            <label>Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              required
            />
            <label>Email</label> {/* Email field */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
            />
            <label>Date</label>
            <DatePicker
              selected={formData.date}
              onChange={handleDateChange}
              filterDate={(date) => !isInvalidDate(date)} // Disable invalid dates (not allow Mondays, holidays, or past dates)
              minDate={new Date()}
              placeholderText="Select a date"
              required
            />
            <label>
              <input type="checkbox" name="subscribe" onChange={handleChange} />
              I would like to be informed about events and news
            </label>
          </div>

          <div className="form-right">
            <label>Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />

            <label>Guest</label>
            <input
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              placeholder="Guests"
              max="6"
              required
            />

            <label>Comments</label>
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              placeholder="Comments (e.g., anniversary, birthday)"
            ></textarea>
          </div>

          <button type="submit">Reservation</button>
        </form>
      </div>

      <div className="reservation-image">
        <img src={reservationImage} alt="Le Fou Frog" />
      </div>
    </div>
  );
};

export default Reservation;
