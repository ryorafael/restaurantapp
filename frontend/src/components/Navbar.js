import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css"; // Correct import for CSS module

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
    <nav className={styles.navbar} style={{ top: `${top}px` }}>
      <Link to="/" className={styles.navLink}>
        Home
      </Link>
      <div className={styles.dropdown}>
        <button className={styles.dropbtn}>La Carte</button>
        <div className={styles.dropdownContent}>
          <Link to="/menu">Dinner Menu</Link>
          <Link to="/cocktails">Cocktail Menu</Link>
          <Link to="/wine-menu">Wine List</Link>
          <Link to="/dessert">Dessert Menu</Link>
        </div>
      </div>
      <Link to="/events" className={styles.navLink}>
        Events
      </Link>
      <Link to="/giftcertificate" className={styles.navLink}>
        Gift Certificates
      </Link>
      <Link to="/aboutus" className={styles.navLink}>
        About Us
      </Link>
      <div className={styles.dropdown}>
        <button className={styles.dropbtn}>Social Media</button>
        <div className={styles.dropdownContent}>
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
      <div className={styles.navRegister}>
        <Link to="/registration" className={styles.registerButton}>
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
