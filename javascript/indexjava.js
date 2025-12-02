const botonNoti = document.getElementById("botonNotificacion");
const panelNoti = document.getElementById("panelNotificaciones");

botonNoti.addEventListener("click", () => {
    panelNoti.classList.toggle("panel-visible");
    panelNoti.classList.toggle("panel-hidden");
});

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("btnInfoComida").addEventListener("click", () => {
        window.location.href = "/IHC-NUTRIWEB2/pages/informacionComida/informacionDeComidas.html";
    });

    document.getElementById("btnPlanMeta").addEventListener("click", () => {
        window.location.href = "/IHC-NUTRIWEB2/pages/planificarMeta/planificacionMeta.html";
    });

    document.getElementById("btnRecomendaciones").addEventListener("click", () => {
        window.location.href = "/IHC-NUTRIWEB2/pages/recomendar/recomendaciones2.html";
    });

    document.getElementById("btnConfig").addEventListener("click", () => {
        window.location.href = "/IHC-NUTRIWEB2/pages/configuracion.html";
    });

});



document.getElementById("btnAsistente").addEventListener("click", () => {
    window.location.href = "pages/AsesoramientoProfesional.html"; 
});
