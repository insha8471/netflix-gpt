// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALohsna2sMtTDNrJlLlBenRvR0eLEBbCA",
  authDomain: "netflix-gpt-2527c.firebaseapp.com",
  projectId: "netflix-gpt-2527c",
  storageBucket: "netflix-gpt-2527c.appspot.com",
  messagingSenderId: "252450451686",
  appId: "1:252450451686:web:93dc692cd209c55b1e8b27",
  measurementId: "G-12EK127C5D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();