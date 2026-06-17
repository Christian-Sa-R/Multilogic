import curso1 from "../jsons/curso1.json" with { type: "json" };
import curso2 from "../jsons/curso2.json" with { type: "json" };
import curso3 from "../jsons/curso3.json" with { type: "json" };
import curso4 from "../jsons/curso4.json" with { type: "json" };
import curso5 from "../jsons/curso5.json" with { type: "json" };

//as variaveis tela sao para situar a tela atual caso seja necessario. nao precisei utilizar
const telaHome = document.querySelector("#home");
const telaAreaEstudo = document.querySelector("#area-estudo");
const telaAreaAluno = document.querySelector("#area-aluno");
const listaConteudos = document.querySelector("#container-conteudos")
const botaoTema = document.querySelector(".header-botoes-tema");

var lista_cursos = [curso1, curso2, curso3, curso4, curso5];

function carregarCursos() {
  var iteravel = 1;
  for (const curso in lista_cursos) {
    const criarLink = document.createElement('a');
    const linha = document.createElement('hr'); //linha que separa o titulo e a descricao
    linha.className = "linha_container_curso";
    const tituloCurso = document.createElement('div'); //define o titulo dentro da tag a
    tituloCurso.className = "curso_titulo";
    const descricaoCurso = document.createElement('div'); //define a descricao
    descricaoCurso.className = "curso_descricao";

    if (!Object.hasOwn(lista_cursos, curso)) continue;

    const element = lista_cursos[curso];

    criarLink.className = "main-conteudos__grid-links";
    criarLink.href = "curso.html";
    criarLink.id = `curso-${iteravel}`;
    tituloCurso.innerHTML = element.curso;
    descricaoCurso.innerHTML = element.descricao;
    criarLink.append(tituloCurso, linha, descricaoCurso);
    listaConteudos.appendChild(criarLink)
    iteravel++;
  }

}

window.onload = () => {
  if (listaConteudos) {
    carregarCursos();
  }
}

botaoTema.addEventListener("click", () => {
  alert('clicou no tema');
});
