import React from "react";

import { Icon } from "@iconify/react";


const ContactPage = () =>{
    return (
        <>

      <section id="contact" className="contact" style={{background:"#eaeaea"}}>
      <div className="container" data-aos="fade-up">

        <div className="section-title" >
          <h2>Contact</h2>
        </div>
            <div className="info" style={{background:"#eaeaea"}}>
              <div className="address">
                <i><Icon icon="bi:geo-alt" /></i>
                <h4>Location:</h4>
                <p  style={{color:"#272829"}}>Melbourne Australia</p>
                
              </div>

              <div className="email">
                <i ><Icon icon="bi:envelope-fill" /></i>
                <h4>Message Me:</h4>
                <p><button onClick={() => window.location = 'mailto:misakumagai.se@gmail.com'}>Contact Me</button></p>
              </div>
            </div>

          </div>
    </section>
        </>
    )
}

export default ContactPage;