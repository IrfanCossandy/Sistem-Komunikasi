import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDATeNk6Hwgto7Ja1Pm5s7gPYU43dS2KkA",
  authDomain: "sistem-komunikasi-laboratory.firebaseapp.com",
  projectId: "sistem-komunikasi-laboratory",
  storageBucket: "sistem-komunikasi-laboratory.firebasestorage.app",
  messagingSenderId: "900977815626",
  appId: "1:900977815626:web:c8ca22fb35743045f976b3",
  measurementId: "G-PSSSV8V85G"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };