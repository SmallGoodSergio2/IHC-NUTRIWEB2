document.addEventListener("DOMContentLoaded", () => {

    const btnInfoComida = document.getElementById("btnInfoComida");
    if (btnInfoComida) {
        btnInfoComida.addEventListener("click", () => {
            window.location.href = "../../../pages/informacionComida/subpaginasInformacion/registrarAlimentos.html";
        });
    }

    const btnPlanMeta = document.getElementById("btnPlanMeta");
    if (btnPlanMeta) {
        btnPlanMeta.addEventListener("click", () => {
            window.location.href = "../../../pages/planificarMeta/subpaginasInformacion/registrarAlimentos.html";
        });
    }

    const btnRecomendaciones = document.getElementById("btnRecomendaciones");
    if (btnRecomendaciones) {
        btnRecomendaciones.addEventListener("click", () => {
            window.location.href = "../../../pages/recomendar/recomendaciones.html";
        });
    }

    const btnConfig = document.getElementById("btnConfig");
    if (btnConfig) {
        btnConfig.addEventListener("click", () => {
            window.location.href = "../../../pages/configuracion.html";
        });
    }

    const irCrear = document.getElementById("irCrear");
    if (irCrear) {
        irCrear.addEventListener("click", () => {
            window.location.href = "../../../pages/informacionComida/subpaginasInformacion/registrarAlimentos.html";
        });
    }

    // --- Cuadros ---
    const cuadroBoton1 = document.getElementById("cuadrobo1");
    if (cuadroBoton1) {
        cuadroBoton1.addEventListener("click", () => {
            window.location.href = "../../../pages/informacionComida/subpaginasInformacion/descripcionDetallada.html";
        });
    }

    const cuadroBoton2 = document.getElementById("cuadrobo2");
    if (cuadroBoton2) {
        cuadroBoton2.addEventListener("click", () => {
            window.location.href = "../../../pages/informacionComida/subpaginasInformacion/registrarAlimentos.html";
        });
    }

});
