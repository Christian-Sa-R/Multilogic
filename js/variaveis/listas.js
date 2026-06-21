export let lista_cursos_matriculados =
    JSON.parse(localStorage.getItem("cursosMatriculados")) || []; //lista com cursos matriculados. Recuperada do localstorage ou criada.