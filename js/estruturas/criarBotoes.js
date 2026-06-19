export function criarBotaoFiltroMatriculados() {
    const divFiltroMatriculados = document.createElement("div"); // cria a div que vai conter o botão e o texto.
    divFiltroMatriculados.className = "main-linha-filtro-especifico";

    const filtroMatriculadosCriacao = document.createElement("button"); // cria o botão.
    filtroMatriculadosCriacao.id = "main-filtro-matriculados";
    filtroMatriculadosCriacao.className = "main-filtro-botoes";

    const textoFiltro = document.createElement("div"); //cria o texto que vai ficar ao lado do botão.
    textoFiltro.innerHTML = "Exibir apenas matriculados";

    divFiltroMatriculados.appendChild(filtroMatriculadosCriacao);
    divFiltroMatriculados.appendChild(textoFiltro);

    return divFiltroMatriculados;
}

export function criarBotaoVoltar() {
    const divBotaoVoltar = document.createElement("div"); //cria a div que vai conter o botão e o texto.
    divBotaoVoltar.className = "main-linha-filtro-especifico";

    const botaoVoltarCriacao = document.createElement("button"); //cria o botão.
    botaoVoltarCriacao.id = "main-botao-voltar";
    botaoVoltarCriacao.className = "main-filtro-botoes";

    const textoVoltar = document.createElement("div"); //cria o texto que vai ficar ao lado do botão.
    textoVoltar.innerHTML = "Voltar";

    divBotaoVoltar.appendChild(botaoVoltarCriacao);
    divBotaoVoltar.appendChild(textoVoltar);

    return divBotaoVoltar;
}