const botonNoti = document.getElementById("botonNotificacion");
const panelNoti = document.getElementById("panelNotificaciones");

botonNoti.addEventListener("click", () => {
    panelNoti.classList.toggle("panel-visible");
    panelNoti.classList.toggle("panel-hidden");
});