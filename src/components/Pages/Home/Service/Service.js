import React, { Component } from "react";
import "../Service/Service.css";
import firstImg from "../../../assets/img/icon-7.png";
import secondImg from "../../../assets/img/icon-3.png";
import thirdImg from "../../../assets/img/icon-9.png";
import fourthImg from "../../../assets/img/icon-5.png";
import fifthImg from "../../../assets/img/icon-2.png";
import sixImg from "../../../assets/img/icon-8.png";

function Service(){
 
    return (
      <div>
        <div className="service">
          <div className="heading">
            <h1>Services</h1>
            <p>Buy, Sell And Exchange Cryptocurrency</p>
          </div>
          <div className="card">
            <div className="start">
              <img src={firstImg} className="img-icon" />
              <h5>Easy To Start</h5>
              <p>
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo
              </p>
              <a href="">
                Read more <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div className="start">
              <img src={secondImg} className="img-icon" />
              <h5>Currency Transaction</h5>
              <p>
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo
              </p>
              <a href="">
                Read more <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div className="start">
              <img src={thirdImg} className="img-icon" />
              <h5>Bitcoin Investment</h5>
              <p>
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo
              </p>
              <a href="">
                Read more <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div className="start">
              <img src={fourthImg} className="img-icon" />
              <h5>Currency Exchange</h5>
              <p>
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo
              </p>
              <a href="">
                Read more <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div className="start">
              <img src={fifthImg} className="img-icon" />
              <h5>Bitcoin Escrow</h5>
              <p>
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo
              </p>
              <a href="">
                Read more <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div className="start">
              <img src={sixImg} className="img-icon" />
              <h5>Token Sale</h5>
              <p>
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo
              </p>
              <a href="">
                Read more <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  
}

export default Service;
