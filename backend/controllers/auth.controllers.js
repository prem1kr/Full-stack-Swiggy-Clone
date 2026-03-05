import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import getToken from "../utils/token.js";
import { sendOtpMail } from "../utils/mail.js";

export const Signup = async (req, res) => {
    try {
        const { fullName, email, mobile, role, password } = req.body;
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User Already Exist" });
        }
        if (password.length < 6) {
            return res.status(400).json({ message: "Password At Least 6 Characters" });
        }
        if (mobile.length < 10) {
            return res.status(400).json({ message: "Phone Number must be 10 digits" });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        user = await User.create({
            fullName,
            email,
            mobile,
            password: hashPassword
        });

        const token = await getToken(user._id);
        res.cookie("token", token, {
            secure: false,
            sameSite: "strict",
            maxAge: "7*24*60*60*1000",
            httpOnly: true
        });

        return res.status(201).json(user);

    } catch (error) {
        return res.status(500).json(`signup error ${error}`);
    }
}


export const SignIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User Not Registered !, Please SignUp First !" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Password Does Not Matched" });
        }

        const token = await getToken(user._id);
        res.cookie("token", token, {
            secure: false,
            sameSite: "strict",
            maxAge: "7*24*60*60*1000",
            httpOnly: true
        });

        return res.status(200).json(user);

    } catch (error) {
        return res.status(500).json(`Error in Sigin ${error}`);
    }
}


export const SignOut = async (req, res) => {
    try {
        res.clearCookie("token");
        return res.status(200).json({ message: "User LogOut Successfully" });
    } catch (error) {
        return res.status(500).json(`Error in Logout ${error}`);
    }
}


export const sendOtp = async (req, res) => {
    try {
        const { email } = req.body;
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User does not exist" });
        }
        const otp = Math.floor(1000 + Math.random() * 9000).toString();
        user.resetOtp = otp;
        user.otpExpires = Date.now() + 5 * 60 * 1000;
        user.isOtpVerified = false,
            await user.save();

        sendOtpMail(email, otp);
        return res.status(200).json({ message: "Otp sent successfully" });

    } catch (error) {
        return res.status(500).json(`send otp error ${error}`);
    }
}


export const verifyOtp = async (req, res) => {
    try {
        const { email, otp } = req.body;
        let user = await User.findOne({ email });
        if (!user || user.resetOtp != otp || user.otpExpires < Date.now()) {
            return res.status(400).json({ message: "Invalid / Expired otp" });
        }

        user.isOtpVerified = true;
        user.resetOtp = undefined;
        user.otpExpires = undefined;
        await user.save();
        return res.status(200).json({ message: "Otp verified successfully" });

    } catch (error) {
        return res.status(500).json(`verify otp error ${error}`);
    }
}


export const resetPassword = async (req, res) => {
    try {
        const { email, newPassword } = req.body;
        let user = await User.findOne({ email });
        if (!user || !user.isOtpVerified) {
            return res.status(400).json({ message: "otp verification required" });
        }

        const hashPassword = bcrypt.hash(newPassword, 10);
        user.password = hashPassword;
        user.isOtpVerified = false;
        await user.save();
        return res.status(200).json({ message: "opt sent successfully" });
    } catch (error) {
        return res.status(500).json(`${error}`);
    }
}


export const googleAuth = async (req, res) => {
    try {
        const { fullName, email, mobile,role } = req.body;
        let user = await User.findOne({ email });
        if (!user) {
            user = await User.create({
                fullName,
                email,
                mobile,
                role
            });
        }

        const token = await getToken(user._id);
        res.cookie("token", token, {
            secure:false,
            sameSite:"strict",
            maxAge:7*24*60*60*1000,
            httpOnly:true
        });
         
        return res.status(200).json(user);

    } catch (error) {
      return res.status(500).json(`google auth error ${error}`);
    } 
}