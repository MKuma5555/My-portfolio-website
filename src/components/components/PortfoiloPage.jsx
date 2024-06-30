import React,{ useEffect,useState}from "react";
import { Icon } from "@iconify/react";
import AOS from "aos";
import "aos/dist/aos.css";
import PortfolioDetails from "./PortfolioDetails";
import Popup from 'reactjs-popup';
import portfolioData from './projectData.js'



const PortfolioPage = () =>{

  useEffect(() => {
    AOS.init(); 
  }, []);



  const [activeCategory,setActiveCategory] = useState("All")
  const handleCategoryFilter = (prop) => {
    setActiveCategory(prop)
  }


  const filteredPortfolio = activeCategory === "All"
    ? portfolioData
    : portfolioData.filter(item => item.category === activeCategory);



  return (

  <section id="portfolio" className="portfolio section-bg">
      <div className="container" data-aos="fade-up">

      <div className="section-title">
        <h2>Portfolio</h2>
      </div>

      <div className="row">
        <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
          <ul id="portfolio-flters">
            <li className={activeCategory === "All" ? "filter-active" : ""} 
              onClick={() => handleCategoryFilter("All")}>All</li>
            <li className={activeCategory === "Full stack" ? "filter-active" : ""}
              onClick={() => handleCategoryFilter("Full stack")}>Full stack</li>
            <li className={activeCategory === "Game" ? "filter-active" : ""}
              onClick={() =>handleCategoryFilter("Game")}>Game</li>
            <li className={activeCategory === "Web" ? "filter-active" : ""} 
              onClick={() => handleCategoryFilter("Web")}>Web</li>
          </ul>
        </div>
      </div>


      <div className="row portfolio-container"  data-aos="fade-up" data-aos-delay="200" >
        {filteredPortfolio.map((item,index) => (
          <div key={index} className={`col-lg-4 col-md-6 portfolio-item filter-${item.category}`} >
            <div className="portfolio-wrap">
              <img src={item.projectImg} className="img-fluid" alt=""></img>
              <div className="portfolio-info">
                <h4>{item.projectName}</h4>
                <div className="portfolio-links">
                  <a href={item.githubLink} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Code Details"><Icon icon="bx:bxl-github" width="1.2em" height="1.2em" /></a>
                  <a href={item.projectURL} data-glightbox="type: external" className="portfolio-details-lightbox"  title="Portfolio Link"><Icon icon="ph:link-bold" width="1.2em" height="1.2em" /></a>
                  
                  <Popup trigger={<Icon icon="ph:note-pencil-bold" width="32" height="32" />} contentStyle={{ width: "1000px" }} modal nested>
                  
                    {close => <PortfolioDetails 
                    close={close} projectURL={item.projectURL} projectName={item.projectName} usage={item.usage} 
                    category={item.category} overview={item.overview} programmingTool={item.programmingTool} 
                    samplePhoto1={item.samplePhoto1} samplePhoto2={item.samplePhoto2} samplePhoto3={item.samplePhoto3}/>}
                  </Popup>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div> 
    </section>

  );
};

export default PortfolioPage;


