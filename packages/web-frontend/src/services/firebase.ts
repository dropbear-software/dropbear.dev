// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3dTU4IFCav2DHb8kWXMqo82uynNNJpOg",
  authDomain: "dropbear.dev",
  projectId: "dropbear-website-prod",
  storageBucket: "dropbear-website-prod.appspot.com",
  messagingSenderId: "162976027192",
  appId: "1:162976027192:web:0cf5cd1eb837ddb35c0ccd",
  measurementId: "G-ZREYJ37R8R"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
