document.addEventListener("DOMContentLoaded", () => {

    const contenedor = document.getElementById("listaAlimentos");

    alimentos.forEach((alimento, index) => {
        const card = document.createElement("div");
        card.classList.add("alimento-card");

        card.innerHTML = `
            <img src="${alimento.imagen}" class="img-alimento" alt="${alimento.nombre}">
            <h3 class="nombre-alimento">${alimento.nombre}</h3>
        `;

        // Al hacer click, ir a la descripción
        card.addEventListener("click", () => {
            localStorage.setItem("alimentoSeleccionado", JSON.stringify(alimento));
            window.location.href = "descripcionalimento.html";
        });

        contenedor.appendChild(card);
    });

    // Navegación principal
    const btnInfoComida = document.getElementById("btnInfoComida");
    if (btnInfoComida) {
        btnInfoComida.addEventListener("click", () => {
            window.location.href = "../informacionDeComidas.html";
        });
    }

    const btnPlanMeta = document.getElementById("btnPlanMeta");
    if (btnPlanMeta) {
        btnPlanMeta.addEventListener("click", () => {
            window.location.href = "../../planificarMeta/planificacionMeta.html";
        });
    }

    const btnRecomendaciones = document.getElementById("btnRecomendaciones");
    if (btnRecomendaciones) {
        btnRecomendaciones.addEventListener("click", () => {
            window.location.href = "../../recomendar/recomendaciones.html";
        });
    }

    const btnConfig = document.getElementById("btnConfig");
    if (btnConfig) {
        btnConfig.addEventListener("click", () => {
            window.location.href = "../../configuracion/configuracion.html";
        });
    }

    const btnMenu = document.getElementById("Menu");
    if (btnMenu) {
        btnMenu.addEventListener("click", () => {
            window.location.href = "../../../index.html";
        });
    }

});