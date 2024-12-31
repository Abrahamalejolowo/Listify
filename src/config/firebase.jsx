// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABs1sfcc5Oyxn58Q297QEBg3s57eqTZu0",
  authDomain: "listify-e4f7c.firebaseapp.com",
  projectId: "listify-e4f7c",
  storageBucket: "listify-e4f7c.firebasestorage.app",
  messagingSenderId: "136989112904",
  appId: "1:136989112904:web:a24a80be1b1e8fe7d7b67d",
  measurementId: "G-9F0F6F0WXG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
