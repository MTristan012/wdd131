function calculateWindChill() {
    const temp = parseFloat(document.getElementById("temp").textContent);
    const speed = parseFloat(document.getElementById("speed").textContent);
    let windchill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    windchill = Math.round(windchill);
    document.getElementById("windchill").textContent = windchill;
}

document.addEventListener("DOMContentLoaded", () => {
    const yearElement = document.querySelector("#currentyear");
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = currentYear;
    }

    const lastModifiedElement = document.querySelector("#lastModified");
    if (lastModifiedElement) {
        const lastModifiedDate = document.lastModified;
        lastModifiedElement.textContent = lastModifiedDate;
    }

    calculateWindChill();
});