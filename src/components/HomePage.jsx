import React from "react";
import FooterPage from "./components/FooterPage";
import Aboutme from "./components/Aboutme";
import ContactPage from "./components/ContactPage";
import Introduction from "./components/Introduction";
import PortfolioPage from "./components/PortfoiloPage";
import Skillpage from "./components/Skillpage";


const HomePage = () => {
    return (
        <>
            <Introduction />
            <Aboutme />
            <Skillpage />
            <PortfolioPage />
            <ContactPage />
            <FooterPage />
        </>
    )
}

export default HomePage;