import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import nodemailer from "nodemailer";
import multer from "multer";
import path from "path";
import imgUpload from "./models/imgUpload.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const storage = multer.diskStorage({
    destination: (req,file,cb) =>{
      cb(null, 'public/imagesdata')
    },
    filename: (req,file,cb) =>{
      cb(null,file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})
  
const upload = multer({
    storage:storage
})

app.post('/uploadimgfile', upload.single('file'),(req, res) => {
    imgUpload.create({image: req.file.filename})
    .then(result => res.json(result))
    .catch(err => console.log(err))
    return res.send({msg: "Uploaded Successfully"})
})

app.get('/getimgfile',(req,res)=>{
    imgUpload.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

mongoose.connect('mongodb+srv://iamvsanup:H4xL4kjQ76snMEsA@driveready.0udnccc.mongodb.net/DriveReady?retryWrites=true&w=majority')
    .then(() => app.listen(4500))
    .then(() => console.log("Connected to Database & Listening on port 4500"))
    .catch((err) => console.log(err));

function sendEmail({ email, subject, message }) {
    return new Promise((resolve, reject) => {
        var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: 'iamvsanup@gmail.com',
                pass: 'veke ysrf tdyj mrxw'
            }
        });

        const mail_configs = {
            from: email,  // Setting the sender's email as the 'from' address
            to: 'iamvsanup@gmail.com',  // Your email address to receive the message
            subject: subject,
            text: message,
            replyTo: email  // Set the reply-to to the sender's email
        };

        transporter.sendMail(mail_configs, function (error, info) {
            if (error) {
                console.log(error);
                return reject({ message: 'An error occurred' });
            }
            return resolve({ message: 'Mail sent successfully' });
        });
    });
}

app.get('/', (req, res) => {
    const { email, subject, message } = req.query;

    sendEmail({ email, subject, message })
        .then(response => res.send(response.message))
        .catch(error => res.status(500).send(error.message));
});
