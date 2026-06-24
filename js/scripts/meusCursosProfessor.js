import { carregarCurso, carregarCursos } from "./listagemCursos.js";
import * as telas from "../variaveis/telas.js";
import { lista_cursos_professor } from "../variaveis/listas.js";
import {
  divMensagem,
  gridConteudos,
  linhaBotoesInferior,
  linhaFiltrosBotoes,
} from "../variaveis/containers.js";
import { criarMensagem } from "../estruturas/criarMensagem.js";
import { criarBotaoFiltroBotoes } from "../estruturas/criarBotoes.js";

let botaoCadastroCurso;

function carregarBotoes() {
  //limpa a linha e exibe
  linhaFiltrosBotoes.innerHTML = "";
  linhaFiltrosBotoes.style.display = "none";
  linhaBotoesInferior.innerHTML = "";
  linhaBotoesInferior.style.display = "flex";
  // cria o botao de adicionar curso
  linhaBotoesInferior.appendChild(
    criarBotaoFiltroBotoes("botao-adicionar-curso", "Cadastrar curso", "+"),
  );
  botaoCadastroCurso = document.querySelector("#botao-adicionar-curso");
}

function chamarCarregarCursos() {
  if (lista_cursos_professor.length === 0) {
    linhaFiltrosBotoes.style.display = "none";
    gridConteudos.style.display = "none"; //oculta a grid de conteudos
    linhaBotoesInferior.style.display = "none";
    criarMensagem("Você ainda não cadastrou nenhum curso :(");
  } else {
    carregarCursos(lista_cursos_professor, true);
  }
}

export function carregarElementosCursos() {
  carregarBotoes();
  chamarCarregarCursos();
}

window.addEventListener("load", () => {
  //Carrega os cursos
  if (telas.telaMeusCursos) {
    carregarElementosCursos();
  }
});
