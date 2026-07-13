import { telaAreaProfessor } from "../variaveis/telas.js";
import { divConteudo } from "../variaveis/containers.js";
import { carregarCursos } from "./listagemCursos.js";
import { lista_cursos_professor } from "../variaveis/listas.js";

const botaoTodos = document.getElementById("main-botao-todos");

window.addEventListener("DOMContentLoaded", () => {
  if (telaAreaProfessor) {
    carregarCursos(lista_cursos_professor, {
      mensagem: "Você ainda não cadastrou nenhum curso... :(",
    });
    divConteudo.style.display = "flex";
  }
});

if (botaoTodos && telaAreaProfessor) {
  botaoTodos.addEventListener("click", () => {
    window.location.href = "./meusCursos.html";
  });
}
