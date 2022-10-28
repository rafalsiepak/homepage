

{
    const welcome = () => {
        console.log("Witam serdecznie wszystkich!");
    }

    const toggleHeader = () => {
        let header__subHeader = document.querySelector(".header__subHeader")
        header__subHeader.classList.toggle("header__subHeaderSpecial")

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

}