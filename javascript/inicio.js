// ----- ROTACIÓN DE IMÁGENES -----
const imgs = document.querySelectorAll(".rotating-img");
let index = 0;

setInterval(() => {
  imgs[index].classList.remove("active");
  index = (index + 1) % imgs.length;
  imgs[index].classList.add("active");
}, 2000); // cambia cada 2 segundos

// ----- NAV ACTIVO -----
const links = document.querySelectorAll(".nav-center a");

links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});
