import {
  linhaBotoesInferior,
  linhaFiltrosBotoes,
} from "../variaveis/containers.js";
import { criarBotaoFiltroBotoes } from "./criarBotoes.js";

let botaoVoltar, botaoLimpar, botaoCancelar, botaoExcluir, botaoSalvar;

function botoesSuperiores() {
  linhaFiltrosBotoes.append(
    criarBotaoFiltroBotoes("botao-voltar", "Voltar", "<"),
    criarBotaoFiltroBotoes("bota-limpar", "Limpar"),
  );
}

function botoesInferiores(edicao) {
  linhaBotoesInferior.style.display = "flex";
  linhaBotoesInferior.innerHTML = "";
  if (edicao) {
    linhaBotoesInferior.append(
      criarBotaoFiltroBotoes("botao-cancelar", "Cancelar"),
      criarBotaoFiltroBotoes("botao-excluir", "Excluir"),
    );
  }
  linhaBotoesInferior.append(criarBotaoFiltroBotoes("botao-salvar", "Salvar"));
}

function carregarBotoes(edicao) {
  botoesSuperiores();
  botoesInferiores(edicao);
}

window.addEventListener("load", () => {
  if (document.getElementById("form-cadastro-aula")) {
    carregarBotoes();
    //adicionarListennerFormCurso();
  }
});
