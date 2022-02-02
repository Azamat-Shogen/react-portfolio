import React, {useState} from "react";
import {BsFillArrowUpSquareFill} from "react-icons/bs";
import "./top.css"

const Top = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if(scrolled > 50){
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    window.addEventListener("scroll", toggleVisible);

    return (
        <button className="scroll-top"
            style={{display: visible ? "block" : "none"}}
                onClick={scrollToTop}
        >
                <BsFillArrowUpSquareFill className="top-icon"
                 // color="#35c6e7"
                />
        </button>
    )
}

export default Top;