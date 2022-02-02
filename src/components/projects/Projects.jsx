import React from "react";
import {FaCode} from "react-icons/fa";
import {projects} from "../../data";
import {BsEyeFill} from "react-icons/bs"
import {BsFillArrowUpRightSquareFill} from "react-icons/bs"
import "./projects.css";


const Projects = () => {

    return (
        <section id="projects">
            <div className="container">
                <div className="projects-header">
                    <FaCode className="code-icon"/>
                    <h1>Projects</h1>
                </div>
                <div className="projects-wrapper">
                  {projects.map((project, i)=> (
                      <div className="project">
                      <div className="flipper">
                          <div className="front">
                          <img src={project.image} alt="project" />
                          </div>
                          <div className="back">
                              <h3>{project.title}</h3>
                              <h4>{project.subtitle}</h4>
                              <p>{project.description}</p>
                              <a href={project.link}>
                                  <BsFillArrowUpRightSquareFill className="view-icon"  />
                              </a>
                          </div>
                      </div>
                      </div>
                  ))}
                </div>
            </div>
    
        </section>
    )
}

export default Projects;
