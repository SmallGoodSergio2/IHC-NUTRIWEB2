// ================================
//      CLASE VALIDACIONES (POO)
// ================================
class Validador {
  static emailValido(email = "") {
    return email.includes("@") && email.length >= 6;
  }

  static textoMinimo(texto = "", min = 10) {
    return texto.trim().length >= min;
  }
}

// ================================
//   ANIMACIÓN DE BARRA DE PROGRESO
// ================================
window.addEventListener("DOMContentLoaded", () => {
  const bar = document.querySelector(".progress__fill");
  if (!bar) return;

  const porcentajeFinal = bar.style.width || "45%";

  bar.style.transition = "none";
  bar.style.width = "0%";

  setTimeout(() => {
    bar.style.transition = "width 1.2s ease-out";
    bar.style.width = porcentajeFinal;
  }, 80);
});

// ================================
//      CLICK EN CARDS (Planificar)
// ================================
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const { link } = card.dataset;
    if (link) window.location.href = link;
  });
});

// ================================
//      FAVORITOS (descripción comida)
// ================================
document.querySelectorAll(".fav").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    btn.textContent = btn.classList.contains("active") ? "♥" : "♡";
  });
});

// ================================
//      FORMULARIO ATENCIÓN CLIENTE
// ================================
const supportForm = document.querySelector("#supportForm");

if (supportForm) {
  supportForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.querySelector("#supportEmail").value;
    const mensaje = document.querySelector("#supportMessage").value;
    const errorBox = document.querySelector("#supportError");

    const errores = [];
    if (!Validador.emailValido(email)) errores.push("Correo inválido.");
    if (!Validador.textoMinimo(mensaje, 10)) errores.push("El mensaje debe tener mínimo 10 caracteres.");

    if (errores.length) {
      errorBox.style.display = "block";
      errorBox.textContent = errores.join(" ");
      return;
    }

    errorBox.style.display = "none";

    localStorage.setItem("ultimoCorreo", email);
    localStorage.setItem("ultimoMensaje", mensaje);

    showToast("Mensaje enviado correctamente ✔", "success");
    supportForm.reset();
  });

  const ultimoCorreo = localStorage.getItem("ultimoCorreo");
  const ultimoMensaje = localStorage.getItem("ultimoMensaje");
  if (ultimoCorreo) document.querySelector("#supportEmail").value = ultimoCorreo;
  if (ultimoMensaje) document.querySelector("#supportMessage").value = ultimoMensaje;
}

// ================================
//      BUSCADOR ATENCIÓN CLIENTE
// ================================
const searchInput = document.querySelector(".search input");

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const term = searchInput.value.toLowerCase();
    const tiles = document.querySelectorAll(".tile");

    tiles.forEach(tile => {
      const txt = tile.innerText.toLowerCase();
      tile.style.display = txt.includes(term) ? "block" : "none";
    });
  });
}

// ====================================
//   HISTORIAL DE NOTIFICACIONES
// ====================================
const STORAGE_KEY_NOTIFS = "nutriwebNotificacionesSesion";

function guardarNotificacion(mensaje, tipo) {
  const lista = JSON.parse(sessionStorage.getItem(STORAGE_KEY_NOTIFS)) || [];
  lista.unshift({
    id: Date.now(),
    mensaje,
    tipo,
    fecha: new Date().toISOString()
  });
  sessionStorage.setItem(STORAGE_KEY_NOTIFS, JSON.stringify(lista));
}

function obtenerNotificaciones() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY_NOTIFS)) || [];
}



function formatearFechaCorta(iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleString("es-PE", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function renderNotificaciones() {
  const list = document.getElementById("notifList");
  if (!list) return;

  const notifs = obtenerNotificaciones();
  list.innerHTML = "";

  if (!notifs.length) {
    list.innerHTML = `<p style="font-size:0.8rem; color:#ccc;">No tienes notificaciones aún.</p>`;
    return;
  }

  notifs.forEach(n => {
    const div = document.createElement("div");
    div.className = `notif-item notif-item--${n.tipo || "info"}`;
    div.innerHTML = `
      <div class="notif-item__msg">${n.mensaje}</div>
      <div class="notif-item__time">${formatearFechaCorta(n.fecha)}</div>
    `;
    list.appendChild(div);
  });
}

// ================================
//      TOAST GLOBAL ANIMADO
// ================================
function showToast(mensaje, tipo = "info") {
  guardarNotificacion(mensaje, tipo); // también se guarda en historial

  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.classList.remove("toast--success", "toast--danger", "toast--warning", "toast--info");

  if (tipo === "success") toast.classList.add("toast--success");
  else if (tipo === "danger") toast.classList.add("toast--danger");
  else if (tipo === "warning") toast.classList.add("toast--warning");
  else toast.classList.add("toast--info");

  toast.textContent = mensaje;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);
}

// ====================================
//   METAS ALIMENTARIAS - LOCALSTORAGE
// ====================================
const STORAGE_KEY_METAS = "metasAlimentarias";

function cargarMetasDesdeStorage() {
  try {
    const data = localStorage.getItem(STORAGE_KEY_METAS);
    if (!data) return [];
    return JSON.parse(data);
  } catch (e) {
    console.error("Error leyendo metas:", e);
    return [];
  }
}

function guardarMetasEnStorage(metas) {
  localStorage.setItem(STORAGE_KEY_METAS, JSON.stringify(metas));
}

// ================================
//      CREAR META
// ================================
function manejarSubmitMeta(e) {
  e.preventDefault();

  const tipoMeta = document.getElementById("tipoMeta").value;
  const pesoActual = Number(document.getElementById("pesoActual").value);
  const pesoObjetivo = Number(document.getElementById("pesoObjetivo").value);
  const duracion = Number(document.getElementById("duracion").value);
  const fechaInicio = document.getElementById("fechaInicio").value;
  const comentarios = document.getElementById("comentarios").value;

  const nuevaMeta = {
    id: Date.now(),
    tipoMeta,
    pesoActual,
    pesoObjetivo,
    duracion,
    fechaInicio,
    comentarios,
    progreso: 0,
    estado: "activa"
  };

  const metas = cargarMetasDesdeStorage();
  metas.push(nuevaMeta);
  guardarMetasEnStorage(metas);

  showToast("Meta guardada con éxito 🎉", "success");

  setTimeout(() => {
    window.location.href = "metas_alimentarias.html";
  }, 1800);
}

// ================================
//      LISTAR METAS
// ================================
function formatearNombreMeta(tipo) {
  if (tipo === "bajar") return "Bajar de peso";
  if (tipo === "subir") return "Subir de peso";
  if (tipo === "mantener") return "Mantener peso saludable";
  if (tipo === "musculo") return "Aumentar masa muscular";
  return tipo;
}

function renderizarMetas(filtro = "todas") {
  const contenedor = document.querySelector(".goals-list");
  const mensajeVacio = document.querySelector(".goals-empty");
  if (!contenedor) return;

  const metas = cargarMetasDesdeStorage();
  contenedor.innerHTML = "";

  const metasFiltradas = filtro === "todas"
    ? metas
    : metas.filter(m => m.estado === filtro);

  if (!metasFiltradas.length) {
    if (mensajeVacio) mensajeVacio.style.display = "block";
    return;
  } else if (mensajeVacio) {
    mensajeVacio.style.display = "none";
  }

  metasFiltradas.forEach(meta => {
    const card = document.createElement("article");
    card.className = "goal-card";
    card.dataset.status = meta.estado;

    const porcentaje = meta.progreso ?? 0;

    card.innerHTML = `
      <h2 class="goal-title">${formatearNombreMeta(meta.tipoMeta)}</h2>
      <p><strong>Duración:</strong> ${meta.duracion} semanas</p>
      <p><strong>Peso actual:</strong> ${meta.pesoActual} kg</p>
      <p><strong>Peso objetivo:</strong> ${meta.pesoObjetivo} kg</p>

      <div class="progress__bar progress__bar--small">
        <div class="progress__fill" style="width:${porcentaje}%"></div>
      </div>
      <p class="goal-progress-label">${porcentaje}% Completado</p>

      <div class="goal-actions">
        <button class="btn-goal btn-goal--secondary" data-accion="editar" data-id="${meta.id}">Editar</button>
        <button class="btn-goal btn-goal--primary" data-accion="completar" data-id="${meta.id}">Marcar completada</button>
        <button class="btn-goal btn-goal--danger" data-accion="eliminar" data-id="${meta.id}">Eliminar</button>
      </div>
    `;

    contenedor.appendChild(card);
  });
}

// ================================
//      ACCIONES SOBRE METAS
// ================================
function manejarClickEnMetas(e) {
  const btn = e.target.closest("[data-accion]");
  if (!btn) return;

  const id = Number(btn.dataset.id);
  const accion = btn.dataset.accion;

  let metas = cargarMetasDesdeStorage();
  const i = metas.findIndex(m => m.id === id);
  if (i === -1) return;

  if (accion === "eliminar") {
    metas.splice(i, 1);
    showToast("Meta eliminada 🗑️", "danger");
  } else if (accion === "completar") {
    metas[i].estado = "completada";
    metas[i].progreso = 100;
    showToast("Meta completada ✔", "success");
  } else if (accion === "editar") {
    showToast("Función de edición pendiente ✏️", "info");
    return;
  }

  guardarMetasEnStorage(metas);
  renderizarMetas(obtenerFiltroActual());
}

// ================================
//      FILTROS METAS
// ================================
function obtenerFiltroActual() {
  const activo = document.querySelector(".goal-filter.goal-filter--active");
  return activo ? activo.dataset.filter : "todas";
}

function inicializarFiltrosMetas() {
  const botones = document.querySelectorAll(".goal-filter");
  const contenedor = document.querySelector(".goals-list");
  if (!botones.length || !contenedor) return;

  botones.forEach(btn => {
    btn.addEventListener("click", () => {
      botones.forEach(b => b.classList.remove("goal-filter--active"));
      btn.classList.add("goal-filter--active");
      renderizarMetas(btn.dataset.filter);
    });
  });

  contenedor.addEventListener("click", manejarClickEnMetas);
}

// ================================
//   INICIALIZACIÓN GLOBAL
// ================================
document.addEventListener("DOMContentLoaded", () => {
  // Crear meta
  const formMeta = document.getElementById("goalForm");
  if (formMeta) formMeta.addEventListener("submit", manejarSubmitMeta);

  // Listar metas
  if (document.querySelector(".goals-list")) {
    inicializarFiltrosMetas();
    renderizarMetas("todas");
  }

  // Panel de notificaciones
  const notifToggle = document.getElementById("notifToggle");
  const notifPanel = document.getElementById("notifPanel");
  const notifClear = document.getElementById("notifClear");

  if (notifToggle && notifPanel) {
    notifToggle.addEventListener("click", (e) => {
      e.preventDefault();
      notifPanel.classList.toggle("notif-panel--open");
      if (notifPanel.classList.contains("notif-panel--open")) {
        renderNotificaciones();
      }
    });
  }

  if (notifClear) {
    notifClear.addEventListener("click", () => {
      localStorage.removeItem(STORAGE_KEY_NOTIFS);
      renderNotificaciones();
      showToast("Historial de notificaciones borrado", "warning");
    });
  }
});
