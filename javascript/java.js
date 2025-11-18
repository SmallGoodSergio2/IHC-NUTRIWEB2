let botonCrear = document.getElementById("botonCrear");
let inputCaloria = document.getElementById("CaloriaTexto");
let inputFecha = document.getElementById("FechaTexto");
let inputDescripcion = document.getElementById("DescripcionTexto");
let inputNombre = document.getElementById("NombreTexto");
let metasAlimentarias = JSON.parse(localStorage.getItem("MetasAlimentarias")) || [];



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