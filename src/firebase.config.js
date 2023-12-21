// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCb74_gJfpPr7Wl4xTNjIbrd4cQ2OmGp2k",
  authDomain: "dafare-web.firebaseapp.com",
  databaseURL:
    "https://dafare-web-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dafare-web",
  storageBucket: "dafare-web.appspot.com",
  messagingSenderId: "401099833551",
  appId: "1:401099833551:web:3da38c3872ac8111f5b7ba",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
  // Initialize Firebase
}

const app = initializeApp(firebaseConfig);
const databaseUser = getAuth(app);
const databaseData = getDatabase();

export { databaseUser, databaseData };
