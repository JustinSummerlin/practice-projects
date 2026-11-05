const button = document.querySelector(".menu-toggle"); // first element with that class
const links = document.querySelector(".nav-links");

button.addEventListener("click", () => {
    links.classList.toggle("open");   // adds it if missing, removes it if present
    const isOpen = links.classList.contains("open");
    button.setAttribute("aria-expanded", isOpen);
});