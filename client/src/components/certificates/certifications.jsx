import React from "react";
import "../certificates/certificates.css";


function Certifications(){
    return(
        <div>
            <section className="py-2 certi-bg" id="certifications">
                <h2 className="text-center head-col py-4">CERTIFICATIONS</h2>
                <br/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg">
                            <div className="card">
                                <img src={`https://my-portfolio-mern-d3bx.onrender.com/imagesdata/file_1719507392834.png`} alt="img" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">Red Hat</h5>
                                    <p className="card-text">
                                        Certified as a Red Hat Certified System Administrator <span><b>(RHCSA)</b></span>.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg">
                            <div className="card">
                                <img src={`https://my-portfolio-mern-d3bx.onrender.com/imagesdata/file_1719507478643.png`} alt="img" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">Cisco</h5>
                                    <p className="card-text">
                                        Did some certifications in <span><b>CISCO</b></span> on 
                                        <span><b> Python</b></span> and <span><b>Networking</b></span>.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg">
                            <div className="card">
                                <img src={`https://my-portfolio-mern-d3bx.onrender.com/imagesdata/file_1719507527505.png`} alt="img" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">Certiport</h5>
                                    <p className="card-text">
                                        Did certifications in <span><b>Certiport</b></span> on <span><b>Python, HTML, CSS </b></span>
                                        and <span><b>JS</b></span>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Certifications;