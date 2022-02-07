import React, {useState, useEffect} from "react";
import withRouter from "../../withRouter";
import { AnimationOnScroll } from "react-animation-on-scroll";
export {about} from "../../data";
import {about} from "../../data";
import {footer} from "../../data";
import {BsGithub, BsLinkedin} from "react-icons/bs";
import {MdOutlineFileDownload} from "react-icons/md";
import "./about.css"
import Greet from "./Greet";


const About = (props) => {
    const {text} = about
    const {git, linkedin} = footer;
    const [resumeData, setResumeData] = useState({});


    console.log('props are: ', props)

    const downloadResume = () => {
        if(resumeData.hasOwnProperty("resume-link")){
            props.navigate(`/${resumeData["resume-link"]}`);
        }
    }

    useEffect(() => {
        fetch("/resume.json")
            .then(res => res.json())
            .then(data => {
                setResumeData(data)
              }
                )
            .catch(err => console.log(err))
    }, [])



    // console.log('resume data is: ', resumeData)

    return (
    <section id="about">
        <div className="container about-wrapper">
            <div className="flex-item1">
                <Greet />
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
                      {/* <a type="button" className="btn" href={resumeData["resume-link"]} >
                          <MdOutlineFileDownload className="download-icon" />
                          Resume
                      </a> */}
                      <button className="btn" onClick={downloadResume} >
                          <MdOutlineFileDownload className="download-icon" />
                          Resume
                      </button>
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


export default withRouter(About);