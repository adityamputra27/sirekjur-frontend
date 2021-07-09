const hamburger = document.querySelector(".hamburger");
const navbarNav = document.querySelector(".navbar-nav");
const navs = document.querySelectorAll(".navbar-nav li");
 
// Tambah event untuk hamburger
hamburger.addEventListener("click", () => {
  navbarNav.classList.toggle("open");
  navs.forEach(nav => {
    nav.classList.toggle("fade");
  });
});