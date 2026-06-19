import { lista_cursos } from "../variaveis/cursos.js";
let curso, cursoSelecionado;

export let lista_cursos_matriculados =
  JSON.parse(localStorage.getItem("cursosMatriculados")) || []; //lista com cursos matriculados. Recuperada do localstorage ou criada.

export function matricular(id) {
  //deve ser chamada quando o botão "matricular" for clicado.
  for (const element in lista_cursos) {
    if (lista_cursos[element].idCurso === id) {
      curso = lista_cursos[element];
      break;
    }
  }
  if (curso) {
    if (matriculado(curso.idCurso)) {
      for (const element in lista_cursos_matriculados) {
        if (lista_cursos_matriculados[element].idCurso === curso.idCurso) {
          console.log(lista_cursos_matriculados);
          console.log(element);
          lista_cursos_matriculados.splice(element, 1);
          console.log(lista_cursos_matriculados);
          break;
        }
      }
    } else {
      lista_cursos_matriculados.push(curso);
    }
    localStorage.setItem(
      "cursosMatriculados",
      JSON.stringify(lista_cursos_matriculados),
    );
  } else {
    console.log("deu errado");
  }
}

export function matriculado(cursoAtual) {
  return lista_cursos_matriculados.some(
    (element) => element.idCurso === cursoAtual,
  );
}
