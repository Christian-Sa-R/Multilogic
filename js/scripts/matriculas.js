import * as cursos from "../variaveis/cursos.js";

export let lista_cursos_matriculados = []; //lista com cursos matriculados. Criada dinamicamente.

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