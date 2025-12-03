

// Botones
const btnNuevoObjetivo = document.getElementById("btnNuevoObjetivo");
const btnVolverMenu = document.getElementById("btnVolverMenu");


// 
// EVENTOS


// ➤ Redirigir a la creación de metas
btnNuevoObjetivo.addEventListener("click", () => {
    window.location.href = "../../planificarMeta/subpaginasplanificar/crearMetas.html";
});

// ➤ Volver al menú principal (index.html)
btnVolverMenu.addEventListener("click", () => {
    window.location.href = "../../../index.html";
});


// 
// Animación suave del progreso
// 
document.addEventListener("DOMContentLoaded", () => {
    const fill = document.querySelector(".progress-fill");
    if (fill) {
        fill.style.transition = "width 1.5s ease";
        fill.style.width = "45%";
    }
});
