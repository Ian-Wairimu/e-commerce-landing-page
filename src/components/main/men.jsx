import React from 'react';
import tShirt from "../images/tshirt.png"
import pants from "../images/pants.png"
import backPack from "../images/backpack.png"
import dropImg from "../images/angle-right-solid.svg"
import "./men.css"

const Men = () => {
    return (
        <>
            <div className="men-container">
                <div className="header-men">
                <h1 className="h1-men">MEN</h1>
                </div>
                <div className="post-con">
                    <span className="click-span">1 / 5</span>
                    <div>
                    <span className="click-span">
                        ❮ ❯
                    </span>
                    </div>
                </div>
                <div className="men-clothing-con">
                    <div className="men-clothing one">
                        <div className="men-size">
                            <h2 className="h-men-cloth">SIZE
                                <img src={dropImg} alt="angle drop" className="img-drop" />
                            </h2>
                            <div className="color-circle">
                                <div className="div-color-p bg-one"></div>
                                <div className="div-color-p bg-two"></div>
                                <div className="div-color-p bg-three"></div>
                            </div>
                        </div>
                        <div className="ts-img">
                            <img src={tShirt} alt="tShirt" />
                        </div>
                        <div className="type">
                            <h2 className="h-men-cloth ts">T-SHIRT</h2>
                            <span className="price">
                                5, 00$
                            </span>
                        </div>
                    </div>
                    <div className="men-clothing">
                        <div className="men-size">
                            <h2 className="h-men-cloth">SIZE
                                <img src={dropImg} alt="angle drop" className="img-drop" />
                            </h2>
                        </div>
                        <div className="ts-img">
                            <img src={pants} alt="pants" />
                        </div>
                        <div className="type">
                            <h2 className="h-men-cloth ts">PANTS FORCLAZ</h2>
                            <span className="price">
                                30, 00$
                            </span>
                        </div>
                    </div>
                    <div className="men-clothing">
                        <div className="men-size">
                            <h2 className="h-men-cloth">SIZE
                                <img src={dropImg} alt="angle drop" className="img-drop" />
                            </h2>
                        </div>
                        <div className="ts-img">
                            <img src={backPack} alt="back-pack" />
                        </div>
                        <div className="type">
                            <h2 className="h-men-cloth ts">BACKPACK</h2>
                            <span className="price">
                                60, 00$
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Men;