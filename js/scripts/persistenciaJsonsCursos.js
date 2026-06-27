import { criarMensagem } from "../estruturas/criarMensagem.js";
import { divConteudo } from "../variaveis/containers.js";
import { lista_cursos } from "../variaveis/cursos.js";
import { lista_cursos_professor } from "../variaveis/listas.js";
import { carregarElementosCursos } from "./meusCursosProfessor.js";

function criarJsonCurso(dados) {
  if (checkarId(dados.idCurso)) {
    return;
  }
  let json = {
    curso: dados.nomeCurso,
    idCurso: dados.idCurso,
    descricao: dados.descricaoCurso,
    aulas: {}
  }
  lista_cursos_professor.push(json);
  localStorage.setItem(
    "cursosProfessor",
    JSON.stringify(lista_cursos_professor),
  )
  lista_cursos.push(json);
  localStorage.setItem(
    "cursosMultilogic",
    JSON.stringify(lista_cursos),
  )
  divConteudo.style.display = "none";
  carregarElementosCursos();
}

function checkarId(id) {
  if (lista_cursos.some((c) => c.idCurso === id)) {
    criarMensagem("Id do curso já está cadastrado, tente novamente.");
    return true;
  }
  return false;
}

export function adicionarListennerFormCurso() {
  const formularioCurso = document.querySelector("#formulario-curso")
  if (formularioCurso) {
    formularioCurso.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);
      const dadosForm = Object.fromEntries(formData);

      criarJsonCurso(dadosForm);
    })
  }
}