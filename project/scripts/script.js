
document.addEventListener("DOMContentLoaded", () => {
    const maxLevel = 60;
    const minLevel = 55;
    const pH = 7.1;
    const ammonia = 0;
    const nitrite = 5;
    const nitrate = 25;
    const alkalinity = 80;

    const yearElement = document.querySelector("#currentyear");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    const lastModifiedElement = document.querySelector("#lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }

    const API_KEY = "aa3396459513d0e7b566157a2ee45cb9";
    const CITY = "Cuautla";

    async function fetchingWeather(city) {
        try {

            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
            const data = await response.json();

            const temperature = Math.round((data.main.temp - 273.15) * 10) / 10;
            const feelsLikeTemperature = Math.round((data.main.feels_like - 273.15) * 10) / 10;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;
            const weatherCondition = data.weather[0].description;

            const weatherCard_1 = document.querySelector("#weatherCard_1");
            if (weatherCard_1) {
                weatherCard_1.innerHTML = `
                        <h4>Temperature:</h4>
                        ${temperature}°C
                        <h4>Feels Like:</h4>
                        ${feelsLikeTemperature}°C
                        <h4>Weather Condition:</h4>
                        ${weatherCondition}
                        <h4>Humidity:</h4>
                        ${humidity}%
                        <h4>Wind Speed:</h4>
                        ${windSpeed} km/h
                    `;
            }

            const weatherCard_2 = document.querySelector("#weatherCard_2");
            if (weatherCard_2) {
                weatherCard_2.innerHTML = `
                        <h4>Temperature:</h4>
                        ${temperature}°C
                        <h4>Feels Like:</h4>
                        ${feelsLikeTemperature}°C
                        <h4>Weather Condition:</h4>
                        ${weatherCondition}
                        <h4>Humidity:</h4>
                        ${humidity}%
                        <h4>Wind Speed:</h4>
                        ${windSpeed} km/h
                    `;
            }

        } catch (error) {
            console.error('Error:', error);
        }
    };

    async function fetchAquariumData(city) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
            const data = await response.json();

            const aquariumTemperature = Math.round((data.main.temp - 273.15) * 10) / 10;
            const aquariumFeelsLikeTemperature = Math.round((data.main.feels_like - 273.15) * 10) / 10;

            const aquariumData = document.querySelector("#aquarium_data");
            if (aquariumData) {
                aquariumData.innerHTML = `
                        <h4>Aquarium Temperature:</h4>
                        ${aquariumTemperature}°C
                        <h4>Aquarium Feels Like:</h4>
                        ${aquariumFeelsLikeTemperature}°C
                        <h4>Aquarium Water Level:</h4>
                        ${maxLevel} L
                        <h4>Aquarium pH:</h4>
                        ${pH}
                        <h4>Aquarium ammonia:</h4>
                        ${ammonia} ppm
                        <h4>Aquarium nitrite:</h4>
                        ${nitrite} ppm
                        <h4>Aquarium nitrate:</h4>
                        ${nitrate} ppm
                        <h4>Aquarium alkalinity:</h4>
                        ${alkalinity} ppm
                    `;
            }

            if (aquariumTemperature > 30) {
                const aquariumAlerts = document.querySelector("#aquarium_alerts");
                if (aquariumAlerts) {
                    aquariumAlerts.innerHTML = `
                        <h4>Aquarium Water Level:</h4>
                        ${minLevel} L
                        <h4>Aquarium pH:</h4>
                        ${pH - 1.5}
                        <h4>Aquarium ammonia:</h4>
                        ${ammonia + 3} ppm
                        <h4>Aquarium nitrite:</h4>
                        ${nitrite + 12} ppm
                        <h4>Aquarium nitrate:</h4>
                        ${nitrate + 35} ppm
                        <h4>Aquarium alkalinity:</h4>
                        ${alkalinity - 25} ppm
                    `;
                }
            }

        } catch (error) {
            console.error('Error:', error);
        }
    };

    const refreshButton = document.querySelector("#refresh-data");
    if (refreshButton) {
        refreshButton.addEventListener("click", () => {
            console.log("Refreshing data...");
            fetchingWeather(CITY);
            fetchAquariumData(CITY);
        });
    }

    fetchingWeather(CITY);
    fetchAquariumData(CITY);

});

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const wateringForm1 = document.getElementById("watering-form-1");
    wateringForm1.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Small garden watering system started.");
    });

    const wateringForm2 = document.getElementById("watering-form-2");
    wateringForm2.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Large garden watering system started.");
    });
});