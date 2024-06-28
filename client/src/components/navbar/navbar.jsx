import React from "react";
import { Link } from "react-router-dom";
import "../navbar/navbar.css";

function Navbar(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg fixed-top bar-col">
                <Link to="/" className="navbar-brand ms-3 fs-3 text-white">Portfolio</Link>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#btn">
                    <i className='bx bx-menu'></i>
                </button>
                <div className="collapse navbar-collapse bgcol" id="btn">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a href="#about" className="nav-link mx-3 fs-5">About me</a>
                        </li>
                        <li className="nav-item">
                            <a href="#skills" className="nav-link mx-3 fs-5">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a href="#work" className="nav-link mx-3 fs-5">Work Experience</a>
                        </li>
                        <li className="nav-item">
                            <a href="#projects" className="nav-link mx-3 fs-5">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a href="#certifications" className="nav-link mx-3 fs-5">Certifications</a>
                        </li>
                        <li className="nav-item">
                            <a href="#footer" className="nav-link mx-3 fs-5">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navbar