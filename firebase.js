// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxL6nB3xa6e8bgGiVNMfJjsFjnPuFMNaE",
  authDomain: "reat-notes-f2360.firebaseapp.com",
  projectId: "reat-notes-f2360",
  storageBucket: "reat-notes-f2360.appspot.com",
  messagingSenderId: "218383944161",
  appId: "1:218383944161:web:728cb86165e3a902c5aaa0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const notesCollection = collection(db, "notes")