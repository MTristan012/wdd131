document.addEventListener("DOMContentLoaded", () => {
    const yearElement = document.querySelector("#currentyear");
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = currentYear;
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const lastModifiedElement = document.querySelector("#lastModified");
    if (lastModifiedElement) {
        const lastModifiedDate = document.lastModified;
        lastModifiedElement.textContent = lastModifiedDate;
    }
});

function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}
