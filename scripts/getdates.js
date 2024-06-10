document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("currentyear");
    const lastModifiedP = document.getElementById("lastModified");

    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

    lastModifiedP.textContent = `Last Modified: ${document.lastModified}`;
});