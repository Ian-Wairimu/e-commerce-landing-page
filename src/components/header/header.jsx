import React from 'react';
import Nav from "../navigation/nav";
import "./header.css"
import "../app/app.css";
import Click from "../images/mouse_click.png"
import CheckBox from "../checkBox/checkBox";
import Men from "../main/men";
import Women from "../main/women";

const Header = () => {
    return (
        <>
            <div className="header">
                <Nav />
                <div className="content">
                    <h1 className="h1-head">Our clothing, your comfort</h1>
                    <p className="p-head">we understand that you need to look good and feel great. <br/> it all starts with what you are wearing.</p>
                </div>
                <span className="click">
                    <img src={Click} alt="mouse click" />
                </span>
            </div>
            <CheckBox />
            <Men />
            <Women />
        </>
    );
}

export default Header;