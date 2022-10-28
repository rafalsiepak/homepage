

{
    const welcome = () => {
        console.log("Witam serdecznie wszystkich!");
    }

<<<<<<< HEAD
    const onChangeHeaderClick = () => {
        const header__subHeader = document.querySelector(".header__subHeader");
        header__subHeader.classList.toggle("header__subHeaderSpecial");
=======
    const toggleHeader = () => {
        let header__subHeader = document.querySelector(".header__subHeader")
        header__subHeader.classList.toggle("header__subHeaderSpecial")
>>>>>>> ffd9cb7c6a051ab9a5ce6423ca78e870f28d97a1

    const toggleBackground = () => {
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
        button.addEventListener("click", toggleBackground);
        const press = document.querySelector(".js-press");
        press.addEventListener("click", toggleHeader);
        welcome();

    };

    init();

};