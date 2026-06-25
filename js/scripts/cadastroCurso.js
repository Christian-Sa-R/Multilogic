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
      divConteudo.innerHTML = "";
      divConteudo.style.display = "none";
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
}

function carregarDivConteudo() {
  divMensagem.style.display = "none";
  divConteudo.style.display = "flex";
  divConteudo.innerHTML = "";
  gridConteudos.style.display = "none";

  //cria o form
  let formulario = document.createElement("form");
  formulario.classList.add("form-cadastro-curso");
  formulario.id = "formulario-curso";
  formulario.action = "#";

  //cria a label de nome
  let labelNome = document.createElement("label");
  let labelNomeTexto = document.createElement("span");
  labelNomeTexto.innerHTML = "Nome do curso:";
  //cria o input do nome
  let inputNome = document.createElement("input");
  inputNome.type = "text";
  inputNome.className = "form-input"
  inputNome.placeholder = "Digite o nome do curso...";
  inputNome.name = "nome-curso";
  inputNome.required = true;

  labelNome.append(labelNomeTexto, inputNome);

  let labelDescricao = document.createElement("label");
  let labelDescricaoTexto = document.createElement("span");
  labelDescricaoTexto.innerHTML = "Descrição:";
  //cria o input da descrição
  let inputDescricao = document.createElement("textarea");
  inputDescricao.className = "form-input input-texto-longo";
  inputDescricao.placeholder = "Descrição...";
  inputDescricao.rows = "3";
  inputDescricao.maxLength = "176";
  inputDescricao.name = "descricao-curso";

  labelDescricao.append(labelDescricaoTexto, inputDescricao);

  let botaoSalvar = criarBotaoFiltroBotoes("botao-salvar-form", "Salvar")
  botaoSalvar.type = "submit";

  divConteudo.append(formulario);
  formulario.append(labelNome, labelDescricao, botaoSalvar);
}

export function carregarCadastrarCurso() {
  carregarBotoes();
  carregarDivConteudo();
}
