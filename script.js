// =========================
// MENU
// =========================

const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

menu.addEventListener("click", () => {
  nav.classList.toggle("open");
});


// =========================
// NAVIGATION
// =========================

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});


// =========================
// BACK TO TOP
// =========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

  if (window.scrollY > 500) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }

});

topBtn.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});
