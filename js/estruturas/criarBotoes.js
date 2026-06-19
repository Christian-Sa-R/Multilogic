export function criarBotaoFiltroBotoes(idBotao, texto, textoBotao = "") {
  const divBotao = document.createElement("div"); // cria a div que vai conter o botão e o texto.
  divBotao.className = "main-linha-filtro-especifico";

  const botao = document.createElement("button"); // cria o botão.
  botao.id = idBotao; //"main-filtro-matriculados"
  botao.className = "main-filtro-botoes";
  botao.textContent = textoBotao;

  const textoDiv = document.createElement("div"); //cria o texto que vai ficar ao lado do botão.
  textoDiv.innerHTML = texto; // "Exibir apenas matriculados"

  divBotao.appendChild(botao);
  divBotao.appendChild(textoDiv);

  return divBotao;
}
