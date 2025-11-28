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
            window.location.href = "../../../pages/informacionComida/subpaginasInformacion/descripcionalimento.html";
        });

        contenedor.appendChild(card);
    });

});