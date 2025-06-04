import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  // check 
  apiKey: "AIzaSyDpxBhRZIyJASWKkw49Zi4FkIvwfqbCiJ4",
  authDomain: "harsh-portfolio-0420.firebaseapp.com",
  projectId: "harsh-portfolio-0420",
  storageBucket: "harsh-portfolio-0420.firebasestorage.app",
  messagingSenderId: "548573070351",
  appId: "1:548573070351:web:a86078673a4a65b601cf7a",
  measurementId: "G-KMEE8Z8MHV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);


export { db, collection, addDoc };