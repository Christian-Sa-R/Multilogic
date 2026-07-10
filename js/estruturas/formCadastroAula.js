import { carregarAulas } from "../scripts/listagemAulas.js";
import {
  linhaBotoesInferior,
  linhaFiltrosBotoes,
} from "../variaveis/containers.js";
import { criarBotaoFiltroBotoes } from "./criarBotoes.js";

let botaoVoltar, botaoLimpar, botaoCancelar, botaoExcluir, botaoSalvar;
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
  excluir.addEventListener("click", () => {
    elemento.remove();
    excluir.remove();
  });
  return excluir;
}

function adicionarTexto() {
  const input = document.createElement("textarea");
  input.className = "form-input input-texto-aula";
  input.addEventListener("input", () => {
    input.style.height = "auto";
    input.style.height = input.scrollHeight + "px";
  });
  input.after(adicionarBotaoExcluir(input));
  return input;
}

function adicionarVideo() {
  const video = document.createElement("video");
  video.classList = "video-form";
  video.controls = true;
  video.src = "../videos/video_teste.mp4";
  video.after(adicionarBotaoExcluir(video));
  return video;
}

function carregarElementosExistentes() {
  console.log("elementos existentes");
}

window.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("form-cadastro-aula")) {
    if (sessionStorage.getItem("edicaoAula")) {
      carregarBotoes(true);
      botoesAdicionaisIniciais();
      carregarElementosExistentes();
    } else {
      carregarBotoes();
      botoesAdicionaisIniciais();
    }
    //adicionarListennerFormCurso();
  }
});
