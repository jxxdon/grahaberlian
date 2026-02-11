import { auth } from "./firebase.js";
import { onAuthStateChanged, signOut } from
  "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.replace("login.html");
  }
});

window.logout = async () => {
  await signOut(auth);
  window.location.replace("login.html");
};
