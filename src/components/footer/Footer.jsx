import React from "react";
import {BsGithub, BsLinkedin} from "react-icons/bs"
import {MdOutlineAlternateEmail} from "react-icons/md";
import {FaCopyright} from "react-icons/fa"
import {footer} from "../../data";
import "./footer.css";

const Footer = () => {
    const {email, git, linkedin} = footer;

    return (
       <footer className="footer">
          <div className="footer-div">
             <div className="footer-icons">
                 <a href={`mailto:${email}`}>
                 <MdOutlineAlternateEmail className="footer-icon e_mail" />
                 </a>
                 <a href={git}>
                 <BsGithub className="footer-icon" />
                 </a>
                 <a href={linkedin}>
                 <BsLinkedin className="footer-icon"/>
                 </a>
             </div>
              <div className="copyright">
                  <FaCopyright className="copyright-icon" />
                  <span className="copy-text">Created by Azamat Shogen</span>
              </div>
          </div>
       </footer>
    )
}

export default Footer