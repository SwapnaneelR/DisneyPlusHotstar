import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCExRUW5kzwHqy85W-3Kyj2J1wWMg8mb8M",
  authDomain: "disney-plus-26.firebaseapp.com",
  projectId: "disney-plus-26",
  storageBucket: "disney-plus-26.appspot.com",
  messagingSenderId: "436051344842",
  appId: "1:436051344842:web:5f0b201a1a9e45774c6333",
  measurementId: "G-PQSD0J0284"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); // Pass app to getAuth
const provider = new GoogleAuthProvider();
const storage = getStorage(app); // Pass app to getStorage

export default db;
export { auth, provider, storage };
