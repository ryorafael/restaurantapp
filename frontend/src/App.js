import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import DinnerMenu from "./components/Menu";
import GiftCertificate from "./components/GiftCertificate";
import AboutUs from "./components/AboutUs";
import Events from "./components/Events";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/menu">Dinner Menu</Link>
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
