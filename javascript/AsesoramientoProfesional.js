// === SCRIPT ENVÍO DE MENSAJE === //

const enviarBtn = document.getElementById("btnEnviar");
const mensajeBox = document.getElementById("mensajeAsesor");

const modal = document.getElementById("modalEnviado");
const btnCerrarModal = document.getElementById("btnCerrarModal");

enviarBtn.addEventListener("click", function () {
    const texto = mensajeBox.value.trim();

    if (texto === "") {
        alert("Por favor, escribe un mensaje antes de enviar.");
        return;
    }

    // Guardar si necesitas usarlo después
    localStorage.setItem("mensaje_asesor", texto);

    // Mostrar el modal
    modal.classList.remove("hidden");
});

// Botón OK del modal
btnCerrarModal.addEventListener("click", function () {
    modal.classList.add("hidden");
});
