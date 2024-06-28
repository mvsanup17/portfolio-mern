import React from "react";
import Navbar from "../navbar/navbar.jsx";
import { useState,useEffect } from "react";
import axios from "axios";

function Upload(){

    const [file,setFiles] = useState()
    const [images,setImages] = useState()

    const uploadFiles = (e) =>{
        const formdata = new FormData()
        formdata.append('file',file)
        axios.post("http://localhost:4500/uploadimgfile",formdata)
        .then(res => alert(res.data.msg))
        window.location.reload()
        .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get("http://localhost:4500/getimgfile")
        .then(res => setImages(res.data[0].images))
        .catch(err => console.log(err))
    },[])

    return(
        <div>
            <Navbar/>
            <br/>
            <center>
                <h2 className="heading">Upload the files</h2>
                <br/><br/>
                <input type="file"   onChange={(e) => setFiles(e.target.files[0])} />
                <br/><br/><br/>
                <button onClick={uploadFiles} className="button" >Upload</button>
            </center>
        </div>
    )
}
export default Upload;