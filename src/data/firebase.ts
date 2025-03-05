import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, browserLocalPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCahmihjE4vo9SYWYGXk-jYQNFwwz-kW68",
  authDomain: "fintrack-b1861.firebaseapp.com",
  projectId: "fintrack-b1861",
  storageBucket: "fintrack-b1861.firebasestorage.app",
  messagingSenderId: "114730257889",
  appId: "1:114730257889:web:8dff48fafd7e80231ed6a0",
  measurementId: "G-EB2CLSVZPQ",
};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);

const auth = initializeAuth(firebase, {
  persistence: browserLocalPersistence,
});

export default { db, auth };
