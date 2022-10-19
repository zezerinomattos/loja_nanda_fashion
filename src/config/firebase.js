import firebase from 'firebase';

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
export default firebase.initializeApp(firebaseConfig);