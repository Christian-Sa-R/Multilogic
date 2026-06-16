import curso1 from "../jsons/curso1.json" with { type: "json" };
import curso2 from "../jsons/curso2.json" with { type: "json" };
import curso3 from "../jsons/curso3.json" with { type: "json" };
import curso4 from "../jsons/curso4.json" with { type: "json" };
import curso5 from "../jsons/curso5.json" with { type: "json" };

const listaConteudos = document.querySelector(".main-conteudos__grid");
const botaoTema = document.querySelector(".header-botoes-tema");

var lista_cursos = [curso1, curso2, curso3, curso4, curso5];
var iteravel = 1;

for (const curso in lista_cursos) {
  if (!Object.hasOwn(lista_cursos, curso)) continue;

  const element = lista_cursos[curso];

  listaConteudos.innerHTML += `<a class="main-conteudos__grid-links" href="curso.html" id="curso${iteravel}"></a>`;
  document.querySelector(`#curso${iteravel}`).innerHTML = element.curso;
  iteravel++;
}

botaoTema.addEventListener("click", () => {
  alert(curso1.curso);
});
