// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDydxfbnLCUb4M__4_S4WnNhEBpbuJLqdY",
  authDomain: "netflix-gpt-333a9.firebaseapp.com",
  projectId: "netflix-gpt-333a9",
  storageBucket: "netflix-gpt-333a9.appspot.com",
  messagingSenderId: "9575231939",
  appId: "1:9575231939:web:f9ef3793220cad56178d76",
  measurementId: "G-0TPJL2GV49",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
