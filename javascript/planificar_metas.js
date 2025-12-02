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
            window.location.href = "../../pages/planificarMeta/planificacionMeta.html";
        });
    }

    const btnRecomendaciones = document.getElementById("btnRecomendaciones");
    if (btnRecomendaciones) {
        btnRecomendaciones.addEventListener("click", () => {
            window.location.href = "../../pages/recomendar/recomendaciones2.html";
        });
    }

    const btnConfig = document.getElementById("btnConfig");
    if (btnConfig) {
        btnConfig.addEventListener("click", () => {
            window.location.href = "../../pages/configuracion/configuracion.html";
        });
    }

    const irCrear = document.getElementById("irCrear");
    if (irCrear) {
        irCrear.addEventListener("click", () => {
            window.location.href = "../../../pages/informacionComida/subpaginasInformacion/registrarAlimentos.html";
        });
    }

 })
