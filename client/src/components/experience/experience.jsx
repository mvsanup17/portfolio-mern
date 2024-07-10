import React from "react";
import "../experience/work.css";

function Experience(){
    return(
        <div id="work">
            <div className="container-fluid work-bg">
            <h2 className='text-center head-col py-4'>WORK EXPERIENCE</h2>
            <br/>
            <div id="work" className="container">
                <div className="row">
                    <div className="col-lg-4 text-center">
                        <img src={`https://my-portfolio-mern-d3bx.onrender.com/imagesdata/file_1719506952896.jpg`} alt="thub" className='img-fluid py-2'/>
                    </div>
                    <div className="col-lg-8">
                        <h2>Technical Hub</h2>
                        <p>
                            I've been honing my skills as a trainee at a technical hub, 
                            immersing myself in the dynamic world of Python and full-stack development. 
                            Through hands-on experience and rigorous training, I've delved into the intricacies 
                            of Python programming,
                            mastering its versatility and power in building robust applications. 
                            Additionally, my journey into full-stack development
                            has equipped me with the knowledge and tools to create end-to-end solutions, 
                            from front-end interfaces to back-end functionalities.
                        </p>
                    </div>
                </div>
                <br/><br/>
                <div className="row">
                    <div className="col-lg-4 text-center">
                        <img src={`https://my-portfolio-mern-d3bx.onrender.com/imagesdata/file_1719507025912.jpg`} alt="codsoft" className='img-fluid py-2'/>
                    </div>
                    <div className="col-lg-8">
                        <h2>CodSoft</h2>
                        <p>
                            During my one-month virtual training at Codsoft, I immersed myself
                            in the world of web development, gaining invaluable hands-on experience. 
                            Throughout the program, I tackled a variety of basic projects assigned by the company, allowing 
                            me to apply and reinforce my newfound skills. From crafting responsive layouts to implementing essential
                            functionalities, I embraced the challenges with enthusiasm and determination. 
                            I am grateful for the opportunity Codsoft provided to kickstart my career in this exciting field.
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Experience;