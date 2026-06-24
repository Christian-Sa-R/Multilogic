import { lista_cursos } from "../variaveis/cursos.js";
import * as telas from "../variaveis/telas.js";
import {
  divMensagem,
  gridConteudos,
  linhaFiltrosBotoes,
} from "../variaveis/containers.js";
import { criarBotaoFiltroBotoes } from "../estruturas/criarBotoes.js";
import { criarMensagem } from "../estruturas/criarMensagem.js";
import { carregarAulas } from "./listagemAulas.js";
import { lista_cursos_matriculados } from "../variaveis/listas.js";

export function carregarCurso(curso, professor) {
  //carrega um curso
  const criarLink = document.createElement("a");
  const linha = document.createElement("hr"); //linha que separa o titulo e a descricao
  linha.className = "linha_container_conteudo";
  const tituloCurso = document.createElement("div"); //define o titulo dentro da tag a
  tituloCurso.className = "conteudo_titulo";
  const descricaoCurso = document.createElement("div"); //define a descricao
  descricaoCurso.className = "conteudo_descricao";

  criarLink.className = "main-conteudos__grid-links";
  criarLink.href = "#";
  criarLink.id = curso.idCurso;
  tituloCurso.innerHTML = curso.curso;
  descricaoCurso.innerHTML = curso.descricao;
  criarLink.append(tituloCurso, linha, descricaoCurso);
  gridConteudos.appendChild(criarLink);
  criarClickCurso(curso.idCurso, professor);
}
export function carregarCursos(lista, professor) {
  //carrega todos os cursos chamando a funcao de carregar curso
  gridConteudos.innerHTML = ""; //limpa a lista que estiver sendo exibida
  gridConteudos.style.display = "grid";
  if (lista.length === 0) {
    //verifica se a lista de cursos matriculados esta vazia
    gridConteudos.style.display = "none"; //oculta a grid de conteudos
    criarMensagem("Não tem cursos para exibir :(");
  } else {
    divMensagem.style.display = "none"; //oculta a div de mensagens
    gridConteudos.style.display = "grid"; //exibe a grid de conteudos
    for (const curso in lista) {
      //trabalha com a lista de cursos geral
      if (!Object.hasOwn(lista, curso)) continue;
      carregarCurso(lista[curso], professor);
    }
  }
}
function criarClickCurso(id, professor) {
  const cursoClick = document.querySelector(`#${id}`);
  cursoClick.addEventListener("click", () => {
    carregarAulas(id, professor);
  });
}
