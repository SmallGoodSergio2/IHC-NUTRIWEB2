// === SCRIPT ENVÍO DE MENSAJE === //

const enviarBtn = document.getElementById("btnEnviar");
const mensajeBox = document.getElementById("mensajeAsesor");

const modal = document.getElementById("modalEnviado");
const btnCerrarModal = document.getElementById("btnCerrarModal");


const botonNoti = document.getElementById("botonNotificacion");
const panelNoti = document.getElementById("panelNotificaciones");

botonNoti.addEventListener("click", () => {
    panelNoti.classList.toggle("panel-visible");
    panelNoti.classList.toggle("panel-hidden");
});

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


document.addEventListener("DOMContentLoaded", () => {


    const btnInfoComida = document.getElementById("btnInfoComida");
    if (btnInfoComida) {
        btnInfoComida.addEventListener("click", () => {
            window.location.href = "../../../pages/informacionComida/subpaginasInformacion/registrarAlimentos.html";
        });
    }

    const btnPlanMeta = document.getElementById("btnPlanMeta");
    if (btnPlanMeta) {
        btnPlanMeta.addEventListener("click", () => {
            window.location.href = "../../../pages/planificarMeta/subpaginasInformacion/registrarAlimentos.html";
        });
    }

    const btnRecomendaciones = document.getElementById("btnRecomendaciones");
    if (btnRecomendaciones) {
        btnRecomendaciones.addEventListener("click", () => {
            window.location.href = "../../../pages/recomendar/recomendaciones.html";
        });
    }

    const btnConfig = document.getElementById("btnConfig");
    if (btnConfig) {
        btnConfig.addEventListener("click", () => {
            window.location.href = "../../../pages/configuracion.html";
        });
    }

    const irCrear = document.getElementById("irCrear");
    if (irCrear) {
        irCrear.addEventListener("click", () => {
            window.location.href = "../../../pages/informacionComida/subpaginasInformacion/registrarAlimentos.html";
        });
    }

 })
