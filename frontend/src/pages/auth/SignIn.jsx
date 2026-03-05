import axios from "axios";
import React, { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { serverUrl } from "../../App.jsx";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../utils/firebase.js";
import { ErrorMessage } from "../../utils/ErrorMessage.jsx";
import { LoadingBtn } from "../../components/ui/Button/Button.jsx";


export const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [err, setErr] = useState();
  const [LoadingButton, setLoadingButton] = useState(false);

  // Colors
  const primaryColor = "#f97316";
  const hoverColor = "#ea580c";
  const bgColor = "#f3f4f6";
  const borderColor = "#e5e7eb";

  const handleSignIn = async (e) => {
    try {
      e.preventDefault();
      setLoadingButton(true);
      const result = await axios.post(`${serverUrl}/api/auth/signin`, {
        email, password
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

      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const data = await axios.post(`${serverUrl}/api/auth/google-auth`, {
        email: result.user.email,
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
        <h1 className="text-3xl font-bold mb-2">Sign In</h1>
        <p className="text-gray-600 mb-6" onClick={() => navigate("/signup")}> or{" "}
          <span className="font-medium cursor-pointer hover:underline"
            style={{ color: primaryColor }} >
            create your account
          </span>
        </p>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSignIn}>

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

          <p className="text-gray-600 mb-6" onClick={() => navigate("/forgot-password")}>
            <span className="font-medium cursor-pointer hover:underline"
              style={{ color: primaryColor }} >
              Forgot Password
            </span>
          </p>

          <ErrorMessage message={err} />
          <LoadingBtn type="submit" text="Continue" loading={LoadingButton} primaryColor={primaryColor} hoverColor={hoverColor} />

          <button type="button" onClick={handleGoogleAuth}
            className="w-full flex items-center justify-center gap-3 font-semibold py-3 rounded-md transition duration-300 border"
            style={{ border: `1px solid ${borderColor}`, backgroundColor: "#ffffff", }}

            onMouseEnter={(e) => { e.currentTarget.style.borderColor = hoverColor; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = borderColor; }} >

            <FcGoogle size={22} />
            <span>Sign In with Google</span>
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