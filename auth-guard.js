// src/auth-guard.js
import { auth } from "./firebase.js";
import { onAuthStateChanged, signOut } from "firebase/auth";

const logoutBtn = document.getElementById("logoutBtn");

onAuthStateChanged(auth, (user) => {
  if (!user) {
    // BELUM LOGIN → BALIK KE LOGIN
    window.location.href = "login.html";
  }
});

logoutBtn.addEventListener("click", async () => {
  await signOut(auth);
  window.location.href = "login.html";
});
