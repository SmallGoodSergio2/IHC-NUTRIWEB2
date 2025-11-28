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

});
    