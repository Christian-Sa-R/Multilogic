import { criarBotaoFiltroBotoes } from "../estruturas/criarBotoes.js";
import { criarMensagem } from "../estruturas/criarMensagem.js";
import {
  divConteudo,
  divMensagem,
  gridConteudos,
  linhaBotoesInferior,
  linhaFiltrosBotoes,
} from "../variaveis/containers.js";
import { carregarElementosCursos } from "./meusCursosProfessor.js";

let botaoVoltar,
  botaoLimpar,
  botaoSalvar,
  salvar = false;

function carregarBotoes() {
  //limpa as linhas e exibe
  linhaFiltrosBotoes.innerHTML = "";
  linhaFiltrosBotoes.style.display = "flex";
  linhaBotoesInferior.innerHTML = "";
  linhaBotoesInferior.style.display = "flex";

  //cria os botoes da linha superior
  linhaFiltrosBotoes.append(
    criarBotaoFiltroBotoes("botao-voltar", "Voltar", "<"),
    criarBotaoFiltroBotoes("botao-limpar", "Limpar"),
  );
  //cria o comportamento do botao de voltar
  botaoVoltar = document.querySelector("#botao-voltar");
  if (botaoVoltar) {
    botaoVoltar.addEventListener("click", () => {
      carregarElementosCursos();
    });
  }
  //cria o comportamento do botao de limpar
  botaoLimpar = document.querySelector("#botao-limpar");
  if (botaoLimpar) {
    botaoLimpar.addEventListener("click", () => {
      carregarDivConteudo();
    });
  }
  //cria os botoes inferiores
  linhaBotoesInferior.append(criarBotaoFiltroBotoes("botao-salvar", "Salvar"));
  //cria o comportamento do botao salvar
  botaoSalvar = document.querySelector("#botao-salvar");
  botaoSalvar.addEventListener("click", () => {
    if (salvar) {
      carregarElementosCursos();
    } else {
      criarMensagem("Preencha os campos obrigatórios >:(");
    }
  });
}
function carregarDivConteudo() {
  divConteudo.style.display = "flex";
  gridConteudos.style.display = "none";
}
export function carregarCadastrarCurso() {
  carregarBotoes();
  carregarDivConteudo();
}
