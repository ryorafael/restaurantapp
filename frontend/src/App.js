import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import DinnerMenu from "./components/Menu";
import GiftCertificate from "./components/GiftCertificate";
import AboutUs from "./components/AboutUs";
import Events from "./components/Events";
import "../src/styles/index.css";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <div className="dropdown">
            <button className="dropbtn">La Carte</button>
            <div className="dropdown-content">
              <Link to="/menu">Dinner Menu</Link>
              <Link to="/cocktail">Cocktail Menu</Link>
              <Link to="/wine">Wine List</Link>
              <Link to="/dessert">Dessert Menu</Link>
            </div>
          </div>
          <Link to="events">Events</Link>
          <Link to="giftcertificate">Gift Certificates</Link>
          <Link to="aboutus">About Us</Link>
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

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<DinnerMenu />} />
          <Route path="/giftcertificate" element={<GiftCertificate />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
