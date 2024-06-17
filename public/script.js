let edad = 0;

function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    namex: params.get("name"),
    agex: params.get("age"),
  };
}

function displayParams() {
  const params = getQueryParams();
  document.getElementById("nombre").innerText = params.namex;
  document.getElementById("edad").innerText = params.agex;
  edad = parseInt(params.agex);
  cargarDatos()
}

async function cargarDatos() {
  try {
    const response = await fetch("tasas_no_hab.json");
    const datos = await response.json();
    //localStorage.setItem('datos', JSON.stringify(datos));
    const result = datos.find((e) => e.edad === edad);
    console.log(`resul is ${typeof result}`);
    let porc = result ? result.porcentaje : 0;
    
    // if (typeof resul === "undefined") {
    //   console.log(`porc is ${typeof porc}, resul is ${typeof resul}`);
    //   console.log('It looks like it is not possible to get a result');
    //   porc = 0
    // } else {
    //   porc = resul.porcentaje;
    // } //ternary operator does the same of this if else
    document.getElementById("edadjson").innerText = edad;
    document.getElementById("porcentaje").innerText = porc;
    const resultado = parseFloat(edad * porc);
    document.getElementById("valor").innerText = resultado;
  } catch (error) {
    console.error("Error al cargar los datos:", error);
  }
}


window.onload = displayParams;
