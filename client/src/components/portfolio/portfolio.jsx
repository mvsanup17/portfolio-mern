import React from "react";
import Navbar from "../navbar/navbar.jsx";
import About from "../about/about";
import Skills from "../skills/skills.jsx";
import Experience from "../experience/experience.jsx";
import Projects from "../projects/projects.jsx";
import Certifications from "../certificates/certifications.jsx";
import Contact from "../contact/contact.jsx";
import Footer from "../footer/footer.jsx";


function Portfolio(){
    return(
        <div>
            <Navbar/>
            <br />
            <About/>
            <Skills/>
            <br />
            <Experience/>
            <Projects/>
            <Certifications/>
            <Contact/>
            <br /><br />
            <Footer/>
        </div>
    )
}
export default Portfolio