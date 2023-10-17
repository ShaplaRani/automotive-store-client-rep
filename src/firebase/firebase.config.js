// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGp4XyMIBemoYzzgEZY9I5RBhG3quphTo",
  authDomain: "automotive-store.firebaseapp.com",
  projectId: "automotive-store",
  storageBucket: "automotive-store.appspot.com",
  messagingSenderId: "650329326564",
  appId: "1:650329326564:web:97f469a2cf226b221f7df1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;