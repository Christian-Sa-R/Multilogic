import { carregarAulas } from "../scripts/listagemAulas.js";
import {
  linhaBotoesInferior,
  linhaFiltrosBotoes,
} from "../variaveis/containers.js";
import { criarBotaoFiltroBotoes } from "./criarBotoes.js";

let botaoVoltar, botaoLimpar, botaoCancelar, botaoExcluir, botaoSalvar;

const camposForm = document.querySelectorAll(".form-input");

function botoesSuperiores() {
  linhaFiltrosBotoes.append(
    criarBotaoFiltroBotoes("botao-voltar", "Voltar", "<"),
    criarBotaoFiltroBotoes("botao-limpar", "Limpar"),
  );
  //listener do voltar
  if (document.getElementById("botao-voltar")) {
    botaoVoltar = document.getElementById("botao-voltar");
    botaoVoltar.addEventListener("click", () => {
      clickBotaoVoltar();
    });
  }
  //listener do limpar
  if (document.getElementById("botao-limpar")) {
    botaoLimpar = document.getElementById("botao-limpar");
    botaoLimpar.addEventListener("click", () => {
      clickBotaoLimpar();
    });
  }
}

function botoesInferiores(edicao) {
  linhaBotoesInferior.style.display = "flex";
  linhaBotoesInferior.innerHTML = "";
  if (edicao) {
    linhaBotoesInferior.append(
      criarBotaoFiltroBotoes("botao-cancelar", "Cancelar edição"),
      criarBotaoFiltroBotoes("botao-excluir", "Excluir aula"),
    );
  }
  linhaBotoesInferior.append(
    criarBotaoFiltroBotoes("botao-salvar", "Salvar aula"),
  );
}

function carregarBotoes(edicao) {
  botoesSuperiores();
  botoesInferiores(edicao);
}

function clickBotaoVoltar() {
  window.location.href = "./meusCursos.html";
}

function clickBotaoLimpar() {
  camposForm.forEach((element) => {
    element.value = "";
  });
}

window.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("form-cadastro-aula")) {
    if (sessionStorage.getItem("edicaoAula")) {
      carregarBotoes(true);
    } else {
      carregarBotoes();
    }
    //adicionarListennerFormCurso();
  }
});
