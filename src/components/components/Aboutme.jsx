import React from "react";
import Myphoto from "../../assets/img/misa2.jpeg"


const Aboutme = () =>{
    return (
        <>

    <section id="about" className="about" >
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>About</h2>
          <h3>Hi I am Misa. I'm a junior full stack engineer </h3>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <img src={Myphoto} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Full stack engineer  &amp; Web Developer.</h3>
            <p className="fst-italic">
         
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li style={{background: "#fbe0e0"}}><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                  <li style={{background: "#e5d4ef"}}><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <a href="https://mkuma5555.github.io/my-profile/profile.html"><span>Misa kumagai web link </span></a></li>
                  <li style={{background: "#d6e6ff"}}><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Melbourne </span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li style={{background: "#d6e6ff"}}><i className="bi bi-chevron-right"></i> <strong>Hobbie:</strong> <span>Flower arrangment</span></li>
                  <li style={{background: "#fbe0e0"}}><i className="bi bi-chevron-right"></i> <strong>Fun fact</strong> <span>I love soysource & my dog name is "Sossy"</span></li>
                  <li style={{background: "#e5d4ef"}}><i className="bi bi-chevron-right"></i> <strong>Motto</strong> <span>Write "failure" and read "growth".</span></li>
                </ul>
              </div>
            </div>
            <br/>
            <p>
            I am aspiring software engineer with a unique journey from dentistry to full-stack development. I recently completed the Full Stack Engineer course at General Assembly, where I mastered HTML, CSS, JavaScript, and Python. I've built projects like a travel planning web app with OpenAI and a diet app using Google Maps, showcasing my skills in React, PostgreSQL, and MongoDB.
            My career began in Japan as a dental hygienist and later as a CAD/CAM dental technician in Australia. During the lockdown, I discovered my passion for coding by creating a personal blog site with WordPress. This sparked my desire to pursue a career in software engineering.
            Outside of coding, I stay active in the tech community through online forums and meetups, participate in coding challenges, and balance my day with gym workouts. I also enjoy arranging wedding flowers, a creative hobby from my time as a florist in Melbourne.
            I'm eager to contribute my skills and enthusiasm to a dynamic team. Let’s connect and explore how I can help build innovative solutions as a software engineer!
            </p>
          </div>
        </div>

      </div>
    </section>
        </>
    )
}

export default Aboutme;