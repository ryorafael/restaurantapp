import React, { useState, useEffect } from "react";
import wagyu from "../assets/wagyu1.png";
import steak from "../assets/steakaupoivrenew.webp";
import profiteroles from "../assets/profiteroles1.png";
import escargot from "../assets/escargot2.png";
import poisson from "../assets/poisson.png";

const Carousel = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  // Function to toggle play/pause
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const slideTrack = document.querySelector(".slide-track");
    if (slideTrack) {
      slideTrack.style.animationPlayState = isPlaying ? "running" : "paused";
    }
  }, [isPlaying]);

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
      <button
        className="play-pause-button"
        onClick={togglePlayPause}
        aria-label={isPlaying ? "Pause the carousel" : "Play the carousel"}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default Carousel;
