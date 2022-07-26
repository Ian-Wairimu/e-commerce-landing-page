import React from "react";
import "./footer.css";
import google from "../images/g_plus.png"
import facebook from "../images/facebook.png"
import youtube from "../images/you_tube.png"
import stumble from "../images/stumble_upon.png"
import skype from "../images/skype.png"
import flickr from "../images/flickr.png"
import twitter from "../images/twitter.png"
import pinterest from "../images/pinterest.png"
const Footer = () => {
  return (
      <>
          <footer className="footer">
              <section className="about-yolo">
                  <h2 className="footer-h2">YOLOMY</h2>
                  <p className="footer-p">WE ARE YOLOMY - WE UNDERSTAND <br/> FASHION AND STYLE. WE CRAFT OUR <br /> PRODUCTS WITH LOVE AND DILIGENCE</p>
              </section>
              <section className="social">
                  <h2 className="footer-h2">We are social</h2>
                  <span className="footer-logo">
                      <img className="footer-img" src={google} alt="logos"/>
                      <img className="footer-img" src={facebook} alt="logos"/>
                      <img className="footer-img" src={youtube} alt="logos"/>
                      <img className="footer-img" src={stumble} alt="logos"/>
                  </span>
                  <span className="footer-logo two ">
                      <img className="footer-img" src={skype} alt="logos"/>
                      <img className="footer-img" src={flickr} alt="logos"/>
                      <img className="footer-img" src={twitter} alt="logos"/>
                      <img className="footer-img" src={pinterest} alt="logos"/>
                  </span>
                  <a className="footer-a">COPYRIGHT 2015. YOLOMY INC</a>
              </section>
              <section className="footer-nav">
                  <ul className="footer-ul">
                      <li className="footer-li">CREDITS</li>
                      <li className="footer-li">PRIVACY</li>
                      <li className="footer-li">ABOUT</li>
                      <li className="footer-li">CONTACT</li>
                  </ul>
                  <h2 className="footer-h2">Yolomy: We Mean Fashion</h2>
              </section>
          </footer>
      </>
  );
}

export default Footer;