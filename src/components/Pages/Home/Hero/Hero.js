import React, { useEffect } from "react";
import "../Hero/Hero.css";
import image from "../../../assets/img/hero-1.png";


function Hero() {
  return (
    <div className="container">
      <div className="hero-header">
        <div className="right-side">
          <h1>
            Make Better Life With Trusted CryptoCoin
          </h1>
          <p>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <button
            type=""
            className="explore"
            
          >
            Explore More
          </button>
        </div>
        <div className="left-side">
          <img
            src={image}
            alt=""
            className="heroImage"
            
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
