import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzfIgVC-JPyV7hLDAsH_28cVoZDpdFK8U",
    authDomain: "hackx3-92b94.firebaseapp.com",
    projectId: "hackx3-92b94",
    storageBucket: "hackx3-92b94.appspot.com",
    messagingSenderId: "543033204282",
    appId: "1:543033204282:web:971f88eae0abdd00555f03"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, db, collection, addDoc };