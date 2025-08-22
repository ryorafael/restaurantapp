import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../assets/LFF LOGO TRANSPARENT.webp";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer role="contentinfo" className="footer">
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
            <Link to="/giftcertificate">Gift Cards</Link>
          </li>
          <li>
            <Link smooth to="/#reservation-section">
              Reservations
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-logo">
        <Link to="/" aria-label="Return to home: Le Fou Frog">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="footer-section">
        <ul>
          <li>
            <Link to="/registration">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/mentionlegale">Mentions Légales</Link>
          </li>
        </ul>
      </div>
      <div className="footer-socials">
        <a
          aria-label="Facebook of Le Fou Frog"
          href="https://www.facebook.com/lefoufrogkc"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a
          aria-label="Instagram of Le Fou Frog"
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
          <h3>Our Hours</h3>
          <p>Tuesday to Thursday/Sunday: 5 pm to 8:30 pm</p>
          <p>Friday and Saturday: 5 pm to 9:30 pm</p>
        </div>
        <div className="address">
          <p>400 E. 5th Street Kansas City, Missouri 64114</p>
        </div>
        <div className="contact-info">
          <p>Contact us: (816)-474-6060, lefoufrog@yahoo.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
