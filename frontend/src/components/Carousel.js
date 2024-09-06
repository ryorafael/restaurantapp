import React from "react";
import wagyu from "../assets/wagyu1.png";
import steak from "../assets/steakaupoivrenew.webp";
import profiteroles from "../assets/profiteroles1.png";
import escargot from "../assets/escargot2.png";
import poisson from "../assets/poisson.png";

const Carousel = () => {
  return (
    <div className="slider">
      <div className="slide-track">
        <div className="slide">
          <img src={wagyu} alt="wagyu" />
        </div>
        <div className="slide">
          <img src={steak} alt="steak" />
        </div>
        <div className="slide">
          <img src={profiteroles} alt="profiteroles" />
        </div>
        <div className="slide">
          <img src={escargot} alt="escargot" />
        </div>
        <div className="slide">
          <img src={poisson} alt="poisson" />
        </div>
        <div className="slide">
          <img src={wagyu} alt="wagyu" />
        </div>
        <div className="slide">
          <img src={steak} alt="steak" />
        </div>
        <div className="slide">
          <img src={profiteroles} alt="profiteroles" />
        </div>
        <div className="slide">
          <img src={escargot} alt="escargot" />
        </div>
        <div className="slide">
          <img src={poisson} alt="poisson" />
        </div>
        <div className="slide">
          <img src={wagyu} alt="wagyu" />
        </div>
        <div className="slide">
          <img src={steak} alt="steak" />
        </div>
        <div className="slide">
          <img src={profiteroles} alt="profiteroles" />
        </div>
        <div className="slide">
          <img src={escargot} alt="escargot" />
        </div>
        <div className="slide">
          <img src={poisson} alt="poisson" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
