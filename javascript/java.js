let alimentos = [
  {
    nombre: "Manzana",
    imagen : "../../../assets/images/Manzana.jpg",
    calorias: 52,
    proteinas: 0.3,
    grasas: 0.2,
    carbohidratos: 14
  },
  {
    nombre: "Platano",
    imagen : "../../../assets/images/Platano.jpg",
    calorias: 89,
    proteinas: 1.1,
    grasas: 0.3,
    carbohidratos: 23
  },
  {
    nombre: "Pollo (pechuga)",
    imagen : "../../../assets/images/PechugadePollo.jpg",
    calorias: 165,
    proteinas: 31,
    grasas: 3.6,
    carbohidratos: 0
  },



  {
    nombre: "Avena",
    imagen : "../../../assets/images/Avena.jpg",
    calorias: 389,
    proteinas: 17,
    grasas: 7,
    carbohidratos: 66
  },



];

let buscador = document.getElementById("buscador");
let contenedor = document.getElementById("listaAlimentos");

function mostrarAlimentos(lista) {
  contenedor.innerHTML = "";

  lista.forEach(alimento => {
    let card = document.createElement("div");
    card.classList.add("card");

    let img = document.createElement("img");
    img.src = alimento.imagen;
    img.alt = alimento.nombre;

    let nombre = document.createElement("p");
    nombre.textContent = alimento.nombre;

    // ⭐ CLICK PARA VER DETALLES
    card.addEventListener("click", () => {

      localStorage.setItem("alimentoSeleccionado", JSON.stringify(alimento));

      // Redirige a la página de información
      window.location.href = "../../../pages/informacionComida/subpaginasInformacion/confirmarRegistro.html";
    });

    card.appendChild(img);
    card.appendChild(nombre);
    contenedor.appendChild(card);
  });
}


// Mostrar todos al inicio
mostrarAlimentos(alimentos);

// FILTRO EN TIEMPO REAL
buscador.addEventListener("input", () => {
  let texto = buscador.value.toLowerCase();

  let filtrados = alimentos.filter(alimento =>
    alimento.nombre.toLowerCase().includes(texto)
  );

  mostrarAlimentos(filtrados);
});



    
