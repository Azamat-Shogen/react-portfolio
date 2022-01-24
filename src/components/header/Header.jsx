import React from "react";
import "./header2.css"
import Navbar from "../navbar/Navbar";



const Header = () => {


    return (
        <header className="header">


            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h3>
                    <a href="/" className="link">AZ</a>
                </h3>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">ABOUT <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">PROJECTS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">SKILLS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">CONTACTS</a>
                    </li>

                </ul>
                <div className="nav-item">
                    <span style={{color: "blueviolet", margin: "20px"}} >logo</span>
                </div>

            </div>

        </nav>


            {/*<Navbar />*/}
        </header>
    )
}

export default Header