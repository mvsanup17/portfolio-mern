import React from "react";
import { Link } from "react-router-dom";
import "../projects/project.css";



function Projects(){
    return(
        <div>
            <section className="py-2" id="projects">
                <h2 className="text-center head-col py-4">PROJECTS</h2>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg">
                            <div className="card">
                                <img src={`http://localhost:4500/imagesdata/file_1719507155732.png`} alt="img" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">Food Blog - Svaadisht</h5>
                                    <p className="card-text">
                                        Designed and Developed a blog on food using <span><b>MERN</b></span> Stack.
                                        It consists of a review system and stores the critics data in <span><b>MongoDB</b></span>.
                                    </p>
                                    <Link to="https://github.com/mvsanup17/food-blog" class="card-link" target="_blank">Git link</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg">
                            <div className="card">
                                <img src={`http://localhost:4500/imagesdata/file_1719507274128.webp`} alt="img" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">Personal Portfolio</h5>
                                    <p className="card-text">I have developed a personal portfolio using <span><b>React</b></span> that 
                                    provides details about my background and expertise.</p>
                                    <Link to="https://github.com/mvsanup17/my-portfolio" class="card-link" target="_blank">Git link</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg">
                            <div className="card">
                                <img src={`http://localhost:4500/imagesdata/file_1719507323488.jpg`} alt="img" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">DBMS - myData</h5>
                                    <p className="card-text">
                                        Developed a dynamic web page using the <b>MERN</b> Stack for a database management system.
                                        Where the user can access the datasets and download them.
                                        
                                    </p>
                                    <Link to="https://github.com/mvsanup17/dbms-project" class="card-link" target="_blank">Git link</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Projects;