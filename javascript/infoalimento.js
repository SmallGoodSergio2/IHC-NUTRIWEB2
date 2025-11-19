let contenedor = document.getElementById("infoAlimento");

// Recuperar el alimento guardado
let alimento = JSON.parse(localStorage.getItem("alimentoSeleccionado"));

if (alimento) {
    contenedor.innerHTML = `
        <div class="alimento-detalle">
            <img src="${alimento.imagen}" alt="${alimento.nombre}">
            <h1>${alimento.nombre}</h1>
        </div>
    `;
}

let botonRegistrar = document.getElementById("registrarBtn");


botonRegistrar.addEventListener("click", () => {

    let historial = JSON.parse(localStorage.getItem("HistorialAlimentos")) || [];

    historial.push(alimento);

    localStorage.setItem("HistorialAlimentos", JSON.stringify(historial));

    alert("Alimento registrado en el historial");
});
