import { auth, signInWithEmailAndPassword } from './firebase.js';


document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
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
                // Handle errors here;
            });
    });
});