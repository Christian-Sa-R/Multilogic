import { divMensagem } from "../variaveis/containers.js";

export function criarMensagem(texto) {
  divMensagem.style.display = "flex"; //exibe a div de mensagens
  divMensagem.innerHTML = texto || "Não há conteúdo para exibir... >:(";
}
