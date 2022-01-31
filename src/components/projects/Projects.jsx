import React from "react";
import {FaCode} from "react-icons/fa";
import {projects} from "../../data";
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

                    {projects.map((project, i) => (
                        <a href={project.link} key={i}
                           className="project">
                        <div className="flipper">
                            <div className="front">
                                <img src={project.image} alt="project" />
                            </div>

                            <div className="back">
                                <h3>
                                    {project.subtitle}
                                </h3>
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                            </div>
                        </div>
                        </a>
                    ))}
                    {/*<div className="cj">cj</div>*/}
                    {/*<div className="cj">cj</div>*/}
                    {/*<div className="cj">cj</div>*/}



                </div>
            </div>

        </section>
    )
}

export default Projects;