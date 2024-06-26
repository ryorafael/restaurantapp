// import React, { useState } from "react";
import "../styles/index.css";
import headerImage from "../assets/header2.png";
import wagyu from "../assets/wagyu1.png";
import steak from "../assets/steakaupoivrenew.webp";
import profiteroles from "../assets/profiteroles1.png";
import escargot from "../assets/escargot2.png";
import poisson from "../assets/poisson.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  // const [isModalOpen, setModalOpen] = useState(false);

  // const openModal = () => setModalOpen(true);
  // const closeModal = () => setModalOpen(false);

  return (
    <div>
      <div className="imageheader2" style={{ textAlign: "center" }}>
        <img
          src={headerImage}
          alt="inside of Le Fou Frog"
          width="60%"
          height="auto"
        />
      </div>
      <h4>established in 1996</h4>
      <h2>Bienvenue à Le Fou Frog</h2>
      <br />
      <div className="intro">
        <p>
          Since 1996, Le Fou Frog has been a bit of France and New York City
          tucked away on the corner of 5th and Oak in Kansas City's River
          Market. Chef/Proprietor Mano Rafael and wife, Barbara, invite you to
          experience fresh and elegant food, soft lighting, cozy tables,
          charming servers and an atmosphere that is relaxing, fun and totally
          unpretentious. We invite you to <q>be our guest!</q>
        </p>
      </div>
      <br />
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <img src={wagyu} alt="wagyu" />
          </div>
          <div className="slide">
            <img src={steak} alt="steak" />
          </div>
          <div className="slide">
            <img src={profiteroles} alt="profiteroles" />
          </div>
          <div className="slide">
            <img src={escargot} alt="escargot" />
          </div>
          <div className="slide">
            <img src={poisson} alt="poisson" />
          </div>
          <div className="slide">
            <img src={wagyu} alt="wagyu" />
          </div>
          <div className="slide">
            <img src={steak} alt="steak" />
          </div>
          <div className="slide">
            <img src={profiteroles} alt="profiteroles" />
          </div>
          <div className="slide">
            <img src={escargot} alt="escargot" />
          </div>
          <div className="slide">
            <img src={poisson} alt="poisson" />
          </div>
          <div className="slide">
            <img src={wagyu} alt="wagyu" />
          </div>
          <div className="slide">
            <img src={steak} alt="steak" />
          </div>
          <div className="slide">
            <img src={profiteroles} alt="profiteroles" />
          </div>
          <div className="slide">
            <img src={escargot} alt="escargot" />
          </div>
          <div className="slide">
            <img src={poisson} alt="poisson" />
          </div>
        </div>
      </div>
      {/* <div className="scroll-container">
        <img src={wagyu} alt="wagyu" />
        <img src={steak} alt="steak" />
        <img src={profiteroles} alt="profiteroles" />
        <img src={escargot} alt="escargot" />
        <img src={poisson} alt="poisson" />
      </div> */}
      {/* <h3>
        <div className={`modal ${isModalOpen ? "open" : ""}`}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Reservation Form</h2>
            <form id="reservationForm">
              <label htmlFor="date">Date:</label>
              <input type="date" id="date" name="date" required />
              <label htmlFor="time">Time:</label>
              <input type="time" id="time" name="time" required />
              <label htmlFor="people">Number of People:</label>
              <input type="number" id="people" name="people" min="1" required />
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
        <button className="button-18" onClick={openModal}>
          Reservations
        </button>
      </h3> */}
      <div className="footer-padding">
        <div className="open-hours">
          <h5>Our Hours</h5>
          <span className="days">Tuesday to Sunday</span>
          <br />
          <span className="hours">5 pm to 9 pm</span>
        </div>
        <div className="address">
          <h5>400 E. 5th Street Kansas City, Missouri 64114</h5>
        </div>
        <div className="contact">
          Contact us (816)-474-6060, lefoufrog@yahoo.com
        </div>
        <div className="links">
          <Link to="/menu">Dinner Menu</Link>
          <Link to="/cocktail">Cocktail Menu</Link>
          <Link to="/wine">Wine List</Link>
          <Link to="/dessert">Dessert Menu</Link>
          <Link to="events">Events</Link>
          <Link to="giftcertificates">Gift Certificates</Link>
          <Link to="aboutus">About Us</Link>
        </div>
        <div className="reserve-button"></div>
        <div className="social-media"></div>
      </div>
    </div>
  );
};

export default HomePage;
