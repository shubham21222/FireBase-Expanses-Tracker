// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIaErfKfgrBlrxvZz0R-zcneg6yYXrP0M",
  authDomain: "ecommerce-876f1.firebaseapp.com",
  projectId: "ecommerce-876f1",
  storageBucket: "ecommerce-876f1.appspot.com",
  messagingSenderId: "1056133958666",
  appId: "1:1056133958666:web:20095bca227b00570ce3f3",
  measurementId: "G-WVCTY1E453"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

