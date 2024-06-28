import React from "react";
import "../skills/skills.css";
import { FaBootstrap, FaCss3, FaFigma, FaHtml5, FaJsSquare, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { SiMongodb, SiCplusplus } from 'react-icons/si';

function Skills(){
    return(
        <div id="skills">
            <h2 className="text-center py-4 head-col">SKILLS</h2>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col icon fs-1 justify-center box-content px-3">
                        <div className="icon-item" data-name="Python"><FaPython /></div>
                        <div className="icon-item" data-name="C++"><SiCplusplus /></div>
                        <div className="icon-item" data-name="HTML"><FaHtml5 /></div>
                        <div className="icon-item" data-name="CSS"><FaCss3 /></div>
                        <div className="icon-item" data-name="JavaScript"><FaJsSquare /></div>
                        <div className="icon-item" data-name="Bootstrap"><FaBootstrap /></div>
                        <div className="icon-item" data-name="React"><FaReact /></div>
                        <div className="icon-item" data-name="Node.js"><FaNodeJs /></div>
                        <div className="icon-item" data-name="MongoDB"><SiMongodb /></div>
                        <div className="icon-item" data-name="Figma"><FaFigma /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;
