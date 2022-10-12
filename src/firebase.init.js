// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "fireabse/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCTxSP6fsHHyCTWOx9B-qVaPJYWQ0NJl-g",
    authDomain: "eventmanagemen-80ab7.firebaseapp.com",
    projectId: "eventmanagemen-80ab7",
    storageBucket: "eventmanagemen-80ab7.appspot.com",
    messagingSenderId: "474675158669",
    appId: "1:474675158669:web:88a1f4fb5602ce4f888cc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;