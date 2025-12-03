let botonCrear = document.getElementById("botonCrear");
let inputCaloria = document.getElementById("CaloriaTexto");
let inputFecha = document.getElementById("FechaTexto");
let inputDescripcion = document.getElementById("DescripcionTexto");
let inputNombre = document.getElementById("NombreTexto");
let metasAlimentarias = JSON.parse(localStorage.getItem("MetasAlimentarias")) || [];

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("btnInfoComida").addEventListener("click", () => {
        window.location.href = "../../informacionComida/informacionDeComidas.html";
    });

    document.getElementById("btnPlanMeta").addEventListener("click", () => {
        window.location.href = "../planificacionMeta.html";
    });

    document.getElementById("btnRecomendaciones").addEventListener("click", () => {
        window.location.href = "../../recomendar/recomendaciones.html";
    });

    document.getElementById("btnConfig").addEventListener("click", () => {
        window.location.href = "../../configuracion/configuracion.html";
    });

    // Botón Menu para volver al index
    const btnMenu = document.getElementById("Menu");
    if (btnMenu) {
        btnMenu.addEventListener("click", () => {
            window.location.href = "../../../index.html";
        });
    }

});













botonCrear.addEventListener("click", () =>{
  
  
    
    let valorCaloria = inputCaloria.value;
    let valorFecha = inputFecha.value;
    let valorDescripcion = inputDescripcion.value;
    let valorNombre = inputNombre.value;

    let metaAlimentaria = {
       
       nombre : valorNombre,
       calorias: valorCaloria,
       fecha: valorFecha,
       descripcion: valorDescripcion

    };

    metasAlimentarias.push(metaAlimentaria);

    localStorage.setItem("MetasAlimentarias",JSON.stringify(metasAlimentarias));
    alert("se registro la meta");



    inputCaloria.value = "";
    inputDescripcion.value = "";
    inputFecha.value = "";
    inputNombre.value="";
});










