// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyAaR5hS5d38coW3Yk8uTF9DPWtu8vj1xQc",
 authDomain: "hackx2.firebaseapp.com",
 databaseURL: "https://hackx2-default-rtdb.asia-southeast1.firebasedatabase.app",
 projectId: "hackx2",
 storageBucket: "hackx2.appspot.com",
 messagingSenderId: "774594653096",
 appId: "1:774594653096:web:d3833830f2bb6fa0194b9d",
 measurementId: "G-8ESQ2PYE8T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };