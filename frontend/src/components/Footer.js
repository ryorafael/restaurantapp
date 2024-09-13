import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../assets/LFF LOGO TRANSPARENT.webp";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/aboutus">About</Link>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <ul>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/giftcertificates">Gift Cards</Link>
          </li>
          <li>
            <Link smooth to="/#reservation-section">
              Reservations
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-logo">
        <img src={logo} alt="Le Fou Frog logo" />
      </div>
      <div className="footer-section">
        <ul>
          <li>
            <Link to="/registration">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
      <div className="footer-socials">
        <a
          href="https://www.facebook.com/lefoufrogkc"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a
          href="https://www.instagram.com/lefoufrogkc/"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <div className="footer-info">
        <div className="open-hours">
          <h5>Our Hours</h5>
          <p>Tuesday to Thursday/Sunday: 5 pm to 8:30 pm</p>
          <p>Friday and Saturday: 5 pm to 9:30 pm</p>
        </div>
        <div className="address">
          <h5>400 E. 5th Street Kansas City, Missouri 64114</h5>
        </div>
        <div className="contact-info">
          <p>Contact us: (816)-474-6060, lefoufrog@yahoo.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
