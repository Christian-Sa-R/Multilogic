import { criarBotaoFiltroBotoes } from "./criarBotoes.js";
import {
  linhaBotoesInferior,
  linhaFiltrosBotoes,
} from "../variaveis/containers.js";
import { carregarElementosCursos } from "../scripts/meusCursosProfessor.js";

let botaoVoltar, botaoCadastroAula;

export function carregarBotoesAulas() {
  linhaFiltrosBotoes.innerHTML = "";
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
      voltarBotao();
    });
  }

  //cria o botao de cadastrar nova aula
  linhaBotoesInferior.appendChild(
    criarBotaoFiltroBotoes("botao-cadastro-aula", "Cadastrar aula", "+"),
  );
  botaoCadastroAula = document.querySelector("#botao-cadastro-aula");
}

function voltarBotao() {
  carregarElementosCursos();
}
