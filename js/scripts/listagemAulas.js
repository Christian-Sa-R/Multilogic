import * as telas from "../variaveis/telas.js";
import { lista_cursos } from "../variaveis/cursos.js";
import { listaConteudos, linhaFiltrosBotoes } from "../variaveis/containers.js";
import { criarBotaoFiltroBotoes } from "../estruturas/criarBotoes.js";
import { carregarCursos } from "./listagemCursos.js";
import {
  lista_cursos_matriculados,
  matricular,
  matriculado,
} from "./matriculas.js";

let cursoAtual;
let botaoMatriculado, botaoVoltar;
let lista_aulas = []; //puxa do json no momento do curso

function carregarLinhaFiltrosBotoes() {
  linhaFiltrosBotoes.innerHTML = "";

  //cria o botao de voltar
  linhaFiltrosBotoes.appendChild(
    criarBotaoFiltroBotoes("main-botao-voltar", "Voltar", "<"),
  );
  botaoVoltar = document.querySelector("#main-botao-voltar");
  if (botaoVoltar) {
    botaoVoltar.addEventListener("click", () => {
      voltarBotao();
    });
  }

  //cria o botao matricular
  linhaFiltrosBotoes.appendChild(
    criarBotaoFiltroBotoes("main-botao-matricular", "Matricula"),
  );
  botaoMatriculado = document.querySelector("#main-botao-matricular");
  if (botaoMatriculado) {
    if (matriculado(cursoAtual)) {
      botaoMatriculado.classList.add("botao-true");
    } else {
      botaoMatriculado.classList.add("botao-false");
    }
    botaoMatriculado.addEventListener("click", () => {
      matricularBotao();
    });
  }
}

export function carregarAulas(cursoId) {
  cursoAtual = cursoId;
  listaConteudos.innerHTML = "";
  carregarLinhaFiltrosBotoes();
  if (lista_aulas.length === 0) {
    const mensagemSemAulas = document.createElement("div");
    mensagemSemAulas.className = "main-conteudos__empty";
    mensagemSemAulas.innerHTML = "Este curso não tem aulas cadastras... >:(";
    listaConteudos.appendChild(mensagemSemAulas);
  }
}

function matricularBotao() {
  if (matriculado(cursoAtual)) {
    botaoMatriculado.classList.replace("botao-true", "botao-false");
  } else {
    botaoMatriculado.classList.replace("botao-false", "botao-true");
  }
  matricular(cursoAtual);
}

function voltarBotao() {
  carregarCursos();
}
