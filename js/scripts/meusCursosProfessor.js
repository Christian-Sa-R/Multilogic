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
import { carregarCadastrarCurso } from "../estruturas/formCadastroCurso.js";

let botaoCadastroCurso;

function carregarBotoes() {
  //limpa a linha e exibe
  linhaFiltrosBotoes.innerHTML = "";
  linhaFiltrosBotoes.style.display = "none";
  linhaBotoesInferior.innerHTML = "";
  linhaBotoesInferior.style.display = "flex";
  // cria o botao de adicionar curso
  linhaBotoesInferior.append(
    criarBotaoFiltroBotoes("botao-adicionar-curso", "Cadastrar curso", "+"),
  );
  botaoCadastroCurso = document.querySelector("#botao-adicionar-curso");
  if (botaoCadastroCurso) {
    botaoCadastroCurso.addEventListener("click", () => {
      carregarCadastrarCurso();
    });
  }
}

function chamarCarregarCursos() {
  carregarCursos(lista_cursos_professor, {
    professor: true,
    mensagem: "Você ainda não cadastrou nenhum curso :(",
  });
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
