// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuQu6mtnUiLnPLBW279aYETQRxYA9W1Qk",
  authDomain: "knee-mri.firebaseapp.com",
  projectId: "knee-mri",
  storageBucket: "knee-mri.firebasestorage.app",
  messagingSenderId: "672700788482",
  appId: "1:672700788482:web:2bcfb1ccd9d473153e5c1b",
  measurementId: "G-SW8VRKX95B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Auth instance
const auth = getAuth(app);

// Initialize Google and Facebook providers
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };
