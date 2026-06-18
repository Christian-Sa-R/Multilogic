import curso1 from "../jsons/curso1.json" with { type: "json" };
import curso2 from "../jsons/curso2.json" with { type: "json" };
import curso3 from "../jsons/curso3.json" with { type: "json" };
import curso4 from "../jsons/curso4.json" with { type: "json" };
import curso5 from "../jsons/curso5.json" with { type: "json" };

//as variaveis tela sao para situar a tela atual caso seja necessario. nao precisei utilizar
const telaHome = document.querySelector("#home");
const telaAreaEstudo = document.querySelector("#area-estudo");
const telaAreaAluno = document.querySelector("#area-aluno");

const botaoTema = document.querySelector(".header-botoes-tema");
const listaConteudos = document.querySelector("#container-conteudos");
const linhaFiltrosBotoes = document.querySelector(".main-linha-filtros");
const botaoFiltroMatriculados = document.querySelector(
  "#main-filtro-matriculados",
);
const botaoVoltar = document.querySelector("#main-botao-voltar");

var lista_cursos = [curso1, curso2, curso3, curso4, curso5]; //lista com todos os cursos
var lista_cursos_matriculados = []; //lista com cursos matriculados. Criada dinamicamente.
var lista_aulas = []; //puxa do json no momento do curso

function carregarCursos() {
  listaConteudos.innerHTML = ""; //limpa a lista que estiver sendo exibida
  linhaFiltrosBotoes.innerHTML = ""; //limpa a linha de filtros/botoes
  //cria o botão de filtrar matriculados
  linhaFiltrosBotoes.appendChild(criarBotaoFiltroMatriculados());
  //chama a função CarregarCurso
  if (botaoFiltroMatriculados.classList.contains("filtro-matriculados-true")) {
    //verifica se o filtro esta ativado
    if (lista_cursos_matriculados.length === 0) {
      //verifica se a lista de cursos matriculados esta vazia
      const mensagemSemMatriculados = document.createElement("div");
      mensagemSemMatriculados.className = "main-conteudos__empty";
      mensagemSemMatriculados.innerHTML =
        "Você ainda não está matriculado em nenhum curso... :(";
      listaConteudos.appendChild(mensagemSemMatriculados);
    } else {
      for (const curso in lista_cursos_matriculados) {
        //trabalha com a lista de cursos matriculados
        if (!Object.hasOwn(lista_cursos_matriculados, curso)) continue;
        carregarCurso(lista_cursos_matriculados[curso]);
      }
    }
  } else {
    //caso o filtro esteja desativado:
    for (const curso in lista_cursos) {
      //trabalha com a lista de cursos geral
      if (!Object.hasOwn(lista_cursos, curso)) continue;
      carregarCurso(lista_cursos[curso]);
    }
  }
}
function carregarCurso(curso) {
  //carrega um curso
  const criarLink = document.createElement("a");
  const linha = document.createElement("hr"); //linha que separa o titulo e a descricao
  linha.className = "linha_container_curso";
  const tituloCurso = document.createElement("div"); //define o titulo dentro da tag a
  tituloCurso.className = "curso_titulo";
  const descricaoCurso = document.createElement("div"); //define a descricao
  descricaoCurso.className = "curso_descricao";

  criarLink.className = "main-conteudos__grid-links";
  criarLink.href = "#";
  criarLink.id = curso.idCurso;
  tituloCurso.innerHTML = curso.curso;
  descricaoCurso.innerHTML = curso.descricao;
  criarLink.append(tituloCurso, linha, descricaoCurso);
  listaConteudos.appendChild(criarLink);
  criarClickCurso(curso.idCurso);
}

function criarClickCurso(id) {
  const cursoClick = document.querySelector(`#${id}`);
  cursoClick.addEventListener("click", () => {
    carregarAulas(cursoClick);
  });
}

function carregarAulas(curso) {
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

function filtrarMatriculados() {
  if (botaoFiltroMatriculados.classList.contains("filtro-matriculados-true")) {
    botaoFiltroMatriculados.classList.replace(
      "filtro-matriculados-true",
      "filtro-matriculados-false",
    );
  } else if (
    botaoFiltroMatriculados.classList.contains("filtro-matriculados-false")
  ) {
    botaoFiltroMatriculados.classList.replace(
      "filtro-matriculados-false",
      "filtro-matriculados-true",
    );
  } else {
    botaoFiltroMatriculados.classList.add("filtro-matriculados-false");
  }
  carregarCursos();
}

function criarBotaoFiltroMatriculados() {
  const divFiltroMatriculados = document.createElement("div");
  divFiltroMatriculados.className = "main-linha-filtro-especifico";
  const filtroMatriculadosCriacao = document.createElement("button");
  filtroMatriculadosCriacao.id = "main-filtro-matriculados";
  filtroMatriculadosCriacao.className = "main-filtro-botoes ";
  const textoFiltro = document.createElement("div");
  textoFiltro.innerHTML = "Exibir apenas matriculados";
  divFiltroMatriculados.appendChild(filtroMatriculadosCriacao);
  divFiltroMatriculados.appendChild(textoFiltro);
  return divFiltroMatriculados;
}

function criarBotaoVoltar() {
  const divBotaoVoltar = document.createElement("div");
  divBotaoVoltar.className = "main-linha-filtro-especifico";
  const botaoVoltarCriacao = document.createElement("button");
  botaoVoltarCriacao.id = "main-botao-voltar";
  botaoVoltarCriacao.className = "main-filtro-botoes";
  const textoVoltar = document.createElement("div");
  textoVoltar.innerHTML = "Voltar";
  divBotaoVoltar.appendChild(botaoVoltarCriacao);
  divBotaoVoltar.appendChild(textoVoltar);
  return divBotaoVoltar;
}

function matricular(id) {
  //deve ser chamada quando o botão "matricular" for clicado.
  if (document.querySelector(`#${id}`)) {
    const cursoSelecionado = document.querySelector(`#${id}`);
    for (const element in lista_cursos) {
      if (element.idCurso === id) {
        const curso = element;
        break;
      }
    }
    if (lista_cursos_matriculados.contains(curso)) {
      lista_cursos_matriculados = lista_cursos_matriculados.filter(
        (element) => element !== curso,
      );
    } else {
      lista_cursos_matriculados.push(curso);
    }
  } else {
    return;
  }
}

window.onload = () => {
  //Carrega os cursos caso
  if (listaConteudos) {
    carregarCursos();
  }
  if (botaoFiltroMatriculados) {
    filtrarMatriculados();
  }
};

botaoTema.addEventListener("click", () => {
  alert("clicou no tema");
});

if (botaoFiltroMatriculados) {
  botaoFiltroMatriculados.addEventListener("click", () => {
    //ativa/desativa o filtro de cursos matriculados
    filtrarMatriculados();
  });
}

if (botaoVoltar) {
  botaoVoltar.addEventListener("click", () => {
    carregarCursos();
  });
}
