import { carregarCurso, carregarCursos } from "./listagemCursos.js";
import * as telas from "../variaveis/telas.js";
import { lista_cursos_professor } from "../variaveis/listas.js";
import {
  divMensagem,
  gridConteudos,
  linhaFiltrosBotoes,
} from "../variaveis/containers.js";
import { criarMensagem } from "../estruturas/criarMensagem.js";
import { criarBotaoFiltroBotoes } from "../estruturas/criarBotoes.js";

function chamarCarregarCursos() {
  if (lista_cursos_professor.length === 0) {
    gridConteudos.style.display = "none"; //oculta a grid de conteudos
    criarMensagem("Você ainda não cadastrou nenhum curso :(");
  } else {
    linhaFiltrosBotoes.style.display = "none";
    carregarCursos(lista_cursos_professor, true);
  }
}

export function carregarElementosCursos() {
  chamarCarregarCursos();
}

window.addEventListener("load", () => {
  //Carrega os cursos
  if (telas.telaMeusCursos) {
    carregarElementosCursos();
  }
});
