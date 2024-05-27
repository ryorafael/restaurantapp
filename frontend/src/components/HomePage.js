import React, { useState } from "react";
import "../styles/index.css";
import headerImage from "../assets/header2.png";

const HomePage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

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
      <nav>
        <a href="/">Home</a>
        <div className="dropdown">
          <a href className="dropbtn">
            La Carte
          </a>
          <div className="dropdown-content">
            <a href="/menu">Dinner Menu</a>
            <a href="/cocktail">Cocktail Menu</a>
            <a href="/winemenu">Wine List</a>
            <a href="/dessert">Desserts</a>
          </div>
        </div>
        <a href="/events">Events</a>
        <a href="/giftcertificates">Gift Certificates</a>
        <div className="dropdown">
          <a href className="dropbtn">
            Social Media
          </a>
          <div className="dropdown-content">
            <a
              href="https://www.facebook.com/p/le-Fou-Frog-100063884143223/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/lefoufrog/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.lefoufrog.com/blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </div>
        </div>
        <a href="/aboutus">About us</a>
      </nav>
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
      <div className="scroll-container">
        <img src="lffimages/wagyu1.png" alt="" />
        <img src="lffimages/steakaupoivrenew.webp" alt="" />
        <img src="lffimages/profiteroles1.png" alt="" />
        <img src="lffimages/escargot2.png" alt="" />
        <img src="lffimages/poisson.png" alt="" />
      </div>
      <h3>
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
      </h3>
      <div className="open-hours">
        <h5>Our Hours</h5>
        <span className="days">Tuesday to Sunday</span>
        <br />
        <span className="hours">5 pm to 9 pm</span>
      </div>
      <footer>
        Contact us (816)-474-6060, lefoufrog@yahoo.com, 400 E. 5th St. Kansas
        City Missouri 64106
        <div
          className="review-widget_net"
          data-uuid="9b216c0e-fc8f-4568-afa6-7867b403de1a"
          data-template="10"
          data-lang="en"
          data-theme="light"
        ></div>
      </footer>
    </div>
  );
};

export default HomePage;
