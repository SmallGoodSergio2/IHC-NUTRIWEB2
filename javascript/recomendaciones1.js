document.addEventListener("DOMContentLoaded", () => {
    console.log("JS cargado correctamente");

    // Elementos de tarjetas
    const tarjetaRecetas = document.getElementById("tarjeta-recetas");
    const tarjetaReporte = document.getElementById("tarjeta-reporte");

    if (tarjetaRecetas) {
        tarjetaRecetas.innerHTML = `
            <div style="
                padding: 15px;
                font-size: 14px;
            ">
                <h4>🍽 Pollo salteado con verduras</h4>
                <p><strong>Tiempo:</strong> 20 min</p>
                <p><strong>Calorías:</strong> 350 kcal</p>
                <button id="btn-ver-recetas" style="
                    margin-top:10px;
                    padding: 8px 12px;
                    background:#c17f38;
                    color:white;
                    border:none;
                    border-radius:8px;
                    cursor:pointer;
                ">Ver más recetas</button>
            </div>
        `;
    }

    if (tarjetaReporte) {
        tarjetaReporte.innerHTML = `
            <div style="padding:15px;">
                <h4>📊 Meta semanal</h4>
                <p>Consumo de frutas</p>
                <div style="width:100%; background:#ddd; border-radius:8px;">
                    <div style="
                        width:65%;
                        height:14px;
                        background:#c17f38;
                        border-radius:8px;
                    "></div>
                </div>
                <p><strong>65% completado</strong></p>
            </div>
        `;
    }

    // Navegación entre páginas
    window.showRecipeList = () => {
        document.getElementById("categories-page").style.display = "none";
        document.getElementById("home-page").style.display = "none";
        document.getElementById("recipe-list-page").style.display = "block";
    };

    window.showCategories = () => {
        document.getElementById("recipe-list-page").style.display = "none";
        document.getElementById("home-page").style.display = "none";
        document.getElementById("recipe-detail-page").style.display = "none";
        document.getElementById("categories-page").style.display = "block";
    };

    window.showRecipeDetail = () => {
        document.getElementById("recipe-list-page").style.display = "none";
        document.getElementById("recipe-detail-page").style.display = "block";
    };

    // Botón dentro de la tarjeta
    document.addEventListener("click", (e) => {
        if (e.target.id === "btn-ver-recetas") {
            showCategories();
        }
    });
});
