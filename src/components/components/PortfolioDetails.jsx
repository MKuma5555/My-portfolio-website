import React from "react";
import 'reactjs-popup/dist/index.css';
import { Icon } from "@iconify/react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';

const PortfolioDetails = ({ close,projectURL, projectName, category,overview,programmingTool,usage,samplePhoto1,samplePhoto2,samplePhoto3}) => {
    return (
        <div  className="portfolio-details">
        <div className="row row-3-col">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div className="section-title">
                    <h2 >{projectName}</h2>
                </div>
                <button onClick={close} style={{ background: "none", border: "none", position: "absolute", right: "16px" }}>
                    <Icon icon="mingcute:close-fill" width="32" height="32" />
                </button>
            </div>

            <div className="container">
                <div className="row">
                <div className="col-8" >
                        <div className="" >
                        <Fade>
                            <img style={{ width: '100%' }} src={samplePhoto1} />
                            <img style={{ width: '100%' }} src={samplePhoto2} />
                            <img style={{ width: '100%' }} src={samplePhoto3} />
                        </Fade>
                        </div>
                </div>
                <div className="col-4">
                    <div className="portfolio-info">
                        <h5>Project Information</h5>
                        
                        <ul>
                            <li><strong>Category:<br/></strong> {category}</li>
                            <li><strong>Programming tool:<br/></strong> {programmingTool}</li>
                            <li><strong>Project URL:<br/></strong> <a href={projectURL}>{projectURL}</a></li>
                        </ul>
                    </div>
                </div>
                </div>
                    <div className="portfolio-description">
                        <h5>Project Overview:</h5>
                        <p>{overview}</p>
                        <h5>Usage:</h5>
                        <p>{usage}</p>
                    </div>
            </div>
        </div>
        </div>
    );
}

export default PortfolioDetails;


