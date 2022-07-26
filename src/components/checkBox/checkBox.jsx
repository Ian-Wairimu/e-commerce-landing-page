import React from 'react';
import "./CheckBox.css"

const CheckBox = () => {
    return (
        <>
            <div className="form">
                <form action="/">
                    <input type="checkbox" id="men" name="men" checked="checked"/>
                    <label for="men">MEN</label>
                    <input type="checkbox" id="women" name="women" checked/>
                    <label for="women">WOMEN</label>
                    <input type="checkbox" id="children" name="children" />
                    <label for="children">CHILDREN</label>
                </form>
                <button className="btn-product">SEE ALL PRODUCT</button>
            </div>
        </>
    );
}

export default CheckBox;