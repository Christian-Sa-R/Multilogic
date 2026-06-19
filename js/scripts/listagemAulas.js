import * as cursos from "../variaveis/cursos.js";
import * as telas from "../variaveis/telas.js";
import { listaConteudos, linhaFiltrosBotoes } from "../variaveis/containers.js";
import { criarBotaoVoltar } from "../estruturas/criarBotoes.js";


let lista_aulas = []; //puxa do json no momento do curso

export function carregarAulas(curso) {
    listaConteudos.innerHTML = "";
    linhaFiltrosBotoes.innerHTML = "";
    linhaFiltrosBotoes.appendChild(criarBotaoVoltar());
    if (lista_aulas.length === 0) {
        const mensagemSemAulas = document.createElement("div");
        mensagemSemAulas.className = "main-conteudos__empty";
        mensagemSemAulas.innerHTML = "Este curso não tem aulas cadastras... >:(";
        listaConteudos.appendChild(mensagemSemAulas);
    }
}
