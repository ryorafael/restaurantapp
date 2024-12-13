import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [top, setTop] = useState(0);
  const [isLaCarteOpen, setIsLaCarteOpen] = useState(false); // La Carte dropdown state
  const [isSocialMediaOpen, setIsSocialMediaOpen] = useState(false); // Social Media dropdown state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // For mobile menu

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setTop(prevScrollpos > currentScrollPos ? 0 : -80);
      setPrevScrollpos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollpos]);

  // Toggle La Carte dropdown
  const toggleLaCarteDropdown = () => {
    setIsLaCarteOpen((prevState) => !prevState);
    // Close the Social Media dropdown if it's open
    if (isSocialMediaOpen) setIsSocialMediaOpen(false);
  };

  // Toggle Social Media dropdown
  const toggleSocialMediaDropdown = () => {
    setIsSocialMediaOpen((prevState) => !prevState);
    // Close the La Carte dropdown if it's open
    if (isLaCarteOpen) setIsLaCarteOpen(false);
  };

  // Toggle Mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <header role="banner">
      <nav
        role="navigation"
        className={styles.navbar}
        style={{ top: `${top}px` }}
      >
        {/* Mobile Hamburger Menu */}
        <div className={styles.mobileMenu}>
          <button
            className={styles.hamburgerButton}
            aria-expanded={isMobileMenuOpen ? "true" : "false"}
            aria-controls="mobile-menu"
            onClick={toggleMobileMenu}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
            Menu
          </button>

          {/* Mobile Menu Links */}
          {isMobileMenuOpen && (
            <ul id="mobile-menu" className={styles.dropdownContent}>
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
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/giftcertificate">Gift Certificates</Link>
              </li>
            </ul>
          )}
        </div>

        {/* Desktop Navigation Links */}
        <ul className={styles.flexContainer}>
          <li className={styles.flexItem}>
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
          </li>

          {/* La Carte Dropdown (Desktop) */}
          <li className={`${styles.flexItem} ${styles.dropdown}`}>
            <button
              className={styles.dropbtn}
              aria-expanded={isLaCarteOpen ? "true" : "false"}
              onClick={toggleLaCarteDropdown}
            >
              La Carte
            </button>
            {isLaCarteOpen && (
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
            )}
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

          {/* Social Media Dropdown (Desktop) */}
          <li className={`${styles.flexItem} ${styles.dropdown}`}>
            <button
              className={styles.dropbtn}
              aria-expanded={isSocialMediaOpen ? "true" : "false"}
              onClick={toggleSocialMediaDropdown}
            >
              Social Media
            </button>
            {isSocialMediaOpen && (
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
            )}
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
