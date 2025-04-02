// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDd7TRM4yYf3JEzj2OY9lXgDzRtBvkX1SA",
  authDomain: "agentsquad-33cb2.firebaseapp.com",
  projectId: "agentsquad-33cb2",
  storageBucket: "agentsquad-33cb2.firebasestorage.app",
  messagingSenderId: "914462813836",
  appId: "1:914462813836:web:7b66fc19e55524088e95a9",
  measurementId: "G-Q9TPLZ814H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// Initialize Analytics only on client side
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export { app, auth, db };
