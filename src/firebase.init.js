// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT6Pt8YGBZoPwsLOyEr9bzFqxHvAIeCRs",
  authDomain: "ema-john-simple-36002.firebaseapp.com",
  projectId: "ema-john-simple-36002",
  storageBucket: "ema-john-simple-36002.appspot.com",
  messagingSenderId: "51614764500",
  appId: "1:51614764500:web:bab9557318139dbe0c5a41"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;