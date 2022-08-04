// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfMJ30FutkTdoOMmAkPpzUpBBtpD72ZlY",
  authDomain: "proyecto-ecommerce-react.firebaseapp.com",
  projectId: "proyecto-ecommerce-react",
  storageBucket: "proyecto-ecommerce-react.appspot.com",
  messagingSenderId: "283720662810",
  appId: "1:283720662810:web:e22ff6d8dfd87cfe8476a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
    return app
}