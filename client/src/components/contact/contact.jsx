import React, { useState } from "react";
import axios from "axios";
import "../contact/contact.css";

function Contact() {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();  // Prevent page refresh
        axios.get('http://localhost:4500/', {
            params: {
                email,
                subject,
                message
            }
        })
        .then((res) => {
            alert('Message Sent Successfully')
            console.log("Success")
            window.location.reload()
        })
        .catch(() => { console.log("Failed") });
    }

    return (
        <div>
            <h2 className="text-center head-col py-4">CONTACT ME</h2>
            <br />
            <section>
                <div className="container">
                    <div className="row">
                            <div className="col-lg-12">
                                <form onSubmit={sendEmail}>
                                    <div className="mb-2">
                                        <label>Email</label>
                                        <input 
                                        type="email"  
                                        placeholder="Enter your Email" 
                                        className="form-control" 
                                        onChange={(e) => setEmail(e.target.value)}
                                        required />
                                    </div>
                                    <div className="mb-2">
                                        <label>Subject</label>
                                        <input 
                                        type="text" 
                                        placeholder="Enter your Subject" 
                                        className="form-control"
                                        onChange={(e) => setSubject(e.target.value)} 
                                        required />
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label">Message</label>
                                        <textarea 
                                        className="form-control"  
                                        rows="3" 
                                        placeholder="Enter your Message"
                                        onChange={(e) => setMessage(e.target.value)}  
                                        required></textarea>
                                    </div>
                                    <button type="submit" className="button">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
            </section>
        </div>
    );
}

export default Contact;
