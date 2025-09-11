const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".hrf");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

//form
const form = document.getElementById("messageForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formMessage.textContent = "Terima kasih! Pesan Anda sudah terkirim.";
  form.reset();
});
