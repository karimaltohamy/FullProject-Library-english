// toggle mobil list

let togglMenu = document.querySelector(".toggle-menu");
let close = document.querySelector(".close-menu-mobil");
let menuMobil = document.querySelector(".menu-mobil");

togglMenu.addEventListener("click", () => {
  menuMobil.classList.add("open");
});

close.addEventListener("click", () => {
  menuMobil.classList.remove("open");
});

// toggle lang

let itemOpenLang = document.querySelector(".item-open-lang");
let menuLang = document.querySelector(".menu-lang");

itemOpenLang.addEventListener("click", () => {
  menuLang.classList.toggle("open-lang");
});
