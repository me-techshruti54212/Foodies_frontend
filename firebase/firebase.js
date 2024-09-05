import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"
import {getDatabase} from "firebase/database"
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,sendPasswordResetEmail} from "firebase/auth";
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: "foodies-121fc.firebaseapp.com",
    databaseURL: "https://foodies-121fc-default-rtdb.firebaseio.com",
    projectId: "foodies-121fc",
    storageBucket: "foodies-121fc.appspot.com",
    messagingSenderId: "811147809066",
    appId: "1:811147809066:web:1a184b2539435d8f754e53",
    measurementId: "G-WR9JQ7MS4X"
  };
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const analytics = getAnalytics(app);
  export const storage=getStorage();
  export const database=getDatabase()
  export const auth=getAuth()