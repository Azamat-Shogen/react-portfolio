import React from "react";
import "./header2.css";
import { GiWolfHowl,  } from "react-icons/gi";
import { MdLightMode } from "react-icons/md";

import Navbar from "../navbar/Navbar";



const Header = () => {


    return (
        <header className="header">


            <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-div">
                <h3>
                    <a href="/" className="az">AZ.</a>
                </h3>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link  selected" href="/">ABOUT</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav_link" href="#">PROJECTS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#">SKILLS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">CONTACTS</a>
                    </li>

                </ul>
                <div className="nav-item">

                    <span className="icon-span" style={{color: "orange", margin: "50px 10px"}} >
                         <GiWolfHowl
                          color="white"
                          size="2.5em"
                          className="wolf"
                         />
                        {/*<MdLightMode*/}
                        {/*    color="white"*/}
                        {/*    size="2.5em"*/}
                        {/*    className="wolf"*/}
                        {/*/>*/}
                    </span>
                </div>

            </div>

        </nav>

        </header>
    );
};

export default Header;