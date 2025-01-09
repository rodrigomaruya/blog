import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWvzoMGqqW0j9yyB6LweJar5LXIBeIcbs",
  authDomain: "nippo-go.firebaseapp.com",
  projectId: "nippo-go",
  storageBucket: "nippo-go.firebasestorage.app",
  messagingSenderId: "26080822898",
  appId: "1:26080822898:web:878b7d3b5565593a17a4eb",
  measurementId: "G-WB6CGMZ5M9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
