import React, { Component } from "react";
import "../Hero/Hero.css";
import image from "../../../assets/img/hero-1.png";
import WOW from "wowjs";

class Hero extends Component {
  componentDidMount() {
    new WOW.WOW({
      live: false,
    }).init();
  }
  render() {
    return (
      <div className="container">
        <div className="hero-header">
          <div className="right-side">
            <h1 className="wow fadeInUp" data-wow-duration="2s">
              Make Better Life With Trusted CryptoCoin
            </h1>
            <p className="wow fadeInUp" data-wow-duration="2s">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>
            <button type="" className="explore fadeInUp" data-wow-duration="2s">
              Explore More
            </button>
          </div>
          <div className="left-side">
            <img src={image} alt="" className="heroImage" />
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
