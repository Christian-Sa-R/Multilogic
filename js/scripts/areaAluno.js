import { telaAreaAluno } from "../variaveis/telas.js";
import { divConteudo } from "../variaveis/containers.js";
import { carregarCursos } from "./listagemCursos.js";
import { lista_cursos_matriculados } from "../variaveis/listas.js";

const botaoTodos = document.getElementById("main-botao-todos");

window.addEventListener("DOMContentLoaded", () => {
  if (telaAreaAluno) {
    carregarCursos(lista_cursos_matriculados, {
      mensagem: "Você ainda não está matriculado em nenhum curso... :(",
    });
    divConteudo.style.display = "flex";
  }
});

if (botaoTodos && telaAreaAluno) {
  botaoTodos.addEventListener("click", () => {
    window.location.href = "./areaEstudo.html";
  });
}
