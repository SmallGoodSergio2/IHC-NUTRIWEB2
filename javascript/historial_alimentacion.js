document.addEventListener("DOMContentLoaded", () => {

    const contenedor = document.getElementById("listaHistorial");

    // Usar exactamente la misma clave que tú utilizas:
    let historial = JSON.parse(localStorage.getItem("HistorialAlimentos")) || [];

    if (historial.length === 0) {
        contenedor.innerHTML = `
            <p style="font-size: 18px; color: gray;">No tienes alimentos registrados aún.</p>
        `;
        return;
    }

    historial.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("historial-card");
        
        card.innerHTML = `
            <h3>${item.nombre}</h3>
            <p><strong>Calorías:</strong> ${item.calorias}</p>
            <p><strong>Proteínas:</strong> ${item.proteinas} g</p>
            <p><strong>Grasas:</strong> ${item.grasas} g</p>
            <p><strong>Carbohidratos:</strong> ${item.carbohidratos} g</p>
            ${item.fecha ? `<p><em>Registrado: ${item.fecha}</em></p>` : ""}
            <hr>
        `;

        contenedor.appendChild(card);
    });
});