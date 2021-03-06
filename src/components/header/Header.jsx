import React, { useState } from "react";
import "./header.css";
import { GiWolfHowl,  } from "react-icons/gi";
import { MdOutlineHighlight, MdHighlight } from "react-icons/md";


const Header = ({toggleTheme}) => {
    const [wolfMode, setWolfMode] = useState(true)


    const toggleMode = () => {
        toggleTheme();
        setWolfMode(prev => !prev)
    }

    // $(document).on('click','.navbar-collapse.show',function(e) {
    //     $(this).collapse('hide');
    // });

    return (
        <header className="header sticky-top">
            <nav className="navbar navbar-expand-lg  navbar-dark bg-dark nav-div">
                <h3>
                    <a href="/" className="az">AZ.</a>
                </h3>
                <button className="navbar-toggler"
                        type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active" >
                            <a className="nav-link  selected" href="#about">ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#skills">SKILLS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav_link" href="#projects">PROJECTS</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#contact">CONTACT</a>
                        </li>

                    </ul>
                    <div className="nav-item">
                    <span className="icon-span"
                          onClick={toggleMode}
                    >
                    {wolfMode ?
                        <GiWolfHowl
                            color=""
                            size="2.5em"
                            className="wolf"
                        /> :
                        <MdOutlineHighlight
                            color=""
                            size="2.5em"
                            className="wolf"
                        />
                    }
                    </span>
                    </div>

                </div>

            </nav>

        </header>
    );
};

export default Header;