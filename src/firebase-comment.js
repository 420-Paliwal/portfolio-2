import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpxBhRZIyJASWKkw49Zi4FkIvwfqbCiJ4",
  authDomain: "harsh-portfolio-0420.firebaseapp.com",
  projectId: "harsh-portfolio-0420",
  storageBucket: "harsh-portfolio-0420.firebasestorage.app",
  messagingSenderId: "548573070351",
  appId: "1:548573070351:web:a86078673a4a65b601cf7a",
  measurementId: "G-KMEE8Z8MHV"
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };