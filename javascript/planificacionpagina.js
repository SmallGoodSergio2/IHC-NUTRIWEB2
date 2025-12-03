document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("btnInfoComida").addEventListener("click", () => {
        window.location.href = "../informacionComida/subpaginasInformacion/registrarAlimentos.html";
    });

    document.getElementById("btnPlanMeta").addEventListener("click", () => {
        window.location.href = "subpaginasplanificar/crearMetas.html";
    });

    document.getElementById("btnRecomendaciones").addEventListener("click", () => {
        window.location.href = "../recomendar/recomendaciones.html";
    });

    document.getElementById("btnConfig").addEventListener("click", () => {
        window.location.href = "../configuracion/configuracion.html";
    });

});