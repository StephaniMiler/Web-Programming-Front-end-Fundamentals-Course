const btnMenu = document.getElementById("hamburger-button");
const menu = document.getElementById("menu");

btnMenu.classList.add("hamburger-button-js-enabled");
btnMenu.setAttribute("aria-expanded", "false");
menu.classList.add("menu-closed"); // Garante que o menu inicie fechado
menu.setAttribute("aria-hidden", "true");

btnMenu.addEventListener("click", function () {
    let expanded = this.getAttribute("aria-expanded") === "true";

    if (expanded) {
        menu.classList.add("menu-closed");  // Adiciona a classe para esconder
    } else {
        menu.classList.remove("menu-closed"); // Remove a classe para mostrar
        menu.querySelector("a").focus(); // Move o foco para o primeiro link do menu
    }

    this.setAttribute("aria-expanded", !expanded);
    menu.setAttribute("aria-hidden", expanded);
});

// Fechar menu ao pressionar a tecla "Esc"
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && btnMenu.getAttribute("aria-expanded") === "true") {
        btnMenu.click(); // Simula um clique para fechar o menu
    }
});
