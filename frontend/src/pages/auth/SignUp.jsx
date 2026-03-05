import React, { useState } from "react";
import { FaPhoneAlt, FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { serverUrl } from "../../App.jsx";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../utils/firebase.js";
import { ErrorMessage } from "../../utils/ErrorMessage.jsx";
import { LoadingBtn } from "../../components/ui/Button/Button.jsx";

export const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");
    const [role, setRole] = useState("");
    const navigate = useNavigate();
    const [err, setErr] = useState();
    const [LoadingButton, setLoadingButton] = useState(false);

    // Colors
    const primaryColor = "#f97316";
    const hoverColor = "#ea580c";
    const bgColor = "#f3f4f6";
    const borderColor = "#e5e7eb";

    const handleSignUp = async (e) => {
        try {
            e.preventDefault();
            setLoadingButton(true);
            const result = await axios.post(`${serverUrl}/api/auth/signup`, {
                fullName, email, password, mobile, role
            }, { withCredentials: true });

            console.log(result);
            setErr("");
        } catch (error) {
            setErr(error?.response?.data?.message ||"Server Error");
        } finally {
            setLoadingButton(false);
        }
    }

    const handleGoogleAuth = async (e) => {
        try {
            e.preventDefault();
            if (!mobile && !role) {
                return setErr("mobile number and role is required");;
            }
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const data = await axios.post(`${serverUrl}/api/auth/google-auth`, {
                fullName: result.user.displayName,
                email: result.user.email,
                role,
                mobile
            }, { withCredentials: true });
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center"
            style={{ backgroundColor: bgColor }} >
            <div className="bg-white w-[400px] p-8 rounded-lg shadow-md">

                {/* Header */}
                <h1 className="text-3xl font-bold mb-2">Sign up</h1>
                <p className="text-gray-600 mb-6" onClick={() => navigate("/signin")}> or{" "}
                    <span className="font-medium cursor-pointer hover:underline"
                        style={{ color: primaryColor }} >
                        login to your account
                    </span>
                </p>

                {/* Form */}
                <form className="space-y-4" onSubmit={handleSignUp} >

                    {/* Phone */}
                    <div className="relative">

                        <FaPhoneAlt className="absolute left-3 top-5 text-gray-400" />
                        <input type="text" placeholder="Phone number" value={mobile} onChange={(e) => setMobile(e.target.value)} required
                            className="w-full p-4 pl-10 rounded-md focus:outline-none focus:ring-2"
                            style={{ border: `1px solid ${borderColor}` }} />

                    </div>

                    {/* Full Name */}
                    <div className="relative">

                        <FaUser className="absolute left-3 top-5 text-gray-400" />
                        <input type="text" placeholder="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required
                            className="w-full p-4 pl-10 rounded-md focus:outline-none focus:ring-2"
                            style={{ border: `1px solid ${borderColor}` }} />

                    </div>

                    {/* Email */}
                    <div className="relative">

                        <FaEnvelope className="absolute left-3 top-5 text-gray-400" />
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required
                            className="w-full p-4 pl-10 rounded-md focus:outline-none focus:ring-2"
                            style={{ border: `1px solid ${borderColor}` }} />

                    </div>

                    {/* Password with Show/Hide */}
                    <div className="relative">

                        <FaLock className="absolute left-3 top-5 text-gray-400" />
                        <input type={showPassword ? "text" : "password"} placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required
                            className="w-full p-4 pl-10 pr-10 rounded-md focus:outline-none focus:ring-2"
                            style={{ border: `1px solid ${borderColor}` }} />

                        <div className="absolute right-3 top-5 cursor-pointer text-gray-500"
                            onClick={() => setShowPassword(!showPassword)} >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </div>

                    </div>

                    {/* Role Selection */}
                    <select className="w-full p-4 rounded-md focus:outline-none focus:ring-2 cursor-pointer" value={role} onChange={(e) => setRole(e.target.value)} required
                        style={{ border: `1px solid ${borderColor}` }}
                        defaultValue="" >
                        <option value="" disabled>Select Role</option>
                        <option value="user">User</option>
                        <option value="owner">Owner</option>
                        <option value="deliveryBoy">Delivery Boy</option>
                    </select>

                    <LoadingBtn type="submit" text="Continue" loading={LoadingButton} primaryColor={primaryColor} hoverColor={hoverColor} />

                    <ErrorMessage message={err} />

                    <button type="button" onClick={handleGoogleAuth}
                        className="w-full flex items-center justify-center gap-3 font-semibold py-3 rounded-md transition duration-300 border"
                        style={{ border: `1px solid ${borderColor}`, backgroundColor: "#ffffff", }}

                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = hoverColor; }}
                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = borderColor; }} >

                        <FcGoogle size={22} />
                        <span>Sign up with Google</span>
                    </button>
                </form>



                {/* Terms */}
                <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                    By creating an account, I accept the{" "}
                    <span className="font-semibold text-gray-700">
                        Terms & Conditions
                    </span>{" "} &{" "}
                    <span className="font-semibold text-gray-700">
                        Privacy Policy
                    </span>
                </p>
            </div>
        </div>
    );
};