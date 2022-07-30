import React from 'react';
import tShirt from "../images/tshirt_ladies.png"
import shoe from "../images/trekkingshoes.png"
import jacket from "../images/giacket.png"
import "./women.css"

const Women = () => {
    return (
        <>
            <div className="women-container">
                <div className="header">
                    <h1 className="h1-women">WOMEN</h1>
                </div>
                <div className="post-con-left">
                    <span className="click-span">1 / 5</span>
                    <div>
                    <span className="click-span">
                        ❮ ❯
                    </span>
                    </div>
                </div>
                <div className="women-clothing-con">
                    <div className="clothing">
                        <div className="women-size">
                            <h2 className="h-women-cloth">SIZE <span className="drop-arrow"> ❯
                            </span></h2>
                        </div>
                        <div className="ts-img">
                            <img src={jacket} alt="jacket" />
                        </div>
                        <div className="type">
                            <h2 className="h-women-cloth ts">GIACKET</h2>
                            <span className="price">
                                60, 00$
                            </span>
                        </div>
                    </div>
                    <div className="clothing">
                        <div className="women-size">
                            <h2 className="h-women-cloth">SIZE <span> ❯
                            </span></h2>
                        </div>
                        <div className="ts-img">
                            <img src={shoe} alt="trekking shoe" className="shoe" />
                        </div>
                        <div className="type">
                            <h2 className="h-women-cloth ts">TREKKING SHOES</h2>
                            <span className="price">
                                80, 00$
                            </span>
                        </div>
                    </div>
                    <div className="clothing">
                        <div className="women-size">
                            <h2 className="h-women-cloth">SIZE <span> ❯
                            </span></h2>
                            <div className="color-circle">
                                <div className="div-color bg-one"></div>
                                <div className="div-color bg-two"></div>
                            </div>
                        </div>
                        <div className="ts-img">
                            <img src={tShirt} alt="back-pack" />
                        </div>
                        <div className="type">
                            <h2 className="h-women-cloth ts">T-SHIRT</h2>
                            <span className="price">
                                20, 00$
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Women;