// main.js
document.addEventListener("DOMContentLoaded", () => {
    const icon = document.getElementById("icon");
    icon.addEventListener("click", () => {
        icon.classList.toggle("active");
    });
});
