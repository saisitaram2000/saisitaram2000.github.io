import React, { Component } from 'react'
import projects from '../data/projects.json';
import './projects.css';
import '../css/mediaqueries.css';
export default class Projects extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             open:false,
           
        }
        this.togglePanel=this.togglePanel.bind(this);
    }
    togglePanel(e){
        this.setState({open: !this.state.open});
    }
    
    render() {
        //  const img=require("../images/recipe.jpg")
        
        return projects?(
            <div className="project-list">
                <h2 id="project-header"><span>projects</span></h2>
                <div className="project-list-items">
                {projects.map((project)=>(
                    
                    <div className="project-list-single" key={project.name}>
                        <div className="project-list-single-top">
                            <img className="project-list-single-fig" src={process.env.PUBLIC_URL+project.img} 
                            alt="restaurant"/>
                            <div className="project-list-single-top-header">
                                    <h1 className="project-title">{project.name}</h1>
                                    <h3 className="project-date">{project.date}</h3>
                            </div>
                        </div>
                        
                        <div className="project-list-single-data">
                            <div className="project-list-single-data-short-description">
                                <h3 className="project-short-description">{project.short}</h3>
                                {/* <div onClick={(e)=>this.togglePanel(e)} className="project-collapse-expand-icon">
                                    click
                                </div>
                                {this.state.open ? (
                                <div className="project-long-description">
                                long description
                                </div>
                                ) : null} */}
                                
                            
                            </div>
                            <div className="project-single-links">
                                <div className="project-link">
                                    <p>
                                        <a href={project.link} className="button">Github</a>
                                    </p>
                                </div>
                                {project.demo?
                                (<div className="project-link">
                                    <p>
                                        <a href={project.demo} className="button">DemoLive</a>
                                    </p>
                                </div>):null};
                            </div>
                        </div>

                    </div> 

                ))}

            </div>
            
            </div>
        ):(
            <div />
        );
      
    }
}
