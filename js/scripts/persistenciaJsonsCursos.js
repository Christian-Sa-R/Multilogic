function criarJsonCurso(dados) {
  console.log(dados.nomeCurso);
  console.log(dados.idCurso)
  console.log(dados.descricaoCurso);
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