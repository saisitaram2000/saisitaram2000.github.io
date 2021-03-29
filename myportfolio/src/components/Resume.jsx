import React, { Component } from 'react';
import resume from '../data/resume.json';
import skills from '../data/skill.json'; 
// import '../css/layout.css';
// import '../css/mediaqueries.css';
import './resume.css';
export default class Resume extends Component{
    constructor(props) {
        super(props);
        this.state = {};
      
    }

     education=()=>(
       resume[0].education.map(education=>{
           return <div className="education-list-item" key={education.college}>
                    <div className="education-list-item-name">{education.college}</div>
                    <div className="education-list-item-sub">
                        <div className="education-list-item-info">{education.branch} <span>&bull;</span><em className="education-list-item-date">{education.year}</em></div>
                    </div>
                    <div className="education-list-item-sub">
                        <p id="education-list-item-location">{education.location}</p>
                    </div>
                </div>
       })
    )

    techStack = () =>(
        skills.techstack.map(skill=>{
            return <div className="skill-techstack-list-item" key={skill.name}>
                <img className="skill-techstack-fig" src={process.env.PUBLIC_URL+skill.img} alt={skill.name}/>
                <h5 className="skill-title">{skill.name}</h5>
            </div>
        })

    )
   programmingSkills = () =>(
        skills.programming.map(skill=>{
            return <div className="skill-programming-list-item" key={skill.name}>
                <img className="skill-programming-fig" src={process.env.PUBLIC_URL+skill.img} alt={skill.name}/>
                <h5 className="skill-title">{skill.name}</h5>
            </div>
        })

    )

    // skills=()=>(
    //     resume[0].skills.map(skill=>{
    //         var className = 'bar-expand '+skill.name.toLowerCase();
    //         return <li key={skill.name}><span style={{width:(skill.level)}}className={className}></span><em>{skill.name}</em></li>
    //     })
    // )

    render(){
        console.log(resume[0].education);
        return(
    <section id="resume">
        <div className="education">
            <div className="resume-header">
                EDUCATION
            </div>
            <div className="education-list">
                <this.education />
            </div>
        </div>
        <div className="skill-page">
            <div className="resume-header">
                SKILLS
            </div>
                
            <div className="skill">
                <div className="skill-techstack">
                    <div className="skill-header-col">
                        <h1><span>TECHSTACK</span></h1>
                    </div>

                    <div className="skill-techstack-list">
                        <this.techStack/>
                    </div>
                </div>
                <div className="skill-programming">
                    <div className="skill-header-col">
                        <h1><span>programming</span></h1>
                    </div>

                    <div className="skill-programming-list">
                        <this.programmingSkills/>
                    </div>
                </div>
                <div className="skill-others">
                    <div className="skill-header-col">
                        <h1><span>Others</span></h1>
                    </div>

                    <div className="skill-others-list">
                        <h5 className="skill-others-list-item"><span>&bull;</span> Data Structures and Algorithms</h5>
                        <h5 className="skill-others-list-item"><span>&bull;</span>OOPS</h5>
                        <h5 className="skill-others-list-item"><span>&bull;</span>DBMS</h5>
                    </div>
                </div>

            </div>

               
        </div>
    </section>
        )
    }
}