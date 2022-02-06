import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
export {about} from "../../data";
import ReactTypingEffect from 'react-typing-effect';
import "./about.css"
import {about} from "../../data";
import {footer} from "../../data";
import {BsGithub, BsLinkedin, BsDownload} from "react-icons/bs";
import {MdOutlineFileDownload} from "react-icons/md";


const About = () => {

    const {text} = about
    const {git, linkedin} = footer;

    const greet = () => (  
        <div className="type-div">
     <ReactTypingEffect style={{}}
        text={["Hi, I'm Azamat!"]}
        cursor=""
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={i%1 === 0 ? { color: "#5178d9"} : {}}
                  >{char}</span>
                );
              })}
             
            </h1>
          );
        }}        
      />
      <div> </div>
      <AnimationOnScroll className="flip" initiallyVisible={true} animateIn="animate__flip">
      <h3>Full-Stack Developer</h3>
      </AnimationOnScroll>
      </div>
    )

    return (
    <section id="about">
        <div className="container about-wrapper">
            <div className="flex-item1">
                {greet()}
                <p className="">{text}</p>
                <div className="contact-details">
                   <div className="details">
                       <h4>Contact Details:</h4>
                       <span className="about-contact-text">Azamat Shogen<br/>
                       North Miami Beach, FL<br/>
                           azshog@gmail.com
                       </span> <br/>
                       <div className="about-icons">
                           <a href={git} style={{hover:{color: "blue"}}}>
                               <BsGithub className="about-icon" />
                           </a>
                           <a href={linkedin}>
                               <BsLinkedin className="about-icon"/>
                           </a>
                       </div>
                   </div>
                   <div className="resume">
                      <button className="btn">
                          <MdOutlineFileDownload className="download-icon" />
                          Resume</button>
                   </div>
                </div>
            </div>
            <div className="flex-item2">
            <AnimationOnScroll animateIn="animate__fadeInRightBig">
                <img
                     className="object-cover object-center rounded hero"
                     alt="hero"
                     src="./kendoka.svg" />
            </AnimationOnScroll>
            </div>

        </div>
        <hr className="hr-dotted" />
    </section>
    )
};

export default About;