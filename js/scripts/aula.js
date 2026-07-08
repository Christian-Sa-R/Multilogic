import * as telas from "../variaveis/telas.js";
import { lista_cursos } from "../variaveis/cursos.js";
import {
  divAula,
  divConteudo,
  divMensagem,
  gridConteudos,
  linhaFiltrosBotoes,
} from "../variaveis/containers.js";
import { criarBotaoFiltroBotoes } from "../estruturas/criarBotoes.js";
import { criarMensagem } from "../estruturas/criarMensagem.js";
import { carregarAulas } from "./listagemAulas.js";
import {
  carregarBotoesSuperior as carregarBotoesSuperioresAluno,
  carregarBotoesInferior as carregarBotoesInferioresAluno,
} from "../estruturas/aulaAluno.js";
import {
  carregarBotoesSuperior as carregarBotoesSuperiorProfessor,
  carregarBotoesInferior as carregarBotoesInferiorProfessor,
} from "../estruturas/aulaProfessor.js";

let cursoAtual;
let botaoVoltar;

export function carregarConteudoAula(lista_aulas, aulaId, cursoId, professor) {
  const aula = lista_aulas.find((aula) => aula.idAula === aulaId);
  divMensagem.style.display = "none";
  cursoAtual = cursoId;
  gridConteudos.innerHTML = ""; //limpa a lista que estiver sendo exibida
  gridConteudos.style.display = "none";
  if (professor) {
    carregarBotoesSuperiorProfessor(lista_aulas, cursoId, aula);
  } else {
    carregarBotoesSuperioresAluno(cursoId);
  }

  if (aula) {
    if (professor) {
      carregarBotoesInferiorProfessor(
        lista_aulas,
        cursoId,
        lista_aulas.indexOf(aula),
      );
    } else {
      carregarBotoesInferioresAluno(
        lista_aulas,
        cursoId,
        lista_aulas.indexOf(aula),
      );
    }
    divConteudo.innerHTML = "";
    divConteudo.style.display = "flex";
    const titulo = document.createElement("h1");
    titulo.className = "main-aula__titulo";
    titulo.innerHTML = aula.tituloAula;
    divConteudo.append(titulo);
    if (aula.conteudo?.length > 0) {
      divAula.innerHTML = "";
      divAula.style.display = "flex";
      for (const e in aula.conteudo) {
        divAula.innerHTML += aula.conteudo[e];
      }
    } else {
      divAula.innerHTML = "";
      divAula.style.display = "none";
      criarMensagem("Esta aula ainda não tem conteúdo cadastrado... >:(");
      return;
    }
  } else {
    console.error("Aula não encontrada: " + aulaId);
    criarMensagem("Aula nao encontrada ;o;");
  }
}
