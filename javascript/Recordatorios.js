const btnGuardar = document.getElementById("btnGuardar");

const modal = document.getElementById("modalGuardado");
const btnCerrarModal = document.getElementById("btnCerrarModal");

btnGuardar.addEventListener("click", () => {

    // Leer todos los switches
    const recordatorios = {
        frutas: document.getElementById("rec1").checked,
        almuerzo: document.getElementById("rec2").checked,
        cena: document.getElementById("rec3").checked,
        calorias: document.getElementById("rec4").checked,
        caloriasAlm: document.getElementById("rec5").checked
    };

    // Guardar en localStorage
    localStorage.setItem("recordatorios_usuario", JSON.stringify(recordatorios));

    // Mostrar modal
    modal.classList.remove("hidden");
});

// Cerrar modal
btnCerrarModal.addEventListener("click", () => {
    modal.classList.add("hidden");
});
