import React from 'react';
import "./about.css";
import Logo from '../images/twitter_bird.png'
const About = () => {
    return (
        <>
            <div className="about-container">
                <div className="about-content">
                    <h1 className="about-h1">ABOUT US</h1>
                    <p className="about-p">This is where fashion is designed and crafted from the heart by an amazing team of craftsmen and designers who understand what fashion is</p>
                </div>
            </div>
            <section className="section">
                <span className="section-logo">
                    <img src={Logo} alt="twitter logo" />
                </span>
                <p className="section-p">
                    "SALE: Buy anything for 45% off. Use the promo CODE YOLOMY45 when you buy items"
                </p>
            </section>
        </>
    );
}

export default About;