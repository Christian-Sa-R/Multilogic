import { linhaFiltrosBotoes } from "../variaveis/containers.js";
import { criarBotaoFiltroBotoes } from "./criarBotoes.js";
import { matriculado, matricular } from "../scripts/matriculas.js";
import { carregarElementosCursos } from "../scripts/meusCursosAluno.js";

let botaoVoltar, botaoMatriculado;

export function carregarBotoesAulas(cursoAtual) {
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
      matricularBotao(cursoAtual);
    });
  }
}

function matricularBotao(cursoAtual) {
  if (matriculado(cursoAtual)) {
    botaoMatriculado.classList.replace("botao-true", "botao-false");
  } else {
    botaoMatriculado.classList.replace("botao-false", "botao-true");
  }
  matricular(cursoAtual);
}

function voltarBotao() {
  carregarElementosCursos();
}
