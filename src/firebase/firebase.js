// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { Firestore, getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyBgoE8RfaLPgBSHB53e31b9OfiZ2PXXstE",
  authDomain: "social-clone-37f7e.firebaseapp.com",
  projectId: "social-clone-37f7e",
  storageBucket: "social-clone-37f7e.appspot.com",
  messagingSenderId: "211654887529",
  appId: "1:211654887529:web:fef95b587d7eb787b27af8",
  measurementId: "G-CK3NQCE5RV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, auth, firestore, storage};