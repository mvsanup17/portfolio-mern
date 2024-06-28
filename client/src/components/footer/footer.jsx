import React from "react";
import {FaEnvelope,FaLinkedin,FaGithub,FaPhone} from "react-icons/fa";
import "../footer/footer.css";
import { Link } from "react-router-dom";

function Footer(){
    return(
        <div>
            <footer className="footer border-top py-4 footer-bg" id="footer">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact d-flex text-white">
                                <div className="icon fs-4">
                                    <FaGithub/>
                                </div>
                                <div className="text ms-3">
                                    <h3 className="fs-5 ">Github</h3>
                                    <Link to="https://github.com/mvsanup17" target="_blank" className="card-link text-white m-0">mvsanup17</Link>
                                </div>
                            </div>
                            <br/>  
                            <div className="contact d-flex text-white">
                                <div className="icon fs-4">
                                    <FaEnvelope/>
                                </div>
                                <div className="text ms-3">
                                    <h3 className="fs-5 ">Mail</h3>
                                    <p className="text-white m-0">mvsanup17@gmail.com</p>
                                </div>
                            </div>                                  
                        </div>
                        <div className="col-lg-6">
                        <div className="contact d-flex text-white">
                                <div className="icon fs-4">
                                    <FaPhone/>
                                </div>
                                <div className="text ms-3">
                                    <h3 className="fs-5 ">Mobile</h3>
                                    <p className="text-white m-0">+91 8897716613</p>
                                </div>
                            </div>    
                            <br/>                   
                            <div className="contact d-flex text-white">
                                <div className="icon fs-4">
                                    <FaLinkedin/>
                                </div>
                                <div className="text ms-3">
                                    <h3 className="fs-5 ">LinkedIn</h3>
                                    <Link to="https://www.linkedin.com/in/anup-malleswarapu/" target="_blank" className="card-link text-white m-0">Anup Malleswarapu</Link>
                                </div>
                            </div>    
                        </div>
                    </div>
                    <br/><br />
                    <div className="row">
                        <div className="col-lg-12 text-white">
                            <h5 className="text-center">&copy; Malleswarapu Venkata Surya Anup</h5>
                            <p className="text-center">Full Stack Developer & UI/UX Designer</p>
                            <p className="text-center">All Rights are Reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer;