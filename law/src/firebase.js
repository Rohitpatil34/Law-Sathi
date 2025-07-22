// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpnxXKtXTYU6_op48MdY4bgUGfePcMVoA",
  authDomain: "lawsathi-c4423.firebaseapp.com",
  projectId: "lawsathi-c4423",
  storageBucket: "lawsathi-c4423.appspot.com",  // fixed typo in domain
  messagingSenderId: "483406025489",
  appId: "1:483406025489:web:f91f5fd7535abe8e48f2b0",
  measurementId: "G-65X97FJLN9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and Google Provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
