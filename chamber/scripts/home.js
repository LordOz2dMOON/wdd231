// Set copyright year and last modified date
document.getElementById('copyrightYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Hamburger menu toggle
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('active');
});

// Weather API Implementation - Fixed
async function fetchWeather() {
    const apiKey = 'e49c91dcde30dae5b82440c2c680b5de'; // Replace with your actual API key
    try {
        // Fetch current weather
        const currentResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=Boise,US&units=imperial&appid=${apiKey}`
        );
        const currentData = await currentResponse.json();
        
        // Fetch 5-day forecast (3-hour intervals)
        const forecastResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=Boise,US&units=imperial&appid=${apiKey}`
        );
        const forecastData = await forecastResponse.json();
        
        // Update current weather display
        document.getElementById('current-temp').textContent = Math.round(currentData.main.temp);
        document.getElementById('weather-desc').textContent = currentData.weather[0].description;
        document.getElementById('humidity').textContent = currentData.main.humidity;
        document.getElementById('wind-speed').textContent = Math.round(currentData.wind.speed);
        
        // Set weather icon
        const iconCode = currentData.weather[0].icon;
        document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        document.getElementById('weather-icon').alt = currentData.weather[0].main;
        
        // Process forecast data to get one entry per day
        const forecastContainer = document.getElementById('forecast-container');
        forecastContainer.innerHTML = '';
        
        // Get unique days (skip current day)
        const dailyForecasts = [];
        const today = new Date().getDate();
        
        for (let i = 0; i < forecastData.list.length; i++) {
            const forecastTime = new Date(forecastData.list[i].dt * 1000);
            if (forecastTime.getDate() !== today) {
                const forecastDay = forecastTime.getDate();
                if (!dailyForecasts.some(item => item.day === forecastDay)) {
                    dailyForecasts.push({
                        day: forecastDay,
                        temp: forecastData.list[i].main.temp,
                        icon: forecastData.list[i].weather[0].icon,
                        description: forecastData.list[i].weather[0].main
                    });
                    
                    if (dailyForecasts.length === 3) break;
                }
            }
        }
        
        // Display forecast
        dailyForecasts.forEach(day => {
            const dayElement = document.createElement('div');
            dayElement.className = 'forecast-day';
            
            const dayName = new Date();
            dayName.setDate(day.day);
            const dayNameStr = dayName.toLocaleDateString('en-US', { weekday: 'short' });
            
            dayElement.innerHTML = `
                <h4>${dayNameStr}</h4>
                <img src="https://openweathermap.org/img/wn/${day.icon}.png" alt="${day.description}">
                <p>${Math.round(day.temp)}°F</p>
            `;
            forecastContainer.appendChild(dayElement);
        });
        
    } catch (error) {
        console.error('Error fetching weather:', error);
        document.getElementById('current-weather').innerHTML = `
            <p>Weather data currently unavailable</p>
        `;
    }
}

// Fetch member spotlights
async function fetchSpotlights() {
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();
        
        // Filter for gold/silver members
        const qualified = members.filter(member => 
            member.membershipLevel === 2 || member.membershipLevel === 3
        );
        
        // Randomly select 2-3 members
        const shuffled = qualified.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, Math.min(3, shuffled.length));
        
        // Display spotlights
        const container = document.getElementById('spotlight-container');
        container.innerHTML = '';
        
        selected.forEach(member => {
            const card = document.createElement('div');
            card.className = 'spotlight-card';
            card.innerHTML = `
                <h3>${member.name}</h3>
                <img src="${member.image}" alt="${member.name}">
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><strong>Website:</strong> <a href="${member.website}" target="_blank">Visit Site</a></p>
                <span class="member-level ${member.membershipLevel === 3 ? 'level-gold' : 'level-silver'}">
                    ${member.membershipLevel === 3 ? 'Gold Member' : 'Silver Member'}
                </span>
            `;
            container.appendChild(card);
        });
        
    } catch (error) {
        console.error('Error fetching spotlights:', error);
        document.getElementById('spotlight-container').innerHTML = `
            <p>Member spotlights currently unavailable</p>
        `;
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    fetchWeather();
    fetchSpotlights();
});