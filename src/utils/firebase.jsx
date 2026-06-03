// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGhXpO5_KGkWZqicCa9mMJLOfsvArnd1M",
  authDomain: "netflix-gpt-2480c.firebaseapp.com",
  projectId: "netflix-gpt-2480c",
  storageBucket: "netflix-gpt-2480c.firebasestorage.app",
  messagingSenderId: "461060016328",
  appId: "1:461060016328:web:7f58120e6f162474573dfd",
  measurementId: "G-YJJBY8LV19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();