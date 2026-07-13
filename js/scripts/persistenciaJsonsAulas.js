import { lista_cursos } from "../variaveis/cursos.js";
import { lista_cursos_professor } from "../variaveis/listas.js";
import { criarMensagem } from "../estruturas/criarMensagem.js";
import { divConteudo } from "../variaveis/containers.js";
import { carregarElementosCursos } from "./meusCursosProfessor.js";

function criarJsonAula(dados, conteudo) {
  const curso = sessionStorage.getItem("cursoAtual");
  if (checkarInfos(curso, dados.tituloAula, dados.idAula)) {
    return;
  }
  let json = {
    tituloAula: dados.tituloAula.trim(),
    idAula: dados.idAula,
    descricaoAula: dados.descricaoAula,
    conteudo: conteudo,
  };
  const cursoReal = lista_cursos.find((c) => c.idCurso === curso);
  const cursoRealProfessor = lista_cursos_professor.find((c) => c.idCurso === curso);
  cursoReal.aulas[dados.idAula] = json;
  cursoRealProfessor.aulas[dados.idAula] = json;
  console.log(lista_cursos);
  console.log(lista_cursos_professor);
  localStorage.setItem("cursosMultilogic", JSON.stringify(lista_cursos));
  localStorage.setItem("cursosProfessor", JSON.stringify(lista_cursos_professor));
  divConteudo.style.display = "none";
  window.location.href = "./meusCursos.html";
  carregarElementosCursos();
}

function checkarInfos(curso, titulo, id) {
  //checka se o curso existe
  if (!lista_cursos.some((c) => c.idCurso === curso)) {
    criarMensagem("Curso não encontrado, tente novamente.");
    return true;
  }
  const cursoReal = lista_cursos.find((c) => c.idCurso === curso);
  //checka se o titulo esta vazio
  if (titulo.trim() === "") {
    criarMensagem("Título da aula não pode estar vazio");
    console.log(titulo.trim());
    return true;
  }
  //checka se o titulo ja existe no curso
  for (const aula in cursoReal.aulas) {
    if (cursoReal.aulas[aula].tituloAula === titulo) {
      criarMensagem("Título da aula já está cadastrado, tente novamente.");
      return true;
    }
  }
  //checka se o id ja existe no curso
  for (const aula in cursoReal.aulas) {
    if (cursoReal.aulas[aula].idAula === id) {
      criarMensagem("Id da aula já está cadastrado, tente novamente.");
      return true;
    }
  }
}

export function adicionarListennerFormAula() {
  const formularioAula = document.querySelector("#formulario-aula");
  if (formularioAula) {
    formularioAula.addEventListener("submit", (e) => {
      e.preventDefault();

      const conteudo = [];
      const formData = new FormData(e.target);
      for (let i = 0; i < formData.getAll("conteudo[]").length; i++) {
        if (formData.getAll("conteudo[]")[i] === "") {
          conteudo.push(`<video controls src="../videos/video_teste.mp4" type="video.mp4"></video>`);
        } else {
          conteudo.push(`<p>${formData.getAll("conteudo[]")[i]}</p>`);
        }
      }
      formData.delete("conteudo[]");
      const dadosForm = Object.fromEntries(formData);
      criarJsonAula(dadosForm, conteudo);
    });
  }
}

export function excluirAula(cursoId, aulaId) {
  const cursoReal = lista_cursos.find((c) => c.idCurso === cursoId);
  const cursoRealProfessor = lista_cursos_professor.find((c) => c.idCurso === cursoId);
  for (const aula in cursoReal.aulas) {
    if (cursoReal.aulas[aula].idAula === aulaId) {
      delete cursoReal.aulas[aula];
      delete cursoRealProfessor.aulas[aula];
      localStorage.setItem("cursosMultilogic", JSON.stringify(lista_cursos));
      localStorage.setItem("cursosProfessor", JSON.stringify(lista_cursos_professor));
      divConteudo.style.display = "none";
    }
  }
}