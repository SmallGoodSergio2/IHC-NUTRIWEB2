document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("btnInfoComida").addEventListener("click", () => {
        window.location.href = "../../../pages/informacionComida/subpaginasInformacion/registrarAlimentos.html";
    });

    document.getElementById("btnPlanMeta").addEventListener("click", () => {
        window.location.href = "../../../pages/planificarMeta/subpaginasplanificar/crearMetas.html";
    });

    document.getElementById("btnRecomendaciones").addEventListener("click", () => {
        window.location.href = "../../pages/recomendar/recomendaciones.html";
    });

    document.getElementById("btnConfig").addEventListener("click", () => {
        window.location.href = "../../pages/configuracion.html";
    });

});

document.getElementById("btnReceta").addEventListener("click", function() {
    window.location.href = "../../../pages/recomendar/recetasimple.html"; 
});