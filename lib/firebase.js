import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
require("dotenv").config();

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "nextfire-e3047.firebaseapp.com",
  projectId: "nextfire-e3047",
  storageBucket: "nextfire-e3047.appspot.com",
  messagingSenderId: "752398795255",
  appId: "1:752398795255:web:aadd4c03cb63dcf7af2ef2",
  measurementId: "G-6C5403Q60V",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
