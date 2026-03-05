import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  host: "Gmail",
  port: 465,
  secure: true, 
  auth: {
    user: process.env.Email,
    pass: process.env.Password,
  },
});

export const sendOtpMail = async (to, otp) => {
    await transporter.sendMail({
        from:process.env.Email,
        to,
        subject:"Reset Your Password",
        html:`<p>Your otp for password reset is <b>${otp}</b>. it expires in 5 minutes. </p>`
    });
}