import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const sendOtpMail = async (email, otp) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Reset Password OTP",
      text: `Your OTP is ${otp}`
    });

    console.log("OTP email sent");
  } catch (error) {
    console.log("MAIL ERROR:", error);
  }
};