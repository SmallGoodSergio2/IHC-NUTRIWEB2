

// Botón del menú (logo NutriWeb)
document.getElementById("Menu").addEventListener("click", () => {
    window.location.href = "../../index.html";
});

// Navegación barra superior
document.querySelector(".InformacionComida").addEventListener("click", () => {
    window.location.href = "../informacionComida/informacionDeComidas.html";
});

document.querySelector(".PlanificacionMeta").addEventListener("click", () => {
    window.location.href = "../planificarMeta/planificacionMeta.html";
});

document.querySelector(".Recomendaciones").addEventListener("click", () => {
    window.location.href = "recomendaciones.html";
});

document.querySelector(".Configuracion").addEventListener("click", () => {
    window.location.href = "../configuracion/configuracion.html";
});


const filtros = document.querySelectorAll(".Caro, .Regular, .Barato");

filtros.forEach(f => {
    f.style.cursor = "pointer";

    f.addEventListener("click", () => {
        filtros.forEach(x => x.style.color = "black");

        // Marca el seleccionado
        f.style.color = "#B35F2B";

        console.log("Filtro aplicado → " + f.textContent);
        // Aquí iría la lógica para cambiar recetas según filtro
    });
});


// ================================
// FILTRO AVANZADO (MÍNIMO – MÁXIMO)
// ================================
const inputMin = document.querySelector(".MinimoTexto");
const inputMax = document.querySelector(".MaximoTexto");

function validarNumero(input) {
    input.addEventListener("input", () => {
        // Solo números
        input.value = input.value.replace(/[^0-9]/g, "");
    });
}

validarNumero(inputMin);
validarNumero(inputMax);

inputMin.addEventListener("change", () => {
    console.log("Precio mínimo → " + inputMin.value);
});

inputMax.addEventListener("change", () => {
    console.log("Precio máximo → " + inputMax.value);
});


// Contenedor de recetas
const contenedorRecetas = document.querySelector(".EspacioCuadros");

// Ejemplo de datos mock
const recetasEjemplo = [
    { nombre: "Lentejas Económicas", precio: 8 },
    { nombre: "Arroz con Pollo", precio: 12 },
    { nombre: "Sopa Casera", precio: 5 }
];

// Mostrar recetas
function mostrarRecetas() {
    contenedorRecetas.innerHTML = "";

    recetasEjemplo.forEach(receta => {
        const div = document.createElement("div");
        div.classList.add("Cuadro1");

        div.innerHTML = `
            <h2 style="padding:20px;">${receta.nombre}</h2>
            <p style="padding:20px;">Precio aproximado: S/. ${receta.precio}</p>
        `;

        contenedorRecetas.appendChild(div);
    });
}

// Primera carga de recetas
mostrarRecetas();
