import React, { Component } from 'react'; 
import about from '../data/about.json';
import img from '../images/profilepic.JPG';
//import '../css/layout.css';
import './about.css';
import '../css/mediaqueries.css';
export default class About extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){

        return(
            <div className="about">
                <div className="about-profile-pic">
                        <img className="profile-pic" src={img} alt="saisitaram profilepic"/>
                </div>
                <div className="about-person">
                    <div className="about-person-bio">
                        <h2>About Me</h2>
                        <p>{about[0].bio}</p>
                    </div>
                    <div className="about-person-contact-resume">
                        <div className="about-person-contact-resume-contact-details">
                            <h2>Contact Details</h2>
                            <p className="address">
                                <span>{about[0].name}</span><br />
                                <span>{about[0].address.street}<br />
                                        {about[0].address.city},{about[0].address.state}<br />
                                        {about[0].address.zip}
                                </span><br />
                                <span>{about[0].phone}</span><br />
                                <span>{about[0].email}</span>
                            </p>
                        </div>
                        <div className="about-person-contact-resume-resume-download">
                            <p>
                                <a href={about[0].resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}