import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { serverUrl } from "../../App.jsx";
import { ErrorMessage } from "../../utils/ErrorMessage.jsx";
import { LoadingBtn } from "../../components/ui/Button/Button.jsx";

export const ForgotPassword = () => {

    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [err, setErr] = useState("");
    const [LoadingButton, setLoadingButton] = useState(false);
    const navigate = useNavigate();

    const primaryColor = "#f97316";
    const hoverColor = "#ea580c";
    const bgColor = "#f3f4f6";
    const borderColor = "#e5e7eb";

    // STEP 1 → SEND OTP
    const handleSendOtp = async (e) => {
        e.preventDefault();

        try {
            setLoadingButton(true);
            const res = await axios.post(`${serverUrl}/api/auth/send-otp`, { email }, { withCredentials: true });
            console.log(res.data);
            setErr("");
            setStep(2);

        } catch (error) {
            setErr(error?.response?.data?.message || "Email not sent,Server Error");
        } finally {
            setLoadingButton(false);
        }
    };

    // STEP 2 → VERIFY OTP
    const handleVerifyOtp = async (e) => {
        e.preventDefault();

        try {
            setLoadingButton(true);
            const res = await axios.post(`${serverUrl}/api/auth/verify-otp`, { email, otp }, { withCredentials: true });
            console.log(res.data);
            setErr("");
            setStep(3);

        } catch (error) {
            setErr(error?.response?.data?.message || "Invalid OTP");
        } finally {
            setLoadingButton(false);
        }
    };

    // STEP 3 → RESET PASSWORD
    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            setErr("Passwords do not match");
            return;
        }

        try {
            setLoadingButton(true);
            const res = await axios.post(`${serverUrl}/api/auth/reset-password`, { email, newPassword }, { withCredentials: true });
            console.log(res.data);
            setErr("");
            navigate("/signin");

        } catch (error) {
            setErr(error?.response?.data?.message || "Reset failed");
        } finally {
            setLoadingButton(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4"
            style={{ backgroundColor: bgColor }}>
            <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-md">

                <h1 className="text-3xl font-bold text-center mb-6"
                    style={{ color: primaryColor }}>
                    Reset Password
                </h1>

                {/* STEP 1 → EMAIL */}
                {step === 1 && (
                    <form className="space-y-6" onSubmit={handleSendOtp}>

                        <div className="relative">
                            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required
                                className="w-full pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:ring-4"
                                style={{ border: `2px solid ${borderColor}`, backgroundColor: "#fafbfc", }} />
                        </div>

                        <ErrorMessage message={err} />
                        <LoadingBtn type="submit" text="Continue" loading={LoadingButton} primaryColor={primaryColor} hoverColor={hoverColor} />

                    </form>
                )}

                {/* STEP 2 → OTP */}
                {step === 2 && (
                    <form className="space-y-6" onSubmit={handleVerifyOtp}>

                        <input type="text" placeholder="Enter 6-digit OTP" value={otp} onChange={(e) => setOtp(e.target.value)} required
                            className="w-full px-4 py-4 rounded-xl focus:outline-none focus:ring-4"
                            style={{ border: `2px solid ${borderColor}`, backgroundColor: "#fafbfc", }} />
                        <ErrorMessage message={err} />
                        <LoadingBtn type="submit" text="Continue" loading={LoadingButton} primaryColor={primaryColor} hoverColor={hoverColor} />

                    </form>
                )}

                {/* STEP 3 → NEW PASSWORD */}
                {step === 3 && (
                    <form className="space-y-6" onSubmit={handleResetPassword}>

                        <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required
                            className="w-full px-4 py-4 rounded-xl focus:outline-none focus:ring-4"
                            style={{ border: `2px solid ${borderColor}`, backgroundColor: "#fafbfc" }} />

                        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required
                            className="w-full px-4 py-4 rounded-xl focus:outline-none focus:ring-4"
                            style={{ border: `2px solid ${borderColor}`, backgroundColor: "#fafbfc" }} />
                        <ErrorMessage message={err} />
                        <LoadingBtn type="submit" text="Continue" loading={LoadingButton} primaryColor={primaryColor} hoverColor={hoverColor} />

                    </form>
                )}

            </div>
        </div>
    );
};