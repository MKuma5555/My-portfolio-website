import React from "react";
import { Icon } from '@iconify/react';




const FooterPage = () =>{
    return (
        <>
            
        <footer id="footer">
            <div className="container">
            <h3>Misa </h3>
            <div className="social-links">
                <a href="https://github.com/MKuma5555" className="github"><Icon icon="bx:bxl-github"  width="1.2em" height="1.2em"/></a>
                <a href="#" className="instagram"><Icon icon="bi:instagram" width="1.2em" height="1.2em" /></a>
                <a href="https://www.linkedin.com/in/misa-k-609305205/" className="linkedin"><Icon icon="bi:linkedin" width="1.2em" height="1.2em" /></a>
            </div>
            </div>
        </footer>
        </>
    )
}

export default FooterPage;