import { criarBotaoFiltroBotoes } from "./criarBotoes.js";
import { criarMensagem } from "./criarMensagem.js";
import {
  divConteudo,
  divMensagem,
  linhaFiltrosBotoes,
} from "../variaveis/containers.js";
import { carregarElementosCursos } from "../scripts/meusCursosProfessor.js";
import { adicionarListennerFormCurso } from "../scripts/persistenciaJsonsCursos.js";

let botaoVoltar,
  botaoLimpar,
  salvar = false;
const camposForm = document.querySelectorAll(".form-input");

function carregarBotoes() {
  //limpa as linhas e exibe
  linhaFiltrosBotoes.innerHTML = "";
  linhaFiltrosBotoes.style.display = "flex";

  //cria os botoes da linha superior
  linhaFiltrosBotoes.append(
    criarBotaoFiltroBotoes("botao-voltar", "Voltar", "<"),
    criarBotaoFiltroBotoes("botao-limpar", "Limpar"),
  );
  //cria o comportamento do botao de voltar
  botaoVoltar = document.querySelector("#botao-voltar");
  if (botaoVoltar) {
    botaoVoltar.addEventListener("click", () => {
      window.location.href = "./meusCursos.html";
      carregarElementosCursos();
    });
  }
  //cria o comportamento do botao de limpar
  botaoLimpar = document.querySelector("#botao-limpar");
  if (botaoLimpar) {
    botaoLimpar.addEventListener("click", () => {
      camposForm.forEach((element) => {
        element.value = "";
      });
    });
  }
}

window.addEventListener("load", () => {
  if (document.getElementById("form-cadastro-curso")) {
    carregarBotoes();
    adicionarListennerFormCurso();
  }
});
