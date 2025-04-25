import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import DinnerMenu from "./components/Menu";
import WineMenu from "./components/WineMenu";
import Dessert from "./components/Dessert";
import Cocktails from "./components/Cocktails";
import GiftCertificate from "./components/GiftCertificate";
import AboutUs from "./components/AboutUs";
import "../src/styles/App.css";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import Admin from "./components/Admin";
import MyReservations from "./components/MyReservations";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<DinnerMenu />} />
          <Route path="/cocktails" element={<Cocktails />} />
          <Route path="/dessert" element={<Dessert />} />
          <Route path="/giftcertificate" element={<GiftCertificate />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/wine-menu" element={<WineMenu />} />
          <Route path="/registration" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/my-reservations" element={<MyReservations />} />

          {/* Admin route protected with PrivateRoute */}
          <Route path="/admin" element={<PrivateRoute element={Admin} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
