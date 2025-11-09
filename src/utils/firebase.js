import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCj6dQdoBhC248DzwjKROtx9GITJtlGyzo",
  authDomain: "sbreactapp-22ca3.firebaseapp.com",
  projectId: "sbreactapp-22ca3",
  storageBucket: "sbreactapp-22ca3.firebasestorage.app",
  messagingSenderId: "160258445275",
  appId: "1:160258445275:web:ccc154b0316e705cec21fe",
  measurementId: "G-B5FBGXQMD8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
