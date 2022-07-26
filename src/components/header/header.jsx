import React from 'react';
import Nav from "../navigation/nav";
import Style from "./header.module.css"
import Click from "../images/mouse_click.png"

const Header = () => {
    return (
        <>
            <div className={Style.header}>
                <Nav />
                <div className={Style.content}>
                    <h1 className={Style.h1}>Our clothing, your comfort</h1>
                    <p className={Style.p}>we understand that you need to look good and feel great. <br/> it all starts with what you are wearing.</p>
                </div>
                <span className={Style.click}>
                    <img src={Click} alt="mouse click" />
                </span>
            </div>
        </>
    );
}

export default Header;