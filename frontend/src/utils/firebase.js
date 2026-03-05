// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "swigy-b62da.firebaseapp.com",
  projectId: "swigy-b62da",
  storageBucket: "swigy-b62da.firebasestorage.app",
  messagingSenderId: "700520930077",
  appId: "1:700520930077:web:d377c1503efe4b27e11ff4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {app,auth};