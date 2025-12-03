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

// Navegación principal
const btnInfoComida = document.getElementById("btnInfoComida");
const btnPlanMeta = document.getElementById("btnPlanMeta");
const btnRecomendaciones = document.getElementById("btnRecomendaciones");
const btnConfig = document.getElementById("btnConfig");
const btnMenu = document.getElementById("Menu");

if (btnInfoComida) {
    btnInfoComida.addEventListener("click", () => {
        window.location.href = "../informacionDeComidas.html";
    });
}

if (btnPlanMeta) {
    btnPlanMeta.addEventListener("click", () => {
        window.location.href = "../../planificarMeta/planificacionMeta.html";
    });
}

if (btnRecomendaciones) {
    btnRecomendaciones.addEventListener("click", () => {
        window.location.href = "../../recomendar/recomendaciones.html";
    });
}

if (btnConfig) {
    btnConfig.addEventListener("click", () => {
        window.location.href = "../../configuracion/configuracion.html";
    });
}

if (btnMenu) {
    btnMenu.addEventListener("click", () => {
        window.location.href = "../../../index.html";
    });
}
