import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAneHxwSXMwxF1crjER1HSqJ8gpsVwa-Kk",
  authDomain: "sean-oneil-rosario.firebaseapp.com",
  projectId: "sean-oneil-rosario",
  storageBucket: "sean-oneil-rosario.appspot.com",
  messagingSenderId: "661684194789",
  appId: "1:661684194789:web:4bd8973fdf10b379afb30c",
  measurementId: "G-4SRGM90XJ3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const DataBase = getFirestore(app)