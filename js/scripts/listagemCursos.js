import { lista_cursos } from "../variaveis/cursos.js";
import * as telas from "../variaveis/telas.js";
import {
  divConteudo,
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
export function carregarCursos(
  lista,
  { professor = false, mensagem = "Não tem cursos para exibir :(" } = {},
) {
  //carrega todos os cursos chamando a funcao de carregar curso
  divConteudo.style.display = "none";
  gridConteudos.innerHTML = ""; //limpa a lista que estiver sendo exibida
  gridConteudos.style.display = "grid"; //exibe a grid de conteudos
  if (lista.length === 0) {
    //verifica se a lista de cursos esta vazia
    gridConteudos.style.display = "none"; //oculta a grid de conteudos
    criarMensagem(mensagem);
  } else {
    divMensagem.style.display = "none"; //oculta a div de mensagens
    for (const curso in lista_cursos) {
      if (lista.some((c) => c.idCurso === lista_cursos[curso].idCurso)) {
        carregarCurso(lista_cursos[curso], professor);
      }
    }
  }
}
function criarClickCurso(id, professor) {
  const cursoClick = document.getElementById(id);
  cursoClick.addEventListener("click", () => {
    if (telas.telaAreaEstudo || telas.telaMeusCursos) {
      carregarAulas(id, professor);
    } else if (telas.telaAreaAluno) {
      sessionStorage.setItem("cursoAtual", id);
      window.location.href = "./areaEstudo.html";
    } else if (telas.telaAreaProfessor) {
      sessionStorage.setItem("cursoAtual", id);
      window.location.href = "./meusCursos.html";
    }
  });
}
