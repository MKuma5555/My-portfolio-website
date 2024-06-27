import React, {useEffect} from "react";
import { Icon } from '@iconify/react';
import Typed from "typed.js";
import { Button } from 'react-bootstrap';

const Introduction = () =>{

    useEffect(() => {
        const typed = new Typed('.typed',{
            strings: ["Software Engineer", "Developer", "Freelancer", "Challenger"],
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000,
            loop: true
        });

        return () => {
            typed.destroy();
        }
    },[]);




    return (
        <>
         <section id="hero" className="d-flex flex-column justify-content-center">
            <div className="container" data-aos="zoom-in" data-aos-delay="100" >
            <h1>Misa Kumagai</h1>
            <p>I'm a <span className="typed"></span></p>
            <div className="social-links">
                <a href="https://github.com/MKuma5555" className="github"><Icon icon="bx:bxl-github"  width="35" height="35"/></a>
                <a href="#contact" className="contact"><Icon icon="bx:bxs-chat" width="1.2em" height="1.2em" /></a>
                <a href="https://www.linkedin.com/in/misa-k-609305205/" className="linkedin"><Icon icon="bi:linkedin" width="1.2em" height="1.2em" /></a>
                <br/>
                <a href="#portfolio" className="hero-portfolio-btn"> <button className="hero-portfolio-btn" >Portfolio check</button></a>

            </div>
            </div>
        </section>

        </>
    )
}

export default Introduction;

