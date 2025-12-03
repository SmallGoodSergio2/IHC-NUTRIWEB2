document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("btnInfoComida").addEventListener("click", () => {
        window.location.href = "../informacionComida/informacionDeComidas.html";
    });

    document.getElementById("btnPlanMeta").addEventListener("click", () => {
        window.location.href = "../planificarMeta/planificacionMeta.html";
    });

    document.getElementById("btnRecomendaciones").addEventListener("click", () => {
        window.location.href = "recomendaciones.html";
    });

    document.getElementById("btnConfig").addEventListener("click", () => {
        window.location.href = "../configuracion/configuracion.html";
    });

});

document.getElementById("btnReceta").addEventListener("click", function() {
    window.location.href = "recomendaciones1.html"; 
});

// Botón Menu para volver al index
const btnMenu = document.getElementById("Menu");
if (btnMenu) {
    btnMenu.addEventListener("click", () => {
        window.location.href = "../../index.html";
    });
}