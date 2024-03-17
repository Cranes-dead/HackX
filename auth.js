// auth.js
import { auth, createUserWithEmailAndPassword, db, collection, addDoc } from './firebase.js';

document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const sex = document.getElementById('sex').value;
        const mobile = document.getElementById('mobile').value;

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            // Sign-up successful, write additional details to Firestore
            const userDetails = {
                name: name,
                age: age,
                sex: sex,
                mobile: mobile,
                uid: userCredential.user.uid // Store the user's UID for reference
            };
            await addDoc(collection(db, "users"), userDetails);
            // Data written successfully, redirect to verification page
            window.location.href = 'verification.html';
        } catch (error) {
            console.error(error);
            // Handle errors here
            window.location.href = '404.html';
        }
    });
});