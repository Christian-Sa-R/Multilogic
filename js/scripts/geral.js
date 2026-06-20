// para utilizar o js no header e footer
let temaEscuro = true;

const body = document.querySelector("body");
const botaoTema = document.querySelector("#header-botao-tema");

function alternarTema() {
    temaEscuro = !temaEscuro;

    if (temaEscuro) {
        body.classList.add("dark");
        botaoTema.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        body.classList.remove("dark");
        botaoTema.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}

botaoTema.addEventListener("click", () => {
    alternarTema();
});