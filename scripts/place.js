document.getElementById("lastModified").textContent = document.lastModified;

function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1);
    } else {
        return "N/A";
    }
}

const temperature = parseFloat(document.querySelector("#weather p:nth-of-type(1) span").textContent);
const windSpeed = parseFloat(document.querySelector("#weather p:nth-of-type(3) span").textContent);
document.getElementById("windchill").textContent = calculateWindChill(temperature, windSpeed);
