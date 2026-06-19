export function criarMensagem(texto) {
    const mensagemSemConteudo = document.createElement("div");
    mensagemSemConteudo.className = "main-conteudos__empty";
    mensagemSemConteudo.innerHTML = texto || "Não há conteúdo para exibir... >:(";
    return mensagemSemConteudo;
}