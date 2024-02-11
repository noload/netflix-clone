// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH46kt3vu2BWY66WJXdPKiDimhqskz7SI",
  authDomain: "netflix-clone-a1b1c.firebaseapp.com",
  projectId: "netflix-clone-a1b1c",
  storageBucket: "netflix-clone-a1b1c.appspot.com",
  messagingSenderId: "373022778614",
  appId: "1:373022778614:web:140001170ef56ff1f0f8d7",
  measurementId: "G-K8VT7ZSJ87",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
