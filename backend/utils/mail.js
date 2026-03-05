import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();


export const sendOtpMail = async (email, otp) => {

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Password Reset OTP",
    text: `Your OTP is ${otp}`
  };

  await transporter.sendMail(mailOptions);
};
