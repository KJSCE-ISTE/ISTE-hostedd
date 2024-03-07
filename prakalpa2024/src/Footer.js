// Footer.js

import React from "react";
import "./Footer.css";
import Istelogo from "./assets/Iste.png";
import FacebookIcon from "./assets/linkedin.png"; // Add correct path
import InstagramIcon from "./assets/ig-removebg-preview.png"; // Add correct path
import MailIcon from "./assets/mail.png"; // Add correct path
import SomaiyaLogo from "./assets/somaiya.jpg"; // Add correct path

function Footer() {
  return (
    <section id="contact">
      <footer className="footer">
        <div className="footer-left">
          <img
            src={Istelogo}
            alt="iste_logo"
            width="60"
            height="60"
            id="footer-logo"
          />
          <h3>
            ISTE<span>&nbsp;KJSCE</span>
          </h3>
          <p className="footer-links">
            <a href="../index.html" className="link-1">
              Home
            </a>
            <a href="our-story.html">Our Story</a>
            <a href="team.html">Team</a>
            <a href="gallery.html">Gallery</a>
            <a href="../index.html">Contact Us</a>
          </p>
        </div>
        <div className="footer-center">
          <img src={SomaiyaLogo} alt="somaiya_logo" width="100" height="50" />
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <a href="https://goo.gl/maps/RuN1KRaGL986kGSy8" target="_blank"  rel="noreferrer">
                K. J. Somaiya College of Engineering, VidyaVihar
              </a>
            </p>
          </div>
          <div>
            <i className="fa fa-phone-alt"></i>
            <p>
              <a id="hrefcontact" href="tel:8369115810">
                Varad Brid : 8369115810
              </a>
            </p>
            <i className="fa fa-phone-alt"></i>
            <p>
              <a id="hrefcontact" href="tel:9324633061">
                Presha Monga : 9324633061
              </a>
            </p>
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-social-about">
            <span>Follow Us</span>
          </p>
          <div className="footer-icons">
            <a
              href="https://www.facebook.com/counciliste/?ref=br_rs"
              target="_blank"  rel="noreferrer"
            >
              <img
                src={FacebookIcon}
                alt="Facebook"
                className="icon"
                width="40"
                height="40"
              />
            </a>
            <a
              href="https://www.instagram.com/istekjsce/?hl=en"
              target="_blank"  rel="noreferrer"
            >
              <img
                src={InstagramIcon}
                alt="Instagram"
                className="icon"
                width="40"
                height="40"
              />
            </a>
            <a href="mailto:iste.engg@somaiya.edu" target="_blank"  rel="noreferrer">
              <img
                src={MailIcon}
                alt="Mail"
                className="icon"
                width="40"
                height="40"
              />
            </a>
          </div>
        </div>
        <p className="footer-designed-by">Designed by ISTE KJSCE</p>
      </footer>
    </section>
  );
}

export default Footer;
