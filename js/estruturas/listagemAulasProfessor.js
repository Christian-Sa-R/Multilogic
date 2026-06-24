import { criarBotaoFiltroBotoes } from "./criarBotoes.js";
import { linhaFiltrosBotoes } from "../variaveis/containers.js";
import { carregarElementosCursos } from "../scripts/meusCursosProfessor.js";

let botaoVoltar;

export function carregarBotoesAulas() {
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
}

function voltarBotao() {
  carregarElementosCursos();
}
