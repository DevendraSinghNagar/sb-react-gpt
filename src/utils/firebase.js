// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4LHOHPr67p-Y9ogMo7Q0lFSZHKFRUxP0",
  authDomain: "sbgpt-53f69.firebaseapp.com",
  projectId: "sbgpt-53f69",
  storageBucket: "sbgpt-53f69.firebasestorage.app",
  messagingSenderId: "430367568609",
  appId: "1:430367568609:web:c40367ee2ba48f08e6bda0",
  measurementId: "G-6ZFYKWHEJ5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
