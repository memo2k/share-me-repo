import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBOPY9qkT7ZbaWbxpunVTiJE0RZ3TveKz8",
    authDomain: "share-me-firebase.firebaseapp.com",
    projectId: "share-me-firebase",
    storageBucket: "share-me-firebase.appspot.com",
    messagingSenderId: "597372854431",
    appId: "1:597372854431:web:7a3792f12deac5e61f42aa",
    measurementId: "G-30G92VSV4E"
};

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);