import { carregarAulas } from "../scripts/listagemAulas.js";
import {
  linhaBotoesInferior,
  linhaFiltrosBotoes,
} from "../variaveis/containers.js";
import { criarBotaoFiltroBotoes } from "./criarBotoes.js";
import { adicionarListennerFormAula } from "../scripts/persistenciaJsonsAulas.js";

let botaoVoltar, botaoLimpar, botaoSalvar;
let botaoNovoTexto, botaoNovoVideo, botaoExcluirConteudo;

const camposForm = document.querySelectorAll(".form-input");
const formConteudo = document.querySelector(".form-aula-conteudo");

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

function botoesInferiores() {
  linhaBotoesInferior.style.display = "flex";
  linhaBotoesInferior.innerHTML = "";
  linhaBotoesInferior.append(
    criarBotaoFiltroBotoes("botao-salvar", "Salvar aula"),
  );
  botaoSalvar = document.getElementById("botao-salvar");
  botaoSalvar.addEventListener("click", () => {
    //salvar a aula
    const formularioAula = document.querySelector("#formulario-aula");
    formularioAula.requestSubmit();
  });
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

function botoesAdicionaisIniciais(edicao) {
  if (document.querySelector("#botao-novo-texto")) {
    botaoNovoTexto = document.querySelector("#botao-novo-texto");
    botaoNovoTexto.addEventListener("click", () => {
      formConteudo.append(adicionarTexto());
    });
  }
  if (document.querySelector("#botao-novo-video")) {
    botaoNovoVideo = document.querySelector("#botao-novo-video");
    botaoNovoVideo.addEventListener("click", () => {
      formConteudo.append(adicionarVideo());
    });
  }
}

function adicionarBotaoExcluir(elemento) {
  const excluir = criarBotaoFiltroBotoes("", "Apagar");
  excluir.type = "button";
  excluir.classList.add("botao-excluir-conteudo");
  excluir.addEventListener("click", () => {
    elemento.remove();
    excluir.remove();
  });
  return excluir;
}

function adicionarTexto() {
  const divInput = document.createElement("div");
  const input = document.createElement("textarea");
  divInput.dataset.tipo = "texto";
  input.name = "conteudo[]";
  input.required = true;
  input.className = "form-input input-texto-aula";
  input.addEventListener("input", () => {
    input.style.height = "auto";
    input.style.height = input.scrollHeight + "px";
  });
  divInput.append(input, adicionarBotaoExcluir(divInput));
  return divInput;
}

function adicionarVideo() {
  const divVideo = document.createElement("div");
  const video = document.createElement("video");
  const input = document.createElement("input");
  input.style.display = "none";
  input.name = "conteudo[]";
  divVideo.dataset.tipo = "video";
  video.classList = "video-form";
  video.controls = true;
  video.src = "../videos/video_teste.mp4";
  divVideo.append(input, video, adicionarBotaoExcluir(divVideo));
  return divVideo;
}

window.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("form-cadastro-aula")) {
    adicionarListennerFormAula();
    carregarBotoes();
    //adicionarListennerFormCurso();
    botoesAdicionaisIniciais();
  }
});
