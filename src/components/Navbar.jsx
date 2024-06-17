import React from "react";
import { Icon } from '@iconify/react';
// import ReactDOM from "react-dom/client";
// import {Routes, Route, NavLink } from "react-router-dom";
// import Aboutme from "./components/Aboutme";
// import ContactPage from "./components/ContactPage";
// import Introduction from "./components/Introduction";
// import PortfolioPage from "./components/PortfoiloPage";
// import Skillpage from "./components/Skillpage";
// import HomePage from "./HomePage";




const NavbarPage = () =>{
    return (
        <>
        <i className="bi bi-list mobile-nav-toggle d-lg-none"></i>
        <header id="header" className="d-flex flex-column justify-content-center">
            <nav id="navbar" className="navbar nav-menu">
                <ul>

                    <li><a href="#hero" className="nav-link scrollto active"><Icon icon="bx:home"  width={48} height={48}/><span>Home</span></a></li>
                    <li><a href="#about" className="nav-link scrollto"><Icon icon="bx:bx-user" width="48" height="48" /><span>About</span></a></li>
                    <li><a href="#skills" className="nav-link scrollto"><Icon icon="icon-park-twotone:database-code" width="48" height="48" /><span>Skills</span></a></li>
                    <li><a href="#portfolio" className="nav-link scrollto"><Icon icon="bx:bx-book-content" width="48" height="48" /> <span>Portfolio</span></a></li>
                    <li><a href="#contact" className="nav-link scrollto"><Icon icon="bx:bx-envelope" width="48" height="48" /><span>Contact</span></a></li>
                </ul>
    
            </nav>
    
        </header>

        </>
    )
}

export default NavbarPage;




                 {/* <Routes>
                        <Route path="/" element={<Aboutme />} className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></Route>
                    </Routes> */}