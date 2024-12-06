import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [top, setTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setTop(prevScrollpos > currentScrollPos ? 0 : -80);
      setPrevScrollpos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollpos]);

  return (
    <header role="banner">
      <nav className={styles.navbar} style={{ top: `${top}px` }}>
        <ul className={styles.flexContainer}>
          <li className={styles.flexItem}>
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li className={`${styles.flexItem} ${styles.dropdown}`}>
            <button className={styles.dropbtn}>La Carte</button>
            <ul className={styles.dropdownContent}>
              <li>
                <Link to="/menu">Dinner Menu</Link>
              </li>
              <li>
                <Link to="/cocktails">Cocktail Menu</Link>
              </li>
              <li>
                <Link to="/wine-menu">Wine List</Link>
              </li>
              <li>
                <Link to="/dessert">Dessert Menu</Link>
              </li>
            </ul>
          </li>
          <li className={styles.flexItem}>
            <Link to="/events" className={styles.navLink}>
              Events
            </Link>
          </li>
          <li className={styles.flexItem}>
            <Link to="/giftcertificate" className={styles.navLink}>
              Gift Certificates
            </Link>
          </li>
          <li className={styles.flexItem}>
            <Link to="/aboutus" className={styles.navLink}>
              About Us
            </Link>
          </li>
          <li className={`${styles.flexItem} ${styles.dropdown}`}>
            <button className={styles.dropbtn}>Social Media</button>
            <ul className={styles.dropdownContent}>
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </li>
          <li className={styles.flexItem}>
            <Link to="/registration" className={styles.registerButton}>
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
