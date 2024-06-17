import React from "react";


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
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p  style={{color:"#272829"}}>Melbourne Australia</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Message Me:</h4>
                <p><a href="https://www.linkedin.com/in/misa-k-609305205/" style={{color:"#272829", textDecoration:"underline",}}>Connect via Linkedin</a></p>
              </div>
            </div>

          </div>
    </section>
        </>
    )
}

export default ContactPage;