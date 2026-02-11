import { auth } from "./firebase.js";
import { signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

export function loadLayout(titleText = "Dashboard") {
  document.body.insertAdjacentHTML("afterbegin", `
    <div class="header">
      <div class="hamburger" onclick="openDrawer()">☰</div>
      <div class="title">${titleText}</div>
    </div>

    <div class="overlay" onclick="closeDrawer()"></div>

    <div class="drawer" id="drawer">
      <h2>Graha Berlian</h2>
      <div class="menu">
        <a href="dashboard.html">🏠 Home</a>
        <a href="pembelian.html">💰 Pembelian</a>
        <a href="penjualan.html">💰 Penjualan</a>
        <a href="Produk.html">📂 Produk</a>
        <a href="kategori.html">📂 Kategori</a>
        <a href="pembayaran.html">📂 Pembayaran</a>
        <a href="konsumen.html">👤 Konsumen</a>
        <a href="suplier.html">👤 Supplier</a>
        <a href="laporan.html">📊 Laporan</a>
        <a href="hutang-pihutang.html">📕 Hutang - Piutang</a>
        <a href="admin.html">⚙️ Admin</a>
        <a href="#" class="logout" onclick="logout()">🚪 Logout</a>
      </div>
    </div>
  `);

  window.openDrawer = function () {
    document.getElementById("drawer").classList.add("active");
    document.querySelector(".overlay").classList.add("active");
  };

  window.closeDrawer = function () {
    document.getElementById("drawer").classList.remove("active");
    document.querySelector(".overlay").classList.remove("active");
  };

  window.logout = async function () {
    await signOut(auth);
    window.location.href = "login.html";
  };
}
