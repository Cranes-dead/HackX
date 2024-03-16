// auth.js
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './firebase.js';

document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Sign-up successful, redirect to verification page
                window.location.href = 'verification.html';
            })
            .catch((error) => {
                console.error(error);
                // Handle errors here
            });
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Login successful, redirect to dashboard or home page
                window.location.href = 'dashboard.html';
            })
            .catch((error) => {
                console.error(error);
                // Handle errors here
            });
    });
});
