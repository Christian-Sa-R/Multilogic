import * as telas from "../variaveis/telas.js";
import { lista_cursos } from "../variaveis/cursos.js";
import { gridConteudos, linhaFiltrosBotoes } from "../variaveis/containers.js";
import { criarBotaoFiltroBotoes } from "../estruturas/criarBotoes.js";
import { criarMensagem } from "../estruturas/mensagemSemConteudo.js";
import { carregarAulas } from "./listagemAulas.js";

let cursoAtual;
let botaoVoltar;

function carregarLinhaFiltrosBotoes() {
    linhaFiltrosBotoes.innerHTML = ""; //limpa a linha de filtros e botoes

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

export function carregarConteudoAula(lista_aulas, aulaId, cursoId) {
    cursoAtual = cursoId;
    gridConteudos.innerHTML = ""; //limpa a lista que estiver sendo exibida
    carregarLinhaFiltrosBotoes();
    const aula = lista_aulas.find(aula => aula.idAula === aulaId);
    if (aula) {
        const titulo = document.createElement("h1");
        titulo.innerHTML = aula.tituloAula;
        gridConteudos.appendChild(titulo);
        if (aula.conteudo === "") {
            gridConteudos.appendChild(criarMensagem("Esta aula ainda não tem conteúdo cadastrado... >:("));
            return;
        } else {
            const conteudo = document.createElement("div");
            conteudo.innerHTML = aula.conteudo;
            gridConteudos.appendChild(conteudo);
        }
    } else {
        console.error("Aula não encontrada: " + aulaId);
    }
}

function voltarBotao() {
    carregarAulas(cursoAtual);
}