// Set current year and last modified date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Wind Chill Calculation
function calculateWindChill(tempF, speedMph) {
  return 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speedMph, 0.16)) + (0.4275 * tempF * Math.pow(speedMph, 0.16));
}

// Static inputs
const temp = parseFloat(document.getElementById("temperature").textContent);
const speed = parseFloat(document.getElementById("windspeed").textContent);

let chillText = "N/A";

if (temp <= 50 && speed > 3) {
  const chill = calculateWindChill(temp, speed);
  chillText = `${Math.round(chill)} °F`;
}

document.getElementById("windChill").textContent = chillText;
