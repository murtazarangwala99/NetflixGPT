// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUkCJW0fKD0ZZRdtEjMXOljMuuP5j879Q",
  authDomain: "netflixgpt-m23.firebaseapp.com",
  projectId: "netflixgpt-m23",
  storageBucket: "netflixgpt-m23.appspot.com",
  messagingSenderId: "1025357575132",
  appId: "1:1025357575132:web:7f8daf1f461b2496c79519",
  measurementId: "G-238R5NSFYZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics = getAnalytics(app);
export const auth = getAuth();
