// app.js
document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById('city');
    const getWeatherButton = document.getElementById('get-weather');
    const weatherResult = document.getElementById('weather-result');
    const cityName = document.getElementById('city-name');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('wind-speed');

    getWeatherButton.addEventListener('click', () => {
        const city = cityInput.value.trim();
        if (city) {
            getWeather(city);
        }
    });

    async function getWeather(city) {
        const apiKey = '634cb2fcd411e4ab578f03e3ec52eb8a'; // Replace with your API key
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                alert('City not found');
            }
        } catch (error) {
            alert('Error fetching weather data');
        }
    }

    function displayWeather(data) {
        cityName.textContent = data.name;
        temperature.textContent = `Temperature: ${data.main.temp}°C`;
        description.textContent = `Description: ${data.weather[0].description}`;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;

        weatherResult.classList.remove('hidden');
    }
});