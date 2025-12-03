const ctx = document.getElementById('miGrafico');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Manzana', 'Banana', 'Pollo', 'Arroz', 'Huevos'],
        datasets: [{
            label: 'Calorías',
            data: [52, 89, 165, 130, 155],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Navegación
document.addEventListener("DOMContentLoaded", () => {
    const btnInfoComida = document.getElementById("btnInfoComida");
    const btnPlanMeta = document.getElementById("btnPlanMeta");
    const btnRecomendaciones = document.getElementById("btnRecomendaciones");
    const btnConfig = document.getElementById("btnConfig");
    const btnMenu = document.getElementById("Menu");

    if (btnInfoComida) {
        btnInfoComida.addEventListener("click", () => {
            window.location.href = "../../informacionComida/informacionDeComidas.html";
        });
    }

    if (btnPlanMeta) {
        btnPlanMeta.addEventListener("click", () => {
            window.location.href = "../../planificarMeta/planificacionMeta.html";
        });
    }

    if (btnRecomendaciones) {
        btnRecomendaciones.addEventListener("click", () => {
            window.location.href = "../../recomendar/recomendaciones.html";
        });
    }

    if (btnConfig) {
        btnConfig.addEventListener("click", () => {
            window.location.href = "../configuracion.html";
        });
    }

    if (btnMenu) {
        btnMenu.addEventListener("click", () => {
            window.location.href = "../../../index.html";
        });
    }
});