// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1w73bkU-pAiaBkCtjyW9caM1SHRhO4cI",
  authDomain: "user-auth-b2296.firebaseapp.com",
  projectId: "user-auth-b2296",
  storageBucket: "user-auth-b2296.appspot.com",
  messagingSenderId: "275292270271",
  appId: "1:275292270271:web:ad8c98ee0f7cc2f49e600a",
  measurementId: "G-B25NG5PDLB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {app, analytics, auth};