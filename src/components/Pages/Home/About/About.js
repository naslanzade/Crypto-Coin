import React, { Component } from "react";
import image from "../../../assets/img/about.png";
import "../About/About.css";
import WOW from "wowjs";

class About extends Component {
  componentDidMount() {
    new WOW.WOW({
      live: false,
    }).init();
  }
  render() {
    return (
      <div>
        <div className="aboutUs">
          <div className="right-side">
            <img src={image} alt="" className="aboutImage" />
          </div>
          <div className="left-side">
            <h1>About Us</h1>
            <p className="heading">The Most Trusted Cryptocurrency Platform</p>
            <p>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>
            <p>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>
            <ul>
              <li>
                <i class="fa-solid fa-check"></i>Tempor erat elitr rebum at
                clita
              </li>
              <li>
                <i class="fa-solid fa-check"></i>Tempor erat elitr rebum at
                clita
              </li>
              <li>
                <i class="fa-solid fa-check"></i>Tempor erat elitr rebum at
                clita
              </li>
            </ul>
            <button type="" className="read fadeInUp" data-wow-duration="2s">
              Read More
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
