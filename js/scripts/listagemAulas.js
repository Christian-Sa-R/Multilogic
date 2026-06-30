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
import { carregarCursos } from "./listagemCursos.js";
import { criarMensagem } from "../estruturas/criarMensagem.js";
import { carregarConteudoAula } from "./aula.js";
import { lista_cursos_matriculados } from "../variaveis/listas.js";
import { matricular, matriculado } from "./matriculas.js";
import { carregarBotoesAulas as carregarBotoesAluno } from "../estruturas/listagemAulasAluno.js";
import { carregarBotoesAulas as carregarBotoesProfessor } from "../estruturas/listagemAulasProfessor.js";

let cursoAtual;
let lista_aulas = []; //puxa do json no momento que a função carregarAulas for chamada

function criarListaAulas(curso) {
  lista_aulas = Object.values(curso.aulas); //pega as aulas do curso
}

function carregarAula(aula, professor) {
  //carrega uma aula
  const criarLink = document.createElement("a");
  const linha = document.createElement("hr"); //linha que separa o titulo e a descricao
  linha.className = "linha_container_conteudo";
  const tituloAula = document.createElement("div"); //define o titulo dentro da tag a
  tituloAula.className = "conteudo_titulo";
  const descricaoAula = document.createElement("div"); //define a descricao
  descricaoAula.className = "conteudo_descricao";

  criarLink.className = "main-conteudos__grid-links";
  criarLink.href = "#";
  criarLink.id = aula.idAula;
  tituloAula.innerHTML = aula.tituloAula;
  descricaoAula.innerHTML = aula.descricaoAula;
  criarLink.append(tituloAula, linha, descricaoAula);
  gridConteudos.appendChild(criarLink);
  criarClickAula(aula.idAula, professor);
}

export function carregarAulas(cursoId, professor) {
  divMensagem.style.display = "none";
  divAula.style.display = "none";
  divConteudo.innerHTML = "";
  divConteudo.style.display = "none";
  cursoAtual = cursoId; //atualiza a variavel global do curso atual
  linhaFiltrosBotoes.style.display = "flex";
  if (professor) {
    carregarBotoesProfessor();
  } else {
    carregarBotoesAluno(cursoId);
  }
  criarListaAulas(lista_cursos.find((curso) => curso.idCurso === cursoId)); //puxa as aulas do curso selecionado
  gridConteudos.innerHTML = ""; //limpa a lista que estiver sendo exibida
  gridConteudos.style.display = "grid";
  if (lista_aulas.length === 0) {
    gridConteudos.style.display = "none"; //oculta a grid de conteudos
    criarMensagem("Este curso não tem aulas cadastras... >:(");
  } else {
    for (const aula in lista_aulas) {
      if (!Object.hasOwn(lista_aulas, aula)) continue;
      carregarAula(lista_aulas[aula], professor);
    }
  }
}

function criarClickAula(id, professor) {
  const aulaClick = document.querySelector(`#${id}`);
  aulaClick.addEventListener("click", () => {
    carregarConteudoAula(lista_aulas, id, cursoAtual, professor);
  });
}
