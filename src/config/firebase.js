import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "Minha chave Key",
  authDomain: "Meu dominio",
  projectId: "nandafashion-2a31e",
  storageBucket: "nandafashion-2a31e.appspot.com",
  messagingSenderId: "Numero",
  appId: "Numero",
  measurementId: "G-QM6ZTV506Y"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
