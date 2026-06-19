import { lista_cursos } from "../variaveis/cursos.js";
import * as telas from "../variaveis/telas.js";
import { listaConteudos, linhaFiltrosBotoes } from "../variaveis/containers.js";
import { criarBotaoFiltroBotoes } from "../estruturas/criarBotoes.js";
import { criarMensagem } from "../estruturas/mensagemSemConteudo.js";
import { carregarAulas } from "./listagemAulas.js";
import { lista_cursos_matriculados } from "./matriculas.js";

let estadoFiltroMatriculados = false;
let botaoFiltroMatriculados;

function carregarLinhaFiltrosBotoes() {
  linhaFiltrosBotoes.innerHTML = "";
  linhaFiltrosBotoes.appendChild(
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

function carregarCurso(curso) {
  //carrega um curso
  const criarLink = document.createElement("a");
  const linha = document.createElement("hr"); //linha que separa o titulo e a descricao
  linha.className = "linha_container_curso";
  const tituloCurso = document.createElement("div"); //define o titulo dentro da tag a
  tituloCurso.className = "curso_titulo";
  const descricaoCurso = document.createElement("div"); //define a descricao
  descricaoCurso.className = "curso_descricao";

  criarLink.className = "main-conteudos__grid-links";
  criarLink.href = "#";
  criarLink.id = curso.idCurso;
  tituloCurso.innerHTML = curso.curso;
  descricaoCurso.innerHTML = curso.descricao;
  criarLink.append(tituloCurso, linha, descricaoCurso);
  listaConteudos.appendChild(criarLink);
  criarClickCurso(curso.idCurso);
}
export function carregarCursos() {
  //carrega todos os cursos chamando a funcao de carregar curso
  carregarLinhaFiltrosBotoes();
  listaConteudos.innerHTML = ""; //limpa a lista que estiver sendo exibida
  if (estadoFiltroMatriculados) {
    //verifica se o filtro esta ativado
    if (lista_cursos_matriculados.length === 0) {
      //verifica se a lista de cursos matriculados esta vazia
      listaConteudos.appendChild(
        criarMensagem("Você ainda não está matriculado em nenhum curso... :("),
      );
    } else {
      for (const curso in lista_cursos_matriculados) {
        //trabalha com a lista de cursos matriculados
        if (!Object.hasOwn(lista_cursos_matriculados, curso)) continue;
        carregarCurso(lista_cursos_matriculados[curso]);
      }
    }
  } else {
    //caso o filtro esteja desativado:
    if (lista_cursos.length === 0) {
      //verifica se a lista de cursos matriculados esta vazia
      listaConteudos.appendChild(criarMensagem("Não tem cursos no sistema :("));
    } else {
      for (const curso in lista_cursos) {
        //trabalha com a lista de cursos geral
        if (!Object.hasOwn(lista_cursos, curso)) continue;
        carregarCurso(lista_cursos[curso]);
      }
    }
  }
}
function criarClickCurso(id) {
  const cursoClick = document.querySelector(`#${id}`);
  cursoClick.addEventListener("click", () => {
    carregarAulas(id);
  });
}

function filtrarMatriculados() {
  if (estadoFiltroMatriculados) {
    botaoFiltroMatriculados.classList.replace("botao-true", "botao-false");
    estadoFiltroMatriculados = false;
  } else {
    botaoFiltroMatriculados.classList.replace("botao-false", "botao-true");
    estadoFiltroMatriculados = true;
  }
  carregarCursos();
}

window.onload = () => {
  //Carrega os cursos
  if (listaConteudos) {
    carregarCursos();
  }
};
