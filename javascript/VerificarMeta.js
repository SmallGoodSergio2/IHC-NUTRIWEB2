// JS para funcionalidad "Metas Alimentarias"
// Incluye: eventos, validaciones, manipulación del DOM

// ====== Selección de elementos ======
const fechaInput = document.getElementById('fecha');
const btnVerMeta = document.querySelector('.btn');
const mainContent = document.querySelector('.content');

// ====== EVENTO: Validación al salir del input (blur) ======
fechaInput.addEventListener('blur', () => {
    if (!fechaInput.value) {
        fechaInput.style.border = '2px solid red';
    } else {
        fechaInput.style.border = '2px solid green';
    }
});

// ====== EVENTO: Click en "Ver meta" ======
btnVerMeta.addEventListener('click', () => {
    if (!fechaInput.value) {
        alert('Por favor selecciona una fecha.');
        fechaInput.style.border = '2px solid red';
        return;
    }

    mostrarResultado();
});

// ====== Función que cambia dinámicamente la pantalla ======
function mostrarResultado() {
    mainContent.innerHTML = `
        <h1>Metas Alimentarias</h1>
        <div class="card">
            <h2>¡WOW!</h2>
            <p>Se cumplió la meta alimentaria</p>
            <img src="emoji.png" alt="emoji" style="width:120px; margin:15px auto; display:block;">
            <button class="btn-secondary" onclick="location.reload()">Regresar</button>
        </div>
    `;
}