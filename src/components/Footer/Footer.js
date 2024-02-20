import React from "react";
import logo from "../assets/img/icon-1.png";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="up-side">
          <div className="logo-part">
            <a href="">
              <img src={logo} alt="" className="img-logo" />
            </a>
            <p>
              Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
              ipsum et lorem et sit, sed stet lorem sit clita. Diam dolor diam
              ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem
              et sit.
            </p>
          </div>
          <div className="newsletter">
            <h5>Newsletter</h5>
            <p>Clita erat ipsum et lorem et sit, sed stet lorem sit clita.</p>
            <form>
              <input
                type="text"
                name=""
                value=""
                placeholder="Your email"
                className="form-control"
              />
              <button type="submit" className="signUp">
                SignUp
              </button>
            </form>
          </div>
        </div>
        <div className="down-side">
          <div className="contact">
            <h5>Get In Touch</h5>
            <p>
              <i class="fa-solid fa-location-dot"></i>123 Street, New York, USA
            </p>
            <p>
              <i class="fa-solid fa-phone"></i>+012 345 67890
            </p>
            <p>
              <i class="fa-solid fa-envelope"></i>info@example.com
            </p>
          </div>
          <div className="services">
            <h5>Our Services</h5>

            <p>
              <i class="fa-solid fa-angle-right"></i>Currency Wallet
            </p>
            <p>
              <i class="fa-solid fa-angle-right"></i>Currency Transaction
            </p>
            <p>
              <i class="fa-solid fa-angle-right"></i>Bitcoin Investment
            </p>
            <p>
              <i class="fa-solid fa-angle-right"></i>Token Sale
            </p>
          </div>
          <div className="quick">
            <h5>Quick Links</h5>

            <p>
              <i class="fa-solid fa-angle-right"></i>About Us
            </p>
            <p>
              <i class="fa-solid fa-angle-right"></i>Contact Us
            </p>
            <p>
              <i class="fa-solid fa-angle-right"></i>Our Services
            </p>
            <p>
              <i class="fa-solid fa-angle-right"></i>Terms & Condition
            </p>
          </div>
          <div className="follow">
            <h5>Follow Us</h5>
            <div className="links">
              <p>
                <i class="fa-brands fa-facebook-f"></i>
              </p>
              <p>
                <i class="fa-brands fa-twitter"></i>
              </p>
              <p>
                <i class="fa-brands fa-linkedin-in"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
