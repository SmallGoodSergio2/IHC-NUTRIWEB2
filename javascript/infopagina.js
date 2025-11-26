document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("btnInfoComida").addEventListener("click", () => {
        window.location.href = "../../../pages/informacionComida/subpaginasInformacion/registrarAlimentos.html";
    });

    document.getElementById("btnPlanMeta").addEventListener("click", () => {
        window.location.href = "../../../pages/planificarMeta/subpaginasInformacion/registrarAlimentos.html";
    });

    document.getElementById("btnRecomendaciones").addEventListener("click", () => {
        window.location.href = "../../../pages/recomendar/recomendaciones.html";
    });

    document.getElementById("btnConfig").addEventListener("click", () => {
        window.location.href = "../../../pages/configuracion.html";
    });

});



function mostrarAlimentos() {
    const lista = document.getElementById("listaAlimentos");

    lista.innerHTML = ""; // limpia antes de agregar

    alimentos.forEach(alimento => {
        const item = document.createElement("div");
        item.classList.add("alimentoItem");

        item.innerHTML = `
            <img src="${alimento.imagen}" alt="${alimento.nombre}" class="imagenAlimento">
            <p>${alimento.nombre}</p>
        `;

        lista.appendChild(item);
    });
}

document.addEventListener("DOMContentLoaded", mostrarAlimentos);

document.getElementById("irCrear").addEventListener("click", () => {
    window.location.href = "../../../pages/informacionComida/subpaginasInformacion/registrarAlimentos.html"; 
});