import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import DinnerMenu from "./components/Menu";
import WineMenu from "./components/WineMenu";
import GiftCertificate from "./components/GiftCertificate";
import AboutUs from "./components/AboutUs";
import Events from "./components/Events";
import "../src/styles/App.css";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Footer from "./components/Footer";

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
          <Route path="/wine-menu" element={<WineMenu />} />
          <Route path="/registration" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
