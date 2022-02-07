import React, {useState, useEffect} from "react";
import {BsPeopleFill} from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import {contactValidation, sendData} from "./utils";
import 'react-toastify/dist/ReactToastify.css';
import "./contact.css"


const Contact = () => {
    const [data, setData] = useState({name:  "", email: "", message: ""})
    const {name, email, message} = data;

    const callSuccess = (success) => toast.success(success, {theme: "colored"});
    const callFailure = (error) => toast.error(error, {theme: "colored"})

    const handleChange = (name) => (event) => {
       setData({...data, [name]: event.target.value})
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const {error, success} = contactValidation(data);
        if(error){ callFailure(error)}
        else {
            sendData(data)
            callSuccess(success);
            setData({...data, name: "", email: "", message: ""});
        }
    }

    return (
        <section id="contact">
            <ToastContainer
                autoClose={4000}
                draggable
            />
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
                        <input type="text" className="form-control" name="name" placeholder="Name"
                         onChange={handleChange("name")} value={name}
                        />
                    </div>
                    <div className="form-group col">
                        <input type="text" className="form-control" name="email" placeholder="email"
                         onChange={handleChange("email")} value={email}
                        />
                    </div>
                    <div className="form-group col">
                        <textarea className="form-control" name="message" id="message" rows="3" placeholder="Message..."
                          onChange={handleChange("message")} value={message}
                        />
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