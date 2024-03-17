// dashboard.js
import { auth, db, collection, getDocs, query, where } from './firebase.js';

document.addEventListener('DOMContentLoaded', () => {
    const user = auth.currentUser;
    if (user) {
        // User is signed in, fetch user details from Firestore
        const userCollection = collection(db, "users");
        const q = query(userCollection, where("uid", "==", user.uid));

        getDocs(q).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                const userDetails = doc.data();
                document.getElementById('userName').textContent = `Name: ${userDetails.name}`;
                document.getElementById('userEmail').textContent = `Email: ${userDetails.email}`;
                // Update other fields as needed
            });
        }).catch((error) => {
            console.error("Error getting user details: ", error);
        });
    } else {
        // No user is signed in, redirect to login page
        window.location.href = 'login.html';
    }
});