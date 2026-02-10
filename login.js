// src/login.js
import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";

const loginBtn = document.getElementById("loginBtn");
const errorEl = document.getElementById("error");

loginBtn.addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  errorEl.textContent = "";

  if (!email || !password) {
    errorEl.textContent = "Email dan password wajib diisi";
    return;
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);
    // BERHASIL LOGIN
    window.location.href = "dashboard.html";
  } catch (err) {
    errorEl.textContent = "Login gagal";
  }
});
