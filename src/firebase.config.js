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
  apiKey: "AIzaSyATPpZGtBqI98qNjSdjEEGp2l450QHz6X4",
  authDomain: "allora-web.firebaseapp.com",
  projectId: "allora-web",
  storageBucket: "allora-web.appspot.com",
  messagingSenderId: "885291819285",
  appId: "1:885291819285:web:307f9b348d6d0c6fe2891c",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
  // Initialize Firebase
}

const app = initializeApp(firebaseConfig);
const databaseUser = getAuth(app);
const databaseData = getDatabase();

export { databaseUser, databaseData };
