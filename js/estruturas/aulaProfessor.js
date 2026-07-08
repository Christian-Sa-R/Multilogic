import {
  linhaBotoesInferior,
  linhaFiltrosBotoes,
} from "../variaveis/containers.js";
import { criarBotaoFiltroBotoes } from "./criarBotoes.js";
import { carregarAulas } from "../scripts/listagemAulas.js";
import { carregarConteudoAula } from "../scripts/aula.js";

let botaoVoltar, botaoEditar, botaoAnterior, botaoProximo;

export function carregarBotoesSuperior(lista_aulas, cursoAtual, aulaAtual) {
  linhaFiltrosBotoes.innerHTML = ""; //limpa a linha de filtros e botoes
  linhaFiltrosBotoes.style.display = "flex";
  linhaBotoesInferior.innerHTML = "";
  linhaBotoesInferior.style.display = "flex";

  //cria o botao de voltar e o botão de editar
  linhaFiltrosBotoes.append(
    criarBotaoFiltroBotoes("main-botao-voltar", "Voltar", "<"),
    criarBotaoFiltroBotoes("main-botao-editar", "Editar"),
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

  //cria o botão de proximo.
  linhaBotoesInferior.append(
    criarBotaoFiltroBotoes("main-botao-proxima", "Próxima aula", ">"),
  );
  //click botao avancar
  botaoProximo = document.querySelector("#main-botao-proxima");
  botaoProximo.addEventListener("click", () => {
    botaoAvancarClick(lista_aulas, aulaAtual, cursoAtual);
  });
}

function botaoAnteriorClick(lista_aulas, aulaAtual, cursoId) {
  let aulaId = lista_aulas[aulaAtual - 1].idAula;
  carregarConteudoAula(lista_aulas, aulaId, cursoId, true);
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
