import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArNdvSHCXChcmh5csONScL5PPC7Xd5BPc",
  authDomain: "nandafashion-2a31e.firebaseapp.com",
  projectId: "nandafashion-2a31e",
  storageBucket: "nandafashion-2a31e.appspot.com",
  messagingSenderId: "643806885103",
  appId: "1:643806885103:web:9d9faf209814c63c16971a",
  measurementId: "G-QM6ZTV506Y"
};

// Initialize Firebase
const firestoreApp = initializeApp(firebaseConfig);

const analytics = getAnalytics(firestoreApp);
const db = getFirestore(firestoreApp)
const auth = getAuth(firestoreApp)

export {db, auth, analytics};