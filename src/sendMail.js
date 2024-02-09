"use strict";
import nodemailer from "nodemailer";
import dotenv from 'dotenv'
dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.google.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_ACC,
    pass: process.env.GMAIL_PASS,
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: {
			name: "Caine's Portfolio Website",
    	address: process.env.GMAIL_ACC, // sender address
		},
    to: process.env.GMAIL_ACC, // list of receivers
    subject: "You just got a message from your porfolio website!", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}

main().catch(console.error);
