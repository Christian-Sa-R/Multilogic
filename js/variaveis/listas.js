export let lista_cursos_matriculados =
  JSON.parse(localStorage.getItem("cursosMatriculados")) || []; //lista com cursos matriculados. Recuperada do localstorage ou criada.

export let lista_cursos_professor =
  JSON.parse(localStorage.getItem("cursosProfessor")) || []; //lista com cursos do professor. Recuperada do localstorage ou criada.
