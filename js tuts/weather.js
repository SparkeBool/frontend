const apiKey = 'dbd29a5e9d4d3682523042aaa4275401'; 

const cityInput = document.getElementById('city-input');
const getWeatherButton = document.getElementById('get-weather-button');
const cityElement = document.getElementById('city');
const temperatureElement = document.getElementById('temperature');
const conditionElement = document.getElementById('condition');
const weatherIconElement = document.getElementById('weather-icon');
const year = document.getElementById('year')

year.innerHTML= new Date().getFullYear();


// Event listener for the "Get Weather" button
getWeatherButton.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city) {
    getWeather(city);
  } else {
    alert('Please enter a city name.');
  }
});

// Function to fetch weather data
async function getWeather(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('City not found');
    }

    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    alert(error.message);
  }
}

// Function to display weather data
function displayWeather(data) {
  const { name } = data;
  const { icon, description } = data.weather[0];
  const { temp } = data.main;

  cityElement.innerText = name;
  temperatureElement.innerText = `Temperature: ${temp}°C`;
  conditionElement.innerText = `Condition: ${description}`;
  weatherIconElement.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  weatherIconElement.alt = description;

  console.log(data);
}

// start the begin weather function
function initialize() {
  const defaultCity = 'Abeokuta'; // give default city
  getWeather(defaultCity);
}

// Initialize the app when the page loads
window.onload = initialize;
