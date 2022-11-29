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

// toggle web list

let iconListWeb = document.querySelector(".icon-list-web");
let aside = document.querySelector(".aside");
let content = document.querySelector(".content");

iconListWeb.addEventListener("click", () => {
  aside.classList.toggle("active-aside");
  content.classList.toggle("active-margin");
});
