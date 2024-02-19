import React, { Component } from "react";
import "../Why/Why.css";
import WOW from "wowjs";
import firstImg from "../../../assets/img/icon-7.png";
import secondImg from "../../../assets/img/icon-6.png";
import thirdImg from "../../../assets/img/icon-5.png";
import fourthImg from "../../../assets/img/icon-4.png";
import fifthImg from "../../../assets/img/icon-3.png";
import sixImg from "../../../assets/img/icon-8.png";

class Why extends Component {
  componentDidMount() {
    new WOW.WOW({
      live: false,
    }).init();
  }
  render() {
    return (
      <div>
        <div className="whyUs">
          <div className="heading">
            <h1>Why Us!</h1>
            <p>The Best In The crypto Industry</p>
          </div>
          <div className="card">
            <div className="start">
              <img src={firstImg} className="img-icon" />
              <div className="text-part">
                <h5>Easy To Start</h5>
                <span>
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo
                </span>
              </div>
            </div>
            <div className="start">
              <img src={secondImg} className="img-icon" />
              <div className="text-part">
                <h5>Safe & Secure</h5>
                <span>
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo
                </span>
              </div>
            </div>
            <div className="start">
              <img src={thirdImg} className="img-icon" />
              <div className="text-part">
                <h5>Affordable Plans</h5>
                <span>
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo
                </span>
              </div>
            </div>
            <div className="start">
              <img src={fourthImg} className="img-icon" />
              <div className="text-part">
                <h5>Secure Storage</h5>
                <span>
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo
                </span>
              </div>
            </div>
            <div className="start">
              <img src={fifthImg} className="img-icon" />
              <div className="text-part">
                <h5>Protected By Insurance</h5>
                <span>
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo
                </span>
              </div>
            </div>
            <div className="start">
              <img src={sixImg} className="img-icon" />
              <div className="text-part">
                <h5>24/7 Support</h5>
                <span>
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Why;
