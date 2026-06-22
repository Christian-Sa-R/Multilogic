import { carregarCurso } from "./listagemCursos.js";
import * as telas from "../variaveis/telas.js";
import { lista_cursos_professor } from "../variaveis/listas.js";
import {
  divMensagem,
  gridConteudos,
  linhaFiltrosBotoes,
} from "../variaveis/containers.js";
import { criarMensagem } from "../estruturas/criarMensagem.js";
import { criarBotaoFiltroBotoes } from "../estruturas/criarBotoes.js";
import { lista_cursos } from "../variaveis/cursos.js";

export function carregarCursosProfessor() {
  linhaFiltrosBotoes.style.display = "none";
  if (lista_cursos_professor.length === 0) {
    gridConteudos.style.display = "none"; //oculta a grid de conteudos
    criarMensagem("Você ainda não cadastrou nenhum curso :(");
    console.log("if true");
  } else {
    divMensagem.style.display = "none"; //oculta a div de mensagem
    gridConteudos.style.display = "grid"; //exibe a grid de conteudos
    for (const curso in lista_cursos_professor) {
      if (!Object.hasOwn(lista_cursos_professor, curso)) continue;
      carregarCurso(lista_cursos_professor[curso], true);
    }
    console.log("else");
  }
}

window.addEventListener("load", () => {
  //Carrega os cursos
  if (telas.telaMeusCursos) {
    carregarCursosProfessor();
  }
});
