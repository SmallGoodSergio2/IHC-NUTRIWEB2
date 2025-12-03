document.addEventListener("DOMContentLoaded", () => {


    const btnInfoComida = document.getElementById("btnInfoComida");
    if (btnInfoComida) {
        btnInfoComida.addEventListener("click", () => {
            window.location.href = "../informacionComida/informacionDeComidas.html";
        });
    }

    const btnPlanMeta = document.getElementById("btnPlanMeta");
    if (btnPlanMeta) {
        btnPlanMeta.addEventListener("click", () => {
            window.location.href = "planificacionMeta.html";
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
            window.location.href = "subpaginasplanificar/crearMetas.html";
        });
    }

    // Cards de navegación en planificacionMeta
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("click", () => {
            const link = card.getAttribute("data-link");
            if (link === "crear_meta.html") {
                window.location.href = "subpaginasplanificar/crearMetas.html";
            } else if (link === "metas_alimentarias.html") {
                window.location.href = "../VerificarMeta.html";
            } else if (link === "historial.html") {
                window.location.href = "../informacionComida/subpaginasInformacion/historial.html";
            } else if (link === "recordatorios.html") {
                window.location.href = "../Recordatorios.html";
            }
        });
    });

    // Botón Menu para volver al index
    const btnMenu = document.getElementById("Menu");
    if (btnMenu) {
        btnMenu.addEventListener("click", () => {
            window.location.href = "../../index.html";
        });
    }

 })
