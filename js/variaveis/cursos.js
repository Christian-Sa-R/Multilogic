import curso1 from "../../jsons/curso1.json" with { type: "json" };
import curso2 from "../../jsons/curso2.json" with { type: "json" };
import curso3 from "../../jsons/curso3.json" with { type: "json" };
import curso4 from "../../jsons/curso4.json" with { type: "json" };
import curso5 from "../../jsons/curso5.json" with { type: "json" };

export let lista_cursos =
  JSON.parse(localStorage.getItem("cursosMultilogic")) || [curso1, curso2, curso3, curso4, curso5];
