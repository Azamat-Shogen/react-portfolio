import React, { useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import ReactTypingEffect from 'react-typing-effect';
import "./about.css"

const About = () => {

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
      <div></div>
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
                <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                    laborum quasi,
                    <br className="" />
                    incidunt dolore iste nostrum cupiditate voluptas?
                    Laborum, voluptas natus?
                </p>
                <div className="">
                    <a
                        href="#contact"
                        className="d-inline-flex">
                        Contact Me
                    </a>
                    <a
                        href="#projects"
                        className="">
                        Projects
                    </a>
                </div>
            </div>
            <div className="flex-item2">
            <AnimationOnScroll animateIn="animate__fadeInRightBig">
                <img
                     className="object-cover object-center rounded"
                     alt="hero"
                     src="./kendoka.svg"
                    // src="https://www.freeiconspng.com/uploads/profile-icon-1.png" width="350" height="350"
                />
            </AnimationOnScroll>

            </div>
        </div>
    </section>
    )
};

export default About;