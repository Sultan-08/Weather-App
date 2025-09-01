const apiKey = "34c73bec05f39d7cd0aa07c7d2d868b3";
const weatherBox = document.getElementById("weather");
const searchInput = document.getElementById("search");
const suggestionsBox = document.getElementById("suggestions");
const searchBtn = document.getElementById("searchBtn");

// window.onload = () => {
//     if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showWeather, () => {
//         weatherBox.innerHTML = "<p>Location access denied. Search manually.</p>";
//     });
//     } else {
//     weatherBox.innerHTML = "<p>Geolocation not supported.</p>";
//     }
// };

function showWeather(positionOrCity) {
    let url = "";
    if (typeof positionOrCity === "object" && positionOrCity.coords) {
    const lat = positionOrCity.coords.latitude;
    const lon = positionOrCity.coords.longitude;
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;} 
    else {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${positionOrCity}&appid=${apiKey}&units=metric`;}
    fetch(url)
    .then(res => res.json())
    .then(data => {
        if (data.cod !== 200) {
        weatherBox.innerHTML = `<p>❌ City not found.</p>`;
        return;
    }

    const city = data.name;
    const temp = data.main.temp.toFixed(1);
    const desc = data.weather[0].description;
    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherBox.innerHTML = `
        <h3>${city}</h3>
        <img src="${icon}" alt="Weather Icon">
        <p><b>${temp}°C</b></p>
        <p>${desc.charAt(0).toUpperCase() + desc.slice(1)}</p>`;
    })
    .catch(() => {
    weatherBox.innerHTML = "<p>⚠️ Error fetching weather data.</p>";
    });
}

searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim();
    if (query.length < 2) {
    suggestionsBox.innerHTML = "";
    return;
    }

    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${apiKey}`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        suggestionsBox.innerHTML = "";
        data.forEach(loc => {
        const div = document.createElement("div");
        div.textContent = `${loc.name}, ${loc.state || ""} ${loc.country}`;
        div.onclick = () => {
            searchInput.value = loc.name;
            suggestionsBox.innerHTML = "";
            showWeather(loc.name);
        };
        suggestionsBox.appendChild(div);
        });
    });
});

searchBtn.addEventListener("click", () => {
    const city = searchInput.value.trim();
    if (city) showWeather(city);
});