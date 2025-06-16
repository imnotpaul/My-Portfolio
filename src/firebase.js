// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrF6_-4q8NeYhySw_RtKxM1TI3I4ViPQ0",
  authDomain: "my-portfolio-fa9db.firebaseapp.com",
  projectId: "my-portfolio-fa9db",
  storageBucket: "my-portfolio-fa9db.firebasestorage.app",
  messagingSenderId: "930532495468",
  appId: "1:930532495468:web:13387d5bdceb1180c08849",
  measurementId: "G-GNXNRE6QP4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);