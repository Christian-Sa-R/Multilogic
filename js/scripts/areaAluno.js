import { telaAreaAluno } from "../variaveis/telas.js";
import { divConteudo } from "../variaveis/containers.js";
import { chamarCarregarCursos } from "./meusCursosAluno.js";

window.addEventListener("DOMContentLoaded", () => {
  if (telaAreaAluno) {
    chamarCarregarCursos();
    divConteudo.style.display = "flex";
  }
});