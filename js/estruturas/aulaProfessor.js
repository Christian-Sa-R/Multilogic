import {
  linhaBotoesInferior,
  linhaFiltrosBotoes,
} from "../variaveis/containers.js";
import { criarBotaoFiltroBotoes } from "./criarBotoes.js";
import { carregarAulas } from "../scripts/listagemAulas.js";
import { carregarConteudoAula } from "../scripts/aula.js";
import { excluirAula } from "../scripts/persistenciaJsonsAulas.js";

let botaoVoltar, botaoExcluir, botaoAnterior, botaoProximo;

export function carregarBotoesSuperior(lista_aulas, cursoAtual, aulaAtual) {
  linhaFiltrosBotoes.innerHTML = ""; //limpa a linha de filtros e botoes
  linhaFiltrosBotoes.style.display = "flex";
  linhaBotoesInferior.innerHTML = "";
  linhaBotoesInferior.style.display = "flex";

  //cria o botao de voltar e o botão de editar
  linhaFiltrosBotoes.append(
    criarBotaoFiltroBotoes("main-botao-voltar", "Voltar", "<"),
  );
  botaoVoltar = document.querySelector("#main-botao-voltar");
  if (botaoVoltar) {
    botaoVoltar.addEventListener("click", () => {
      voltarBotao(cursoAtual, true);
    });
  }
}
export function carregarBotoesInferior(lista_aulas, cursoAtual, aulaAtual) {
  if (aulaAtual !== 0) {
    //cria o botao de aulaAnterior
    linhaBotoesInferior.append(
      criarBotaoFiltroBotoes("main-botao-anterior", "Aula anterior", "<"),
    );
    botaoAnterior = document.querySelector("#main-botao-anterior");
    if (botaoAnterior) {
      botaoAnterior.addEventListener("click", () => {
        botaoAnteriorClick(lista_aulas, aulaAtual, cursoAtual);
      });
    }
  }

  //cria o botão de excluir e proximo.
  linhaBotoesInferior.append(
    criarBotaoFiltroBotoes("main-botao-excluir", "Excluir aula", "X"),
    criarBotaoFiltroBotoes("main-botao-proxima", "Próxima aula", ">"),
  );
  //click botao avancar
  botaoProximo = document.querySelector("#main-botao-proxima");
  botaoProximo.addEventListener("click", () => {
    botaoAvancarClick(lista_aulas, aulaAtual, cursoAtual);
  });
  //click botao excluir
  botaoExcluir = document.querySelector("#main-botao-excluir");
  botaoExcluir.addEventListener("click", () => {
    const confirmacao = confirm("Tem certeza que deseja excluir esta aula? Esta ação não pode ser desfeita.",
    );
    if (confirmacao) {
      botaoExcluirClick(cursoAtual, aulaAtual, lista_aulas);
    }
  });
}

function botaoAnteriorClick(lista_aulas, aulaAtual, cursoId) {
  let aulaId = lista_aulas[aulaAtual - 1].idAula;
  carregarConteudoAula(lista_aulas, aulaId, cursoId, true);
}

function botaoExcluirClick(cursoId, aulaAtual, lista_aulas) {
  sessionStorage.setItem("cursoAtual", cursoId);
  excluirAula(cursoId, lista_aulas[aulaAtual].idAula);
  window.location.href = "./meusCursos.html";
}

function botaoAvancarClick(lista_aulas, aulaAtual, cursoId) {
  if (lista_aulas.length !== aulaAtual + 1) {
    let aulaId = lista_aulas[aulaAtual + 1].idAula;
    carregarConteudoAula(lista_aulas, aulaId, cursoId, true);
  } else {
    voltarBotao(cursoId, true);
  }
}

function voltarBotao(cursoAtual, professor) {
  carregarAulas(cursoAtual, true);
}
