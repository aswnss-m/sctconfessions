// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";
import { collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJtlg1rtLvwYl9fXrJ_PkWOrZjyQKLkd8",
  authDomain: "sctconfession-1807f.firebaseapp.com",
  projectId: "sctconfession-1807f",
  storageBucket: "sctconfession-1807f.appspot.com",
  messagingSenderId: "610304282711",
  appId: "1:610304282711:web:e96b542b48996017009312",
  measurementId: "G-PJENH8K80X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
export const confessionRef = collection(db, "Confessions");