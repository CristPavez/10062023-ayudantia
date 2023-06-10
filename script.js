const data = {
  arrayColores: [
    {
      nombreColor: "rojo",
      valorHexadec: "#f00",
    },
    {
      nombreColor: "verde",
      valorHexadec: "#0f0",
    },
    {
      nombreColor: "azul",
      valorHexadec: "#00f",
    },
    {
      nombreColor: "cyan",
      valorHexadec: "#0ff",
    },
    {
      nombreColor: "magenta",
      valorHexadec: "#f0f",
    },
    {
      nombreColor: "amarillo",
      valorHexadec: "#ff0",
    },
    {
      nombreColor: "negro",
      valorHexadec: "#000",
    },
    {
      nombreColor: "blanco",
      valorHexadec: "#fff",
    },
  ],
};

// ID: colores
const container = document.getElementById("colores");

// Funcion de inicio
function start(colores) {
  container.innerHTML = "";
  colores.map((item, index) => {
    container.innerHTML += `
    <div key="${index}" class="card-colores" style="background-color: ${item.valorHexadec}">
    <h1>${item.nombreColor}</h1>
    <p>${item.valorHexadec}</p>
    </div>
    `;
  });
}

// Funcion del formulario
function form(event) {
  event.preventDefault();
  const input = document.getElementById("value").value;
  const filter = data.arrayColores.filter((item) => item.nombreColor === input);
  start(filter);
}

start(data.arrayColores);
