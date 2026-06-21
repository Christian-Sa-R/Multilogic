// para utilizar o js no header e footer
let tema = JSON.parse(localStorage.getItem("tema")) || "dark";

const body = document.querySelector("body");
const botaoTema = document.querySelector("#header-botao-tema");

function alternarTema() {
    if (tema === "light") {
        body.classList.add("dark");
        botaoTema.innerHTML = '<i class="fa-solid fa-sun"></i>';
        tema = "dark";
    } else {
        body.classList.remove("dark");
        botaoTema.innerHTML = '<i class="fa-solid fa-moon"></i>';
        tema = "light";
    }
    console.log(tema);
    localStorage.setItem("tema", JSON.stringify(`${tema}`));
}

function checarTema() {
    if (tema === "dark") {
        body.classList.add("dark");
        botaoTema.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        body.classList.remove("dark");
        botaoTema.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}

window.addEventListener("load", () => {
    checarTema();
});

botaoTema.addEventListener("click", () => {
    alternarTema();
});