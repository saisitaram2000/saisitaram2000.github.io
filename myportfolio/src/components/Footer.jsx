import React, { Component } from 'react';
import social from '../data/social.json';
// import '../css/layout.css';
import './footer.css';
// import '../css/mediaqueries.css';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
      
    }
    networks = () =>(
        
        social.map(network=>{
        return <div className="footer-social-item" key={network.name}><a href={network.url}><i className={network.className}></i></a></div>;
    })
     )
  render() {

    // if(this.props.data){
    //   var networks= this.props.data.social.map(function(network){
    //     return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
    //   })
    // }
    

    return (
      <section id="footer">
          <div className="footer-page">
            <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="fa fa-chevron-circle-up"></i></a></div>
            
            <div className="footer-social">
                  <this.networks/>
            </div>
            <p className="footer-text">
               Have a project for me? Think I'd be a good fit for your Organisation? I'd love to hear from you, give me a shout by one of my social network platforms.
            </p>
         </div>
      </section>
         
    );
  }
}

export default Footer;