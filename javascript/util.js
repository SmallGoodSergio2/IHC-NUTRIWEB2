// utils.js — módulo ES6 con utilidades

// Navegación reutilizable
export const navegar = (link) => {
  console.log(`🔀 Navegando a: ${link}`);
  window.location.href = link;
};

// Clase de validación (POO)
export class Validador {
  static emailValido(email = "") {
    return email.includes("@") && email.trim().length >= 6;
  }

  static textoMinimo(texto = "", minimo = 1) {
    return texto.trim().length >= minimo;
  }

  static pesosValidos(actual, objetivo) {
    const a = Number(actual);
    const b = Number(objetivo);
    if (Number.isNaN(a) || Number.isNaN(b)) return false;
    // Rango razonable de peso
    return a >= 30 && a <= 250 && b >= 30 && b <= 250;
  }

  // Usa destructuring + template literal
  static metaResumen({ tipo, pesoActual, pesoObjetivo, duracion }) {
    const diferencia = pesoObjetivo - pesoActual;
    const direccion =
      diferencia === 0
        ? "mantener tu peso"
        : diferencia > 0
        ? "subir de peso"
        : "bajar de peso";

    return `Tu meta es ${direccion}: de ${pesoActual} kg a ${pesoObjetivo} kg en ${duracion} semanas.`;
  }
}
