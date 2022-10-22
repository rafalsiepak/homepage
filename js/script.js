

let press = document.querySelector(".js-press")

let header__subHeader = document.querySelector(".header__subHeader")

press.addEventListener("click", () => {
    header__subHeader.classList.toggle("header__subHeaderSpecial");

});

let button = document.querySelector(".js-button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".js-themeName")

button.addEventListener("click", () => {
    body.classList.toggle("js-dark");

    if (body.classList.contains("js-dark")) {
        themeName.innerText = "jasny";
    } else {
        themeName.innerText = "ciemny";
    }
});