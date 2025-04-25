import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import { FrogPrince } from "./icons/FrogPrince";

const Navbar = () => {
  const [isLaCarteOpen, setIsLaCarteOpen] = useState(false);
  const [isSocialMediaOpen, setIsSocialMediaOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const modalRef = useRef(null);
  const hamburgerButtonRef = useRef(null);

  // Mobile menu: Escape & focus trap
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }

      if (e.key === "Tab" && isMobileMenuOpen && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex="0"]'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
      setTimeout(() => {
        modalRef.current
          ?.querySelector('a[href], button:not([disabled]), [tabindex="0"]')
          ?.focus();
      }, 0);
    } else {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
      hamburgerButtonRef.current?.focus();
    }

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  // ESC closes desktop dropdowns
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsLaCarteOpen(false);
        setIsSocialMediaOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleLaCarteDropdown = () => {
    setIsLaCarteOpen((prev) => !prev);
    if (isSocialMediaOpen) setIsSocialMediaOpen(false);
  };

  const toggleSocialMediaDropdown = () => {
    setIsSocialMediaOpen((prev) => !prev);
    if (isLaCarteOpen) setIsLaCarteOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header role="banner">
      <nav role="navigation" className={styles.navbar}>
        {/* Mobile Hamburger Menu */}
        <div className={styles.mobileMenu}>
          <button
            ref={hamburgerButtonRef}
            className={styles.hamburgerButton}
            aria-expanded={isMobileMenuOpen ? "true" : "false"}
            aria-controls="mobile-menu"
            onClick={toggleMobileMenu}
          >
            <FrogPrince />
            <span className="sr-only">Menu</span>
          </button>

          {isMobileMenuOpen && (
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="mobileMenuLabel"
              className={styles.modalOverlay}
              ref={modalRef}
            >
              <div className={styles.sideDrawer}>
                <button
                  onClick={toggleMobileMenu}
                  aria-label="Close menu"
                  className={styles.closeButton}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      fill="currentColor"
                      d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7a1 1 0 1 0-1.41 1.42L10.59 12l-4.89 4.88a1 1 0 0 0 1.41 1.42L12 13.41l4.88 4.89a1 1 0 0 0 1.42-1.41L13.41 12l4.89-4.88a1 1 0 0 0 0-1.41Z"
                    />
                  </svg>
                  <span className="sr-only">Close menu</span>
                </button>

                <h2 id="mobileMenuLabel" className="sr-only">
                  Mobile navigation menu
                </h2>
                <ul id="mobile-menu">
                  <li>
                    <Link to="/" onClick={toggleMobileMenu}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/menu" onClick={toggleMobileMenu}>
                      Dinner Menu
                    </Link>
                  </li>
                  <li>
                    <Link to="/cocktails" onClick={toggleMobileMenu}>
                      Cocktail Menu
                    </Link>
                  </li>
                  <li>
                    <Link to="/wine-menu" onClick={toggleMobileMenu}>
                      Wine List
                    </Link>
                  </li>
                  <li>
                    <Link to="/dessert" onClick={toggleMobileMenu}>
                      Dessert Menu
                    </Link>
                  </li>
                  <li>
                    <Link to="/aboutus" onClick={toggleMobileMenu}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/giftcertificate" onClick={toggleMobileMenu}>
                      Gift Certificates
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Desktop Navigation Links */}
        <ul className={styles.flexContainer} aria-hidden={isMobileMenuOpen}>
          <li className={styles.flexItem}>
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
          </li>

          <li
            className={`${styles.flexItem} ${styles.dropdown}`}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) {
                setIsLaCarteOpen(false);
              }
            }}
          >
            <button
              className={styles.dropbtn}
              aria-haspopup="true"
              aria-controls="laCarteDropdown"
              aria-expanded={isLaCarteOpen ? "true" : "false"}
              onClick={toggleLaCarteDropdown}
            >
              La Carte
            </button>
            {isLaCarteOpen && (
              <ul
                className={styles.dropdownContent}
                id="laCarteDropdown"
                role="menu"
              >
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
            <Link to="/giftcertificate" className={styles.navLink}>
              Gift Certificates
            </Link>
          </li>

          <li className={styles.flexItem}>
            <Link to="/aboutus" className={styles.navLink}>
              About Us
            </Link>
          </li>

          <li
            className={`${styles.flexItem} ${styles.dropdown}`}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) {
                setIsSocialMediaOpen(false);
              }
            }}
          >
            <button
              className={styles.dropbtn}
              aria-haspopup="true"
              aria-controls="socialMediaDropdown"
              aria-expanded={isSocialMediaOpen ? "true" : "false"}
              onClick={toggleSocialMediaDropdown}
            >
              Social Media
            </button>
            {isSocialMediaOpen && (
              <ul
                className={styles.dropdownContent}
                id="socialMediaDropdown"
                role="menu"
              >
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
