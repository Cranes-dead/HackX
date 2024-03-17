import { auth, db, doc, updateDoc } from './firebase.js';
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Extract form data
        const docId = document.getElementById('doc_id').value;
        const docName = document.getElementById('doc_name').value;
        const preDisease = document.getElementById('pre_disease').value;
        const test = document.getElementById('test').value;
        const impNote = document.getElementById('imp_note').value;
        const nextTestDocId = document.getElementById('next_test_doc_id').value;
        const nextTestDocName = document.getElementById('next_test_doc_name').value;
        const nextDocId = document.getElementById('next_doc_id').value;
        const nextDocName = document.getElementById('next_doc_name').value;
        const note = document.getElementById('note').value;

        // Create an object with the extracted data
        const doctorData = {
            docId,
            docName,
            preDisease,
            test,
            impNote,
            nextTestDocId,
            nextTestDocName,
            nextDocId,
            nextDocName,
            note
        };

        // Get the current user
        const user = auth.currentUser;
        if (user) {
            // Update the user's document in Firestore
            const userDocRef = doc(db, "users", user.uid);
            await updateDoc(userDocRef, doctorData);
            console.log("User document updated successfully");
        } else {
            console.error("No user is currently signed in");
        }
    });
});
