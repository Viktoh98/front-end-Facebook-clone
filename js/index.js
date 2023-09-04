const themeToggleButton = document.getElementById("toggle-btn");
const bodyElement = document.getElementById("body");


(function setLocalStorage() {
    console.log(document.documentElement.style.getPropertyValue("--SCREEN-HEIGHT"), 'hett')
    switch (localStorage.getItem("theme")) {
        case "dark":
            bodyElement.classList.replace("light-theme", "dark-theme");
            themeToggleButton.classList.toggle("toggle-btn-active");
            break;

        case "light":
            bodyElement.classList.replace("dark-theme", "light-theme");
            break;
        default:
            localStorage.setItem("theme", "light");
            break;
    }
}());

(function settingMenuToggle() {
    "use strict"
    const settingButton = document.getElementById("profileMenu");
    const settingMenu =document.getElementById("settingMenu");
    settingButton.addEventListener("click", function settingToggle() {
        settingMenu.classList.toggle("visible");
    });
}());

(function likeAnimation() {
    "use strict"
    const likeButtons = document.querySelectorAll(".fa-thumbs-up");

    for (let button of likeButtons) {
        button.addEventListener("click", function likeAction() {
            this.classList.toggle("liked");
            this.classList.toggle("fa");
        });
    }
}());

(function ThemeAnimation() {
    "use strict"
    themeToggleButton.addEventListener("click", function switchTheme() {
        themeToggleButton.classList.toggle("toggle-btn-active");
        bodyElement.classList.toggle("dark-theme");

        for (const theme of bodyElement.classList) {
            if ("dark-theme" === theme) {
                localStorage.setItem("theme", "dark");
                break
            }
            else {
                localStorage.setItem("theme", "light");
            }
        }
    });
}());
