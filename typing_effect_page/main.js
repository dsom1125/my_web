// main.js
document.addEventListener("DOMContentLoaded", () => {
    const icon = document.getElementById("icon");
    const dynamicText = document.getElementById("dynamic");

    function toggleCursor() {
        dynamicText.classList.toggle("active");
    }

    setInterval(toggleCursor, 500); // 0.5초마다 커서 깜박임 효과

    icon.addEventListener("click", () => {
        icon.classList.toggle("active");
    });
});
