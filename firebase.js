import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCZ2qWPWNOtLh0h5jvyG6I7aM3UFq83iwI",
  authDomain: "graha-berlian.firebaseapp.com",
  projectId: "graha-berlian",
  storageBucket: "graha-berlian.firebasestorage.app",
  messagingSenderId: "496262788616",
  appId: "1:496262788616:web:2d4897cc838cd86f9343bd"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
