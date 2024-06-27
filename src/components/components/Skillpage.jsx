import React, {useEffect} from "react";
import {SkillBar} from 'react-skills';


const Skillpage = () =>{


const skillsData= [
    {
      name: 'HTML',
      level: 90,
      color:"#e5d4ef"
    },
    {
      name: 'CSS',
      level: 80,
      color:"#fbe0e0"
    },
    {
      name: 'ReactJS',
      level: 85,
      color:"#fbe0e0"
    },
    {
      name: 'Javascript',
      level: 100,
      color:"#d6e6ff"
    },
    {
      name: 'Python',
      level: 60,
      color:"#d6e6ff"
    },
    {
      name: 'PostgreSQL',
      level: 60,
      color:"#e5d4ef"
    },
  ]

    return (
        <>
        <section id="skills" className="skills section-bg" style={{background:"#eae3df"}}>
            <div className="container" data-aos="fade-up">

            <div className="section-title">
            <h2>Skills</h2>
            <p>Mainly, I use these programming languages; however, I am very eager to continually update my programming skills. I am currently self-studying Java and plan to study React Native soon.</p>
            </div>

            <div className="row skills-content" style={{display: "grid",gridTemplateColumns: "repeat(2, 2fr)"}}>
                {skillsData.map((skill, index) => (

                <div key={index} className="progress">
                    <span className="skill">{skill.name} <i className="val">{skill.level} % </i></span>
                    <div className="progress-bar-wrap">
                    <SkillBar 
                        className="progress-bar" role="progressbar"
                        levelProgress={true}
                        levelwidth= "5px"
                        height= "10px"
                        level={skill.level} 
                        color={skill.color}
                        duration= {2}
                    />
                    <br />
                    </div>    

                </div>
                ))}
            </div>

            </div>
        </section>
        </>
    )
}

export default Skillpage;