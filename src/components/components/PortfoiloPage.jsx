import React,{useEffect, useRef}from "react";
import wordleProject1 from "../../assets/img/portfolio/wordle.png"
import project2 from "../../assets/img/portfolio/project2.png"
import travelplannerProject3 from "../../assets/img/portfolio/travelplanner.png"
import dietmateProject4 from "../../assets/img/portfolio/dietmate.png"
import { Icon } from "@iconify/react";

 
const PortfolioPage = () =>{


  // const portfolioContainerRef = useRef(null);
  // const portfolioFiltersRef = useRef([]);

  // useEffect(() => {
  //   AOS.init();

  //   const portfolioContainer = portfolioContainerRef.current;
  //   if (portfolioContainer) {
  //     const portfolioIsotope = new Isotope(portfolioContainer, {
  //       itemSelector: '.portfolio-item',
  //     });

  //     const onFilterClick = (e, filter) => {
  //       e.preventDefault();
  //       portfolioFiltersRef.current.forEach((el) => {
  //         el.classList.remove('filter-active');
  //       });
  //       filter.classList.add('filter-active');

  //       portfolioIsotope.arrange({
  //         filter: filter.getAttribute('data-filter'),
  //       });
  //       portfolioIsotope.on('arrangeComplete', () => {
  //         AOS.refresh();
  //       });
  //     };

  //     portfolioFiltersRef.current.forEach((filter) => {
  //       filter.addEventListener('click', (e) => onFilterClick(e, filter));
  //     });

  //     // Cleanup event listeners on component unmount
  //     return () => {
  //       portfolioFiltersRef.current.forEach((filter) => {
  //         filter.removeEventListener('click', (e) => onFilterClick(e, filter));
  //       });
  //     };
  //   }
  // }, []);

  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Portfolio</h2>
        </div>

        {/* <div className="row">
          <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active" ref={(el) => (portfolioFiltersRef.current[0] = el)}>All</li>
              <li data-filter=".filter-app" ref={(el) => (portfolioFiltersRef.current[1] = el)}>Full stack</li>
              <li data-filter=".filter-card" ref={(el) => (portfolioFiltersRef.current[2] = el)}>Simple</li>
              <li data-filter=".filter-web" ref={(el) => (portfolioFiltersRef.current[3] = el)}>Web</li>
            </ul>
          </div>
        </div> */}

        {/* <div className="row portfolio-container" ref={portfolioContainerRef} data-aos="fade-up" data-aos-delay="200"> */}
        <div className="row portfolio-container"  data-aos="fade-up" data-aos-delay="200">
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src={wordleProject1} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Wordle Game</h4>
                <p>Project 1</p>
                <div className="portfolio-links">
                  <a href="https://github.com/MKuma5555/wordle-app" className="portfolio-lightbox" title="Code Details"><Icon icon="bx:bxl-github" width="1.2em" height="1.2em" /></a>
                  <a href="https://mkuma5555.github.io/wordle-app/wordle.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Link"><Icon icon="ph:link-bold" width="1.2em" height="1.2em" /></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={project2} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Wedding venue Web</h4>
                <p>Project 2</p>
                <div className="portfolio-links">
                  <a href="https://github.com/MKuma5555/project2" className="portfolio-lightbox" title="Code Details"><Icon icon="bx:bxl-github" width="1.2em" height="1.2em" /></a>
                  <a href="https://project2-fnip.onrender.com/" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Link"><Icon icon="ph:link-bold" width="1.2em" height="1.2em" /></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={travelplannerProject3} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href="https://github.com/MKuma5555/TripTrail" className="portfolio-lightbox" title="Code Details"><Icon icon="bx:bxl-github" width="1.2em" height="1.2em" /></a>
                  <a href="https://travel-planner-vza0.onrender.com/" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Link"><Icon icon="ph:link-bold" width="1.2em" height="1.2em" /></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={dietmateProject4} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href="https://github.com/MKuma5555/socialDiet_Project4" className="portfolio-lightbox" title="Code Details"><Icon icon="bx:bxl-github" width="1.2em" height="1.2em" /></a>
                  <a href="https://diet-mate.onrender.com/" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Link"><Icon icon="ph:link-bold" width="1.2em" height="1.2em" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PortfolioPage;