import React from "react";
import "./contact.css"
import {BsPeopleFill} from "react-icons/bs";


const Contact = () => {


    const handleSubmit = (event) => {
        event.preventDefault();
        alert("✨Please connect with me on Linkedin: 🚀")
    }

    return (
        <section id="contact">
            <div className="contact-header">
                <BsPeopleFill className="code-icon"/>
                <h1>Contact</h1>
            </div>
            <div >
                <form className="connect-form col-lg-4 col-md-6 col-sm-12" method="POST"
                 onSubmit={handleSubmit}
                >
                    <h4 className="pb-3">Connect with me!</h4>
                    <div className="form-group col">
                        <input type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div className="form-group col">
                        <input type="text" className="form-control" placeholder="First name" />
                    </div>
                    <div className="form-group col">
                        <textarea className="form-control" name="area" id="area" rows="3" placeholder="Message..." />
                    </div>
                    <div className="form-group col">
                        <button type="submit" className="btn btn-primary contact-btn col-lg-12 p-3">
                            SUBMIT</button>
                    </div>
                </form>
            </div>
            <hr className="hr-dotted"/>
        </section>
    )
}

export default Contact