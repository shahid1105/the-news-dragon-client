// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCGejZU5DpobVXngJ0CNxvwWpuI_KXJRx4",
    authDomain: "the-news-dragon-client-edc17.firebaseapp.com",
    projectId: "the-news-dragon-client-edc17",
    storageBucket: "the-news-dragon-client-edc17.appspot.com",
    messagingSenderId: "487760938853",
    appId: "1:487760938853:web:850d0d8b6c28f30714c38c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;