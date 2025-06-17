// OpenWeatherMap API implementation
const API_KEY = 'e49c91dcde30dae5b82440c2c680b5de';

async function fetchWeather() {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=Boise,US&units=imperial&appid=${API_KEY}`
        );
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather:', error);
    }
}

function displayWeather(data) {
    document.getElementById('current-temp').textContent = Math.round(data.main.temp);
    // Additional weather display logic
}

// Initialize
fetchWeather();