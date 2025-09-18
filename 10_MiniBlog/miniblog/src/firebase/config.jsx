import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmznl3LQ_C4gpcmLmYk-c0XOE7suzK9ds",
  authDomain: "miniblog---curso-react-57d63.firebaseapp.com",
  projectId: "miniblog---curso-react-57d63",
  storageBucket: "miniblog---curso-react-57d63.firebasestorage.app",
  messagingSenderId: "124686909796",
  appId: "1:124686909796:web:8c145e60016d36388b7a71"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };