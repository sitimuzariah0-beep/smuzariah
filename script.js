const USERNAME = "ecocoquette";
const PASSWORD = "eco123";

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === USERNAME && pass === PASSWORD) {
    localStorage.setItem("isLogin", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Username atau password salah!");
  }
}

function checkLogin() {
  if (localStorage.getItem("isLogin") !== "true") {
    window.location.href = "index.html";
  }
}

function logout() {
  localStorage.removeItem("isLogin");
  window.location.href = "index.html";
}

function classifyImage() {
  const result = document.getElementById("result");
  const data = [
    "🌱 Ramah Lingkungan",
    "⚠️ Kurang Ramah Lingkungan",
    "❌ Tidak Ramah Lingkungan"
  ];

  result.innerHTML =
    "Hasil Klasifikasi: <b>" +
    data[Math.floor(Math.random() * data.length)] +
    "</b>";
}
