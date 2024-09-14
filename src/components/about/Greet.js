import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./about.css"
import ReactTypingEffect from "react-typing-effect";


const Greet = () => {
    return (
        <div className="type-div">
            <ReactTypingEffect
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
            <div> </div>
            <AnimationOnScroll className="flip" initiallyVisible={true} animateIn="animate__flip">
                <h3>Software Developer</h3>
            </AnimationOnScroll>
        </div>
    )
}

export default Greet;