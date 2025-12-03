document.addEventListener("DOMContentLoaded", () => {

    // Obtener alimento del localStorage
    const alimento = JSON.parse(localStorage.getItem("alimentoSeleccionado"));

    if (!alimento) {
        alert("No se encontró información del alimento.");
        return;
    }

    document.getElementById("imgAlimento").src = alimento.imagen;
    document.getElementById("nombreAlimento").textContent = alimento.nombre;
    document.getElementById("calorias").textContent = alimento.calorias;
    document.getElementById("proteinas").textContent = alimento.proteinas;
    document.getElementById("grasas").textContent = alimento.grasas;
    document.getElementById("carbohidratos").textContent = alimento.carbohidratos;
    document.getElementById("descripcionTexto").textContent = alimento.descripcion;

    document.getElementById("volverBtn").addEventListener("click", () => {
        window.history.back();
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