
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { collection, getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD4ZYCLA0z33ERGaIVu-jS5kTNAgA11bkk",
    authDomain: "pokedex-f58ad.firebaseapp.com",
    projectId: "pokedex-f58ad",
    storageBucket: "pokedex-f58ad.appspot.com",
    messagingSenderId: "43181611051",
    appId: "1:43181611051:web:8ceae3cb017dd62e9ef26e",
    measurementId: "G-K4GRW0JDGL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)
export const firebaseDB = getFirestore(app)

export const usersRef = collection(firebaseDB, 'users')
export const pokemonListRef = collection(firebaseDB, 'pokemonList')