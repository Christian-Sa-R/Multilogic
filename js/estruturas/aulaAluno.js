import {
  linhaBotoesInferior,
  linhaFiltrosBotoes,
} from "../variaveis/containers.js";
import { criarBotaoFiltroBotoes } from "./criarBotoes.js";
import { carregarAulas } from "../scripts/listagemAulas.js";
import { carregarConteudoAula } from "../scripts/aula.js";

let botaoVoltar, botaoAnterior, botaoConcluido, botaoProximo;
let concluido = false;

export function carregarBotoesSuperior(cursoAtual) {
  linhaFiltrosBotoes.innerHTML = ""; //limpa a linha de filtros e botoes
  linhaFiltrosBotoes.style.display = "flex";
  linhaBotoesInferior.innerHTML = "";
  linhaBotoesInferior.style.display = "flex";

  //cria o botao de voltar
  linhaFiltrosBotoes.append(
    criarBotaoFiltroBotoes("main-botao-voltar", "Voltar", "<"),
  );
  botaoVoltar = document.querySelector("#main-botao-voltar");
  if (botaoVoltar) {
    botaoVoltar.addEventListener("click", () => {
      voltarBotao(cursoAtual);
    });
  }
}
export function carregarBotoesInferior(lista_aulas, cursoAtual, aulaAtual) {
  if (aulaAtual !== 0) {
    //cria o botao de aulaAnterior
    linhaBotoesInferior.append(
      criarBotaoFiltroBotoes("main-botao-anterior", "Aula anterior", "<")
    );
    botaoAnterior = document.querySelector("#main-botao-anterior");
    if (botaoAnterior) {
      botaoAnterior.addEventListener("click", () => {
        botaoAnteriorClick(lista_aulas, aulaAtual, cursoAtual);
      });
    }
  }

  //cria os botoes de concluido e de proximo. 
  linhaBotoesInferior.append(
    criarBotaoFiltroBotoes("main-botao-concluido", "Concluido"),
    criarBotaoFiltroBotoes("main-botao-proxima", "Próxima aula", ">")
  )
  //click botao concluir
  botaoConcluido = document.querySelector("#main-botao-concluido");
  if (concluido) {
    botaoConcluido.classList.add("botao-true");
  } else {
    botaoConcluido.classList.add("botao-false");
  }
  botaoConcluido.addEventListener("click", () => {
    botaoConcluirClick()
  });
  //click botao avancar
  botaoProximo = document.querySelector("#main-botao-proxima");
  botaoProximo.addEventListener("click", () => {
    botaoAvancarClick(lista_aulas, aulaAtual, cursoAtual);
  })
}

function voltarBotao(cursoAtual) {
  carregarAulas(cursoAtual);
}

function botaoAnteriorClick(lista_aulas, aulaAtual, cursoId) {
  let aulaId = lista_aulas[aulaAtual - 1].idAula;
  carregarConteudoAula(lista_aulas, aulaId, cursoId);
}

function botaoConcluirClick(aulaAtual) {
  if (concluido) {
    botaoConcluido.classList.replace("botao-true", "botao-false");
    concluido = false;
  } else {
    botaoConcluido.classList.replace("botao-false", "botao-true");
    concluido = true;
  }
}

function botaoAvancarClick(lista_aulas, aulaAtual, cursoId) {
  if (lista_aulas.length !== aulaAtual + 1) {
    let aulaId = lista_aulas[aulaAtual + 1].idAula;
    carregarConteudoAula(lista_aulas, aulaId, cursoId);
  } else {
    voltarBotao(cursoId);
  }
}