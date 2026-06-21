import * as telas from "../variaveis/telas.js";
import { lista_cursos } from "../variaveis/cursos.js";
import { gridConteudos, linhaFiltrosBotoes } from "../variaveis/containers.js";
import { criarBotaoFiltroBotoes } from "../estruturas/criarBotoes.js";
import { carregarCursos } from "./listagemCursos.js";
import { criarMensagem } from "../estruturas/mensagemSemConteudo.js";
import { carregarConteudoAula } from "./aula.js";
import { lista_cursos_matriculados } from "../variaveis/listas.js";
import {
  matricular,
  matriculado,
} from "./matriculas.js";

let cursoAtual;
let botaoMatriculado, botaoVoltar;
let lista_aulas = []; //puxa do json no momento que a função carregarAulas for chamada

function criarListaAulas(curso) {
  lista_aulas = Object.values(curso.aulas); //pega as aulas do curso
  console.log(lista_aulas);
}

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

function carregarAula(aula) {
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
  criarClickAula(aula.idAula);
}

export function carregarAulas(cursoId) {
  cursoAtual = cursoId; //atualiza a variavel global do curso atual 
  criarListaAulas(lista_cursos.find((curso) => curso.idCurso === cursoId)); //puxa as aulas do curso selecionado
  gridConteudos.innerHTML = ""; //limpa a lista que estiver sendo exibida
  carregarLinhaFiltrosBotoes();
  if (lista_aulas.length === 0) {
    gridConteudos.appendChild(criarMensagem("Este curso não tem aulas cadastras... >:("));
  } else {
    for (const aula in lista_aulas) {
      if (!Object.hasOwn(lista_aulas, aula)) continue;
      carregarAula(lista_aulas[aula]);
    }
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

function criarClickAula(id) {
  const aulaClick = document.querySelector(`#${id}`);
  aulaClick.addEventListener("click", () => {
    console.log(id, cursoAtual);
    carregarConteudoAula(lista_aulas, id, cursoAtual);
  });
}
