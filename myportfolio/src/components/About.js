import React, { Component } from 'react'; 
import about from '../data/about.json';
import img from '../images/profilepic.JPG';
import '../css/layout.css';
export default class About extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){

        return(
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src={img} alt="saisitaram profilepic"/>
                    </div>
                    <div className="nine columns">
                        <h2>About Me</h2>
                        <p>{about[0].bio}</p>
                        <div className="row">
                           <div className="columns contact-details">
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
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}