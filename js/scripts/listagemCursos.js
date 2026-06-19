import * as cursos from "../variaveis/cursos.js";
import * as telas from "../variaveis/telas.js";
import { listaConteudos, linhaFiltrosBotoes } from "../variaveis/containers.js";
import { criarBotaoFiltroMatriculados } from "../estruturas/criarBotoes.js";
import { criarMensagem } from "../estruturas/mensagemSemConteudo.js";
import { carregarAulas } from "./listagemAulas.js";
import { lista_cursos_matriculados } from "./matriculas.js";

let estadoFiltroMatriculados = false;
let botaoFiltroMatriculados;

let lista_cursos = [cursos.curso1, cursos.curso2, cursos.curso3, cursos.curso4, cursos.curso5]; //lista com todos os cursos
function carregarLinhaFiltrosBotoes() {
  linhaFiltrosBotoes.innerHTML = "";
  linhaFiltrosBotoes.appendChild(criarBotaoFiltroMatriculados());
  botaoFiltroMatriculados = document.querySelector("#main-filtro-matriculados");
  if (botaoFiltroMatriculados) {
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
function carregarCursos() {
  listaConteudos.innerHTML = ""; //limpa a lista que estiver sendo exibida
  //chama a função CarregarCurso
  if (estadoFiltroMatriculados) {
    //verifica se o filtro esta ativado
    if (lista_cursos_matriculados.length === 0) {
      //verifica se a lista de cursos matriculados esta vazia
      listaConteudos.appendChild(criarMensagem("Você ainda não está matriculado em nenhum curso... :("));
    } else {
      for (const curso in lista_cursos_matriculados) {
        //trabalha com a lista de cursos matriculados
        if (!Object.hasOwn(lista_cursos_matriculados, curso)) continue;
        carregarCurso(lista_cursos_matriculados[curso]);
      }
    }
  } else {
    //caso o filtro esteja desativado:
    for (const curso in lista_cursos) {
      //trabalha com a lista de cursos geral
      if (!Object.hasOwn(lista_cursos, curso)) continue;
      carregarCurso(lista_cursos[curso]);
    }
  }
}
function criarClickCurso(id) {
  const cursoClick = document.querySelector(`#${id}`);
  cursoClick.addEventListener("click", () => {
    carregarAulas(cursoClick);
  });
}

function filtrarMatriculados() {
  if (estadoFiltroMatriculados) {
    botaoFiltroMatriculados.classList.replace(
      "filtro-matriculados-true",
      "filtro-matriculados-false",
      estadoFiltroMatriculados = false,
    );
  } else {
    botaoFiltroMatriculados.classList.replace(
      "filtro-matriculados-false",
      "filtro-matriculados-true",
      estadoFiltroMatriculados = true,
    );
  }
  carregarCursos();
}

window.onload = () => {
  //Carrega os cursos 
  if (listaConteudos) {
    carregarLinhaFiltrosBotoes();
    carregarCursos();
  }
};
