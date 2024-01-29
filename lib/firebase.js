// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_WkNRVQzQQi61L-FtCL5EuuGOH-4avFU",
  authDomain: "valeriadelreal33.firebaseapp.com",
  projectId: "valeriadelreal33",
  storageBucket: "valeriadelreal33.appspot.com",
  messagingSenderId: "288703190031",
  appId: "1:288703190031:web:d970f45e086f5f517e3f7a",
  measurementId: "G-V58KPF2KT6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);