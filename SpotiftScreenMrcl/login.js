
let login_modes = document.querySelectorAll("a");

login_modes.forEach(login_mode => {
    login_mode.addEventListener("click", e => {
        let selected_mode = document.querySelector("a.selected");
        selected_mode.classList.remove("selected");
        login_mode.classList.add("selected");
    });
});