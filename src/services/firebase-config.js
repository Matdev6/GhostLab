// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Para o Firestore (opcional)
import { getAuth } from "firebase/auth"; // Para autenticação (opcional)
import { getStorage } from "firebase/storage"; // Para armazenamento (opcional)

const firebaseConfig = {
    apiKey: "AIzaSyCsr8vgLBAkkd2NRZeJOCe9YNc3PPIXrB4",
    authDomain: "ghostlab-3575f.firebaseapp.com",
    databaseURL : "https://ghostlab-3575f-default-rtdb.firebaseio.com/",
    projectId: "ghostlab-3575f",
    storageBucket: "ghostlab-3575f.firebasestorage.app",
    messagingSenderId: "724737575261",
    appId: "1:724737575261:web:c9cc860d591d5cc38340b4",
    measurementId: "G-4FJM6PF14R"
  };

const app = initializeApp(firebaseConfig);

// Serviços opcionais
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, storage };
