const path = require("path");
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

require('dotenv').config();


const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/api", (req,res)=>{
res.json({message: "Hello From Sever"})
});

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASS
    }
});

contactEmail.verify((error) =>
{
    if(error)
    {
        console.log(error);
    } else{
        console.log("ready to send");
    }
})

app.listen(PORT, () =>
{
    console.log(`Server is online: ${PORT}`);
})