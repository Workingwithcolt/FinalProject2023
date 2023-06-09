// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0HoI7FP6MsVsZYoVHzEtaUQcUMaWXaws",
  authDomain: "otp-app-2373e.firebaseapp.com",
  projectId: "otp-app-2373e",
  storageBucket: "otp-app-2373e.appspot.com",
  messagingSenderId: "320293352941",
  appId: "1:320293352941:web:28b909e016153b6c3823e4",
  measurementId: "G-KC3WBWVRH5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);