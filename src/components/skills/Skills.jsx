import React from "react";
import {HiChip} from "react-icons/hi"
import {GiStarShuriken} from "react-icons/gi";
import {skills} from "../../data";
import "./skills.css";


const Skills = () => {

    return (
        <section id="skills">
            <div className="container">
            <div className="skills-header">
              <HiChip className="chip" />
              <h1>Skills</h1>
            </div>

            <div className="skills-wrapper">
                {skills.map((skill, index) => (
                    <div className="skill" key={index}>
                        <GiStarShuriken className="shuriken" />
                        <p>{skill}</p>
                    </div>
                ))}
            </div>
            </div>
            <hr className="hr-dotted"/>
        </section>
    )
}

export default Skills;