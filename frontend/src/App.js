import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import DinnerMenu from "./components/Menu";
import GiftCertificate from "./components/GiftCertificate";
import AboutUs from "./components/AboutUs";
import Events from "./components/Events";
import "../src/styles/index.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
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
