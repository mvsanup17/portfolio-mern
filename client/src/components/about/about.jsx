import React from "react";
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import "../about/about.css";

function About(){

    const [text] = useTypewriter({
        words : ['Full Stack Developer', 'UI/UX Designer'],
        loop : true
    });


    return(
        <div>
            <section className="py-2" id="about">
                <div className="container-fluid about-bg">
                    <div className="row min-vh-100 align-items-center align-content-center">
                        <div className="col-lg-4">
                            <div className="home-img text-center">
                                <img src={`http://localhost:4500/imagesdata/file_1719506837624.jpg`} className="rounded-circle mw-100" alt="profile img" />
                            </div>
                        </div>
                        <div className="col-lg-8 mt-5 mt-lg-0">
                            <div className="home-text">
                                <p className="text-muted mb-1">Hello I'm</p>
                                <h1 className="fs-2">Malleswarapu Venkata Surya Anup</h1>
                                <h2 className="text-danger text-uppercase fs-3 fw-bold">
                                    {text}
                                    <Cursor/>
                                </h2>
                                <h6>  Welcome to my page!!</h6>
                                <p>
                                    I am Anup, currently pursuing my final year of B.Tech at Aditya Engineering College. 
                                    As a trainee in Full Stack Development, I've developed a strong passion for UI/UX design and related technologies.
                                    My enthusiasm for technology drives me to continually take on new challenges and acquire new skills.
                                </p>
                                <p> 
                                    I thrive on challenges that push me out of my comfort zone. 
                                    My ultimate goal is to continuously enhance my potential and create a trajectory for my personal and professional growth.
                                </p>
                                <br />
                                <a href={`http://localhost:4500/imagesdata/file_1719508145745.pdf`} target="_blank" rel="noopener noreferrer" className="button text-decoration-none">
                                    My Resume
                                </a>
                                <br />
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default About