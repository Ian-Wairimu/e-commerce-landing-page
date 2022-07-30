import React from 'react';
import "./app.css"
import Header from "../header/header";
import CheckBox from "../checkBox/checkBox";
import About from "../about/about";
import Footer from "../footer/footer";
import Men from "../main/men";
import Women from "../main/women"

const App = () => {
    return (
        <>
            <Header />
            <CheckBox />
            <Men />
            <Women />
            <About />
            <Footer />
        </>
    )
}

export default App;