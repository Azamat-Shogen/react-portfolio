import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
export {about} from "../../data";
import ReactTypingEffect from 'react-typing-effect';
import "./about.css"
import {about} from "../../data";

const About = () => {

    const {text} = about

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
    <section id="about" style={{width: "100%"}}>
        <div className="container about-wrapper">
            <div className="flex-item1">
                {greet()}
                <p className="">{text}</p>
                <div className="">
                    <a href="#contact" className="d-inline-flex">
                        Contact Me
                    </a>
                    <a href="#projects" className="">
                        Projects
                    </a>
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