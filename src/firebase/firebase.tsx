// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvJnfdccFQyWpAbgc-hxyZfTd8_aKAdXk",
  authDomain: "gardener-90fbd.firebaseapp.com",
  projectId: "gardener-90fbd",
  storageBucket: "gardener-90fbd.firebasestorage.app",
  messagingSenderId: "752708445221",
  appId: "1:752708445221:web:39743f2068ed5787970bcc",
  measurementId: "G-6PJ56PJDM6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);