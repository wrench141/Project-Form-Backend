const nodemailer = require("nodemailer");
require("dotenv").config();

const sendMail = async(to, subject, body) => {
    try {
        const mailer = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.USER,
                pass: process.env.PASS,
            }
        });
        const mailOptions = {
            from: process.env.MAIL, 
            to: process.env.MAIL, 
            subject: subject, 
            text: body
        }
        const response = await mailer.sendMail(mailOptions);
        console.log(response)
        return true        
    } catch (error) {
        console.log(error);
        return false
    }
}

module.exports = sendMail;