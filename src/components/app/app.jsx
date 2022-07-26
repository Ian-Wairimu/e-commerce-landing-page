import React from 'react';
import "./app.css"
import Header from "../header/header";
import CheckBox from "../checkBox/checkBox";
import About from "../about/about";
import Footer from "../footer/footer";

const App = () => {
    return (
        <>
            <Header />
            <CheckBox />
            <About />
            <Footer />
        </>
    )
}

export default App;