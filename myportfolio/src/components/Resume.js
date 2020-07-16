import React, { Component } from 'react';
import resume from '../data/resume.json';
import '../css/layout.css';

export default class Resume extends Component{
    constructor(props) {
        super(props);
        this.state = {};
      
    }

     education=()=>(
       resume[0].education.map(education=>{
           return <div key={education.college}><h3>{education.college}</h3>
           <p className="info">{education.branch} <span>&bull;</span><em className="date">{education.year}</em></p>
           <p>{education.location}</p></div>
       })
    )
    skills=()=>(
        resume[0].skills.map(skill=>{
            var className = 'bar-expand '+skill.name.toLowerCase();
            return <li key={skill.name}><span style={{width:(skill.level)}}className={className}></span><em>{skill.name}</em></li>
        })
    )
    render(){
        console.log(resume[0].education);
        return(
    <section id="resume">
        <div className=" education">
            <div className="three columns header-col">
                <h1><span>Education</span></h1>
            </div>
            <div className="nine columns main-col">
                <div className="row item">
                    <div className="twelve columns">
                        <this.education />
                    </div>
                </div>
            </div>
        </div>
            <div className="skill">

                <div className="three columns header-col">
                    <h1><span>Skills</span></h1>
                </div>

                <div className="nine columns main-col">

                    <p id="skimsg">{resume[0].skillmessage}</p>

                    <div className="bars">
                        <ul className="skills">
                            <this.skills/>
                        </ul>
                    </div>
                </div>
        </div>
    </section>
        )
    }
}