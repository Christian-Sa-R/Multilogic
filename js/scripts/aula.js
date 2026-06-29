import * as telas from "../variaveis/telas.js";
import { lista_cursos } from "../variaveis/cursos.js";
import { divAula, divConteudo, gridConteudos, linhaFiltrosBotoes } from "../variaveis/containers.js";
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
  gridConteudos.style.display = "none";
  if (professor) {
    carregarBotoesProfessor(cursoId);
  } else {
    carregarBotoesAluno(cursoId);
  }

  const aula = lista_aulas.find((aula) => aula.idAula === aulaId);
  if (aula) {
    divConteudo.style.display = "flex"
    const titulo = document.createElement("h1");
    titulo.innerHTML = aula.tituloAula;
    divConteudo.append(titulo);
    if (aula.conteudo?.length > 0) {
      divAula.innerHTML = "";
      divAula.style.display = "flex";
      for (const e in aula.conteudo) {
        divAula.innerHTML += aula.conteudo[e];
      }
    } else {
      criarMensagem("Esta aula ainda não tem conteúdo cadastrado... >:(");
      return;
    }
  } else {
    console.error("Aula não encontrada: " + aulaId);
    criarMensagem("Aula nao encontrada ;o;");
  }
}
