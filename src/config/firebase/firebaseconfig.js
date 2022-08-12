// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUVmpTsP9P1hs2FhiPGSxiFzL9qIKpwZQ",
  authDomain: "hotel-app-5bad3.firebaseapp.com",
  projectId: "hotel-app-5bad3",
  storageBucket: "hotel-app-5bad3.appspot.com",
  messagingSenderId: "781834611508",
  appId: "1:781834611508:web:f5d17f37b39c5e55109361",
  measurementId: "G-8NTF6JREYR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
