// Import necessary Firebase modules
import { auth, db, collection, addDoc, updateDoc, doc } from './firebase.js';

// Function to handle form submission
async function handleFormSubmit(e) {
    e.preventDefault();

    // Extract form data
    const docId = auth.currentUser.uid; // Assuming the document ID is the user's UID
    const doc_id = document.getElementById('doc_id').value;
    const doc_name = document.getElementById('doc_name').value;
    const pre_disease = document.getElementById('pre_disease').value;
    const test = document.getElementById('test').value;
    const imp_note = document.getElementById('imp_note').value;
    const next_test_doc_id = document.getElementById('next_test_doc_id').value;
    const next_test_doc_name = document.getElementById('next_test_doc_name').value;
    const next_doc_id = document.getElementById('next_doc_id').value;
    const next_doc_name = document.getElementById('next_doc_name').value;
    const note = document.getElementById('note').value;

    // Update Firestore document
    try {
        const docRef = doc(db, "doctors", docId); // Assuming "doctors" is the collection name
        await updateDoc(docRef, {
            doc_id: doc_id,
            doc_name: doc_name,
            pre_disease: pre_disease,
            test: test,
            imp_note: imp_note,
            next_test_doc_id: next_test_doc_id,
            next_test_doc_name: next_test_doc_name,
            next_doc_id: next_doc_id,
            next_doc_name: next_doc_name,
            note: note
        });
        console.log("Document successfully updated!");
    } catch (error) {
        console.error("Error updating document: ", error);
    }
}

// Listen for form submission
document.getElementById('yourFormId').addEventListener('submit', handleFormSubmit);

// Listen for authentication state changes
auth.onAuthStateChanged(user => {
    if (user) {
        // User is signed in, you can now show the form or enable form submission
        console.log("User is signed in:", user);
    } else {
        // No user is signed in, redirect to login page or show a message
        console.log("No user is signed in.");
    }
});