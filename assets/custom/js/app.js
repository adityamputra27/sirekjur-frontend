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

// Untuk dropdown search
const defaultOption = document.querySelector('.default_option');
const  dropdownUl = document.querySelector('.dropdown ul');
const dropdownUlLi = document.querySelectorAll('.dropdown ul li');

defaultOption.addEventListener('click', function () {
  dropdownUl.classList.toggle('active')
})

dropdownUlLi.forEach(dUlLi => {
  dUlLi.addEventListener('click', function () {
    let text = dUlLi.textContent
    console.log(text)
    defaultOption.innerHTML = text
    dropdownUl.classList.remove('active')
  })
})
