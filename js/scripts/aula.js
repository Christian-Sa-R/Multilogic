import * as telas from "../variaveis/telas.js";
import { lista_cursos } from "../variaveis/cursos.js";
import { gridConteudos, linhaFiltrosBotoes } from "../variaveis/containers.js";
import { criarBotaoFiltroBotoes } from "../estruturas/criarBotoes.js";
import { criarMensagem } from "../estruturas/criarMensagem.js";
import { carregarAulas } from "./listagemAulas.js";
import { carregarBotoes as carregarBotoesAluno } from "../estruturas/aulaAluno.js";
import { carregarBotoes as carregarBotoesProfessor } from "../estruturas/aulaProfessor.js";

let cursoAtual;
let botaoVoltar;

export function carregarConteudoAula(lista_aulas, aulaId, cursoId, professor) {
  cursoAtual = cursoId;
  gridConteudos.innerHTML = ""; //limpa a lista que estiver sendo exibida
  if (professor) {
    carregarBotoesProfessor(cursoId);
  } else {
    carregarBotoesAluno(cursoId);
  }

  const aula = lista_aulas.find((aula) => aula.idAula === aulaId);
  if (aula) {
    const titulo = document.createElement("h1");
    titulo.innerHTML = aula.tituloAula;
    gridConteudos.appendChild(titulo);
    if (aula.conteudo === "") {
      gridConteudos.appendChild(
        criarMensagem("Esta aula ainda não tem conteúdo cadastrado... >:("),
      );
      return;
    } else {
      const conteudo = document.createElement("div");
      conteudo.innerHTML = aula.conteudo;
      gridConteudos.appendChild(conteudo);
    }
  } else {
    console.error("Aula não encontrada: " + aulaId);
  }
}
