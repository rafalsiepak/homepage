
{

    const welcome = () => {
        console.log("Witam serdecznie wszystkich!");
    }

    const onChangeHeaderClick = () => {
        const header__subHeader = document.querySelector(".header__subHeader");
        header__subHeader.classList.toggle("header__subHeaderSpecial");

    const onChangeBackgroundClick = () => {
        const body = document.querySelector(".body");
        const themeName = document.querySelector(".js-themeName");
        body.classList.toggle("js-dark");

        if (body.classList.contains("js-dark")) {
            themeName.innerText = "jasny";
        } else {
            themeName.innerText = "ciemny";
        }
    };

    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", onChangeBackgroundClick);
        const press = document.querySelector(".js-press");
        press.addEventListener("click", onChangeHeaderClick);
        welcome();

    };

    init();

};