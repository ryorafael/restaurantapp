import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/index.css"; // Import the CSS file for navbar styles

const Navbar = () => {
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [top, setTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        setTop(0); // Show navbar
      } else {
        setTop(-80); // Hide navbar
      }
      setPrevScrollpos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollpos]);

  return (
    <nav className="navbar" style={{ top: `${top}px` }}>
      <Link to="/" className="nav-link">
        Home
      </Link>
      <div className="dropdown">
        <button className="dropbtn">La Carte</button>
        <div className="dropdown-content">
          <Link to="/menu">Dinner Menu</Link>
          <Link to="/cocktail">Cocktail Menu</Link>
          <Link to="/wine">Wine List</Link>
          <Link to="/dessert">Dessert Menu</Link>
        </div>
      </div>
      <Link to="/events" className="nav-link">
        Events
      </Link>
      <Link to="/giftcertificate" className="nav-link">
        Gift Certificates
      </Link>
      <Link to="/aboutus" className="nav-link">
        About Us
      </Link>
      <div className="dropdown">
        <button className="dropbtn">Social Media</button>
        <div className="dropdown-content">
          <a
            href="https://www.facebook.com/lefoufrogkc"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/lefoufrogkc/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
