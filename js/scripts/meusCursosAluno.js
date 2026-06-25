import { criarMensagem } from "../estruturas/criarMensagem.js";
import { lista_cursos } from "../variaveis/cursos.js";
import { lista_cursos_matriculados } from "../variaveis/listas.js";
import { telaAreaEstudo } from "../variaveis/telas.js";
import { carregarCursos } from "./listagemCursos.js";
import { criarBotaoFiltroBotoes } from "../estruturas/criarBotoes.js";
import {
  gridConteudos,
  linhaBotoesInferior,
  linhaFiltrosBotoes,
} from "../variaveis/containers.js";

let estadoFiltroMatriculados, botaoFiltroMatriculados;

function carregarBotoesCursos() {
  linhaFiltrosBotoes.innerHTML = "";
  linhaFiltrosBotoes.style.display = "flex";
  linhaBotoesInferior.innerHTML = "";
  linhaBotoesInferior.style.display = "none";
  linhaFiltrosBotoes.append(
    criarBotaoFiltroBotoes("main-botao", "Exibir apenas matriculados"),
  );
  botaoFiltroMatriculados = document.querySelector("#main-botao");
  if (botaoFiltroMatriculados) {
    if (estadoFiltroMatriculados) {
      //adiciona a classe com o estado atual
      botaoFiltroMatriculados.classList.add("botao-true");
    } else {
      botaoFiltroMatriculados.classList.add("botao-false");
    }
    botaoFiltroMatriculados.addEventListener("click", () => {
      filtrarMatriculados();
    });
  }
}
function filtrarMatriculados() {
  if (estadoFiltroMatriculados) {
    botaoFiltroMatriculados.classList.replace("botao-true", "botao-false");
    estadoFiltroMatriculados = false;
  } else {
    botaoFiltroMatriculados.classList.replace("botao-false", "botao-true");
    estadoFiltroMatriculados = true;
  }
  chamarCarregarCursos();
}

function chamarCarregarCursos() {
  if (estadoFiltroMatriculados) {
    carregarCursos(lista_cursos_matriculados, {
      mensagem: "Você ainda não está matriculado em nenhum curso... :(",
    });
  } else {
    carregarCursos(lista_cursos);
  }
}

export function carregarElementosCursos() {
  carregarBotoesCursos();
  chamarCarregarCursos();
}

window.addEventListener("load", () => {
  if (telaAreaEstudo) {
    carregarElementosCursos();
  }
});
