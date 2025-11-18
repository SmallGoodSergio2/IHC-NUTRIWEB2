/* Cambiar de pantalla */
function goToScreen(n) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById("screen" + n).classList.add("active");
}

let selected = null;

/* Seleccionar método de pago */
function selectPayment(method, event) {
    selected = method;

    document.querySelectorAll(".payment-option").forEach(o => o.classList.remove("selected"));
    event.target.classList.add("selected");

    let fields = document.getElementById("paymentFields");

    if (method === "yape") {
        fields.innerHTML = `
            <input type="text" placeholder="Número de celular">
        `;
    } else {
        fields.innerHTML = `
            <input type="text" placeholder="Número de tarjeta">
            <input type="text" placeholder="Fecha (MM/AA)">
            <input type="text" placeholder="CVV">
        `;
    }
}

/* Notificación */
function pay() {
    if (!selected) {
        alert("Selecciona un método de pago");
        return;
    }

    let toast = document.getElementById("toast");
    toast.style.display = "block";

    setTimeout(() => { 
        toast.style.display = "none"; 
    }, 2500);
}
