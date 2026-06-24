import {
  linhaBotoesInferior,
  linhaFiltrosBotoes,
} from "../variaveis/containers.js";
import { criarBotaoFiltroBotoes } from "./criarBotoes.js";
import { carregarAulas } from "../scripts/listagemAulas.js";

let botaoVoltar;

export function carregarBotoes(cursoAtual) {
  linhaFiltrosBotoes.innerHTML = ""; //limpa a linha de filtros e botoes
  linhaFiltrosBotoes.style.display = "flex";
  linhaBotoesInferior.innerHTML = "";
  linhaBotoesInferior.style.display = "flex";

  //cria o botao de voltar
  linhaFiltrosBotoes.appendChild(
    criarBotaoFiltroBotoes("main-botao-voltar", "Voltar", "<"),
  );
  botaoVoltar = document.querySelector("#main-botao-voltar");
  if (botaoVoltar) {
    botaoVoltar.addEventListener("click", () => {
      voltarBotao(cursoAtual);
    });
  }
}

function voltarBotao(cursoAtual) {
  carregarAulas(cursoAtual);
}
