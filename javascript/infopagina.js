document.addEventListener("DOMContentLoaded", () => {

    const btnInfoComida = document.getElementById("btnInfoComida");
    if (btnInfoComida) {
        btnInfoComida.addEventListener("click", () => {
            window.location.href = "subpaginasInformacion/registrarAlimentos.html";
        });
    }

    const btnPlanMeta = document.getElementById("btnPlanMeta");
    if (btnPlanMeta) {
        btnPlanMeta.addEventListener("click", () => {
            window.location.href = "../planificarMeta/planificacionMeta.html";
        });
    }

    const btnRecomendaciones = document.getElementById("btnRecomendaciones");
    if (btnRecomendaciones) {
        btnRecomendaciones.addEventListener("click", () => {
            window.location.href = "../recomendar/recomendaciones.html";
        });
    }

    const btnConfig = document.getElementById("btnConfig");
    if (btnConfig) {
        btnConfig.addEventListener("click", () => {
            window.location.href = "../configuracion/configuracion.html";
        });
    }

    const irCrear = document.getElementById("irCrear");
    if (irCrear) {
        irCrear.addEventListener("click", () => {
            window.location.href = "subpaginasInformacion/registrarAlimentos.html";
        });
    }

    // Cuadros de navegación
    const cuadroBoton1 = document.querySelector(".cuadro-boton1");
    if (cuadroBoton1) {
        cuadroBoton1.addEventListener("click", () => {
            window.location.href = "subpaginasInformacion/descripcionDetallada.html";
        });
    }

    const cuadroBoton2 = document.querySelector(".cuadro-boton2");
    if (cuadroBoton2) {
        cuadroBoton2.addEventListener("click", () => {
            window.location.href = "subpaginasInformacion/registrarAlimentos.html";
        });
    }

    // Botón Menu para volver al index
    const btnMenu = document.getElementById("Menu");
    if (btnMenu) {
        btnMenu.addEventListener("click", () => {
            window.location.href = "../../index.html";
        });
    }

});
