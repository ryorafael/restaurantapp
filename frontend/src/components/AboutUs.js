import React from "react";
import "../styles/Aboutus.css";
import barbmano from "../assets/barbmano.webp";
import foodPresentation from "../assets/foodPresentation.webp";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About Us</h1>
      <div className="about-us-content">
        <div className="about-us-section">
          <img src={barbmano} alt="" className="about-us-image" />
          <p className="about-us-text">
            Established in 1996, when the River Market literally had tumbleweeds
            rolling down 5th Street, Le Fou Frog made its mark on Kansas City's
            cuisine scene. And Kansas City was ready for Owner/Executive Chef
            Mano Rafael's imaginative, yet classically influenced, French Food.
            Known for our generous portions, with sides included, Le Fou Frog
            will happily satiate you. (Just ask the many Chiefs players who
            frequent our establishment.)
          </p>
        </div>
        <div className="about-us-section">
          <p className="about-us-text">
            What about the atmosphere? You will feel like you've been
            transported to France and your servers will ensure that this is an
            experience you will never forget. Le Fou Frog is also renowned for
            our special events (Noel en Provence, Valentine's Day, Bastille Day,
            Boo Frog, and others) where Owner Barbara Rafael and our talented
            staff and friends blow you away with shows that cause many patrons
            to make reservations a year in advance.
          </p>
          <img src={foodPresentation} alt="" className="about-us-image" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
