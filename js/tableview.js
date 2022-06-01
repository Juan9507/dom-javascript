import { data } from "./data.js";
export const tableView = () => {
  //Variables globales
  let dataOriginal = data.slice();
  let saberOrden = 0;

  const container = document.querySelector("#container");
  container.classList.add("container");
  const table = document.createElement("table");
  table.classList.add("table");
  const thead = document.createElement("thead");
  thead.classList.add("thead");
  const tr = document.createElement("tr");

  //Creacion de los th
  const thNombre = document.createElement("th");
  const thApellido = document.createElement("th");
  const thEdad = document.createElement("th");
  const thEmail = document.createElement("th");
  const thTelefono = document.createElement("th");

  thNombre.textContent = "Nombre";
  thApellido.textContent = "Apellido";
  thEdad.textContent = "Edad";
  thEmail.textContent = "Email";
  thTelefono.textContent = "Telefono";

  table.append(thead);
  thead.append(tr);
  tr.append(thNombre, thApellido, thEdad, thEmail, thTelefono);
  const tbody = document.createElement("tbody");
  function mostrarDatos(data) {
    data.forEach((element) => {
      let tr = document.createElement("tr");
      let tdNombre = document.createElement("td");
      tdNombre.textContent = element.nombre;
      let tdApellido = document.createElement("td");
      tdApellido.textContent = element.apellidos;
      let tdEdad = document.createElement("td");
      tdEdad.textContent = element.edad;
      let tdEmail = document.createElement("td");
      tdEmail.textContent = element.email;
      let tdTelefono = document.createElement("td");
      tdTelefono.textContent = element.telefono;
      tr.append(tdNombre, tdApellido, tdEdad, tdEmail, tdTelefono);
      tbody.appendChild(tr);
    });
    //Agregamos el cuerpo a la tabla
    table.append(tbody);
  }

  mostrarDatos(dataOriginal);

  thead.addEventListener("click", () => {
    //ordnarData();
    if (saberOrden == 0) {
      ordenarAsc();
    } else if (saberOrden == 1) {
      ordenarDesc();
    } else {
      ordenarOriginal();
    }
  });

  async function ordenarAsc() {
    saberOrden = 1;
    const listaAsc = await data.sort(sortArrayAsc);
    tbody.innerHTML = "";
    await mostrarDatos(listaAsc);
  }

  async function ordenarDesc() {
    saberOrden = 2;
    const listaAsc = await data.sort(sortArrayDesc);
    tbody.innerHTML = "";
    await mostrarDatos(listaAsc);
  }

  async function ordenarOriginal() {
    saberOrden = 0;
    tbody.innerHTML = "";
    await mostrarDatos(dataOriginal);
  }

  function sortArrayAsc(x, y) {
    return x.nombre.localeCompare(y.nombre);
  }

  function sortArrayDesc(x, y) {
    return y.nombre.localeCompare(x.nombre);
  }

  //Creacion final de la tabla
  container.append(table);
};
