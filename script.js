const apiKey = "YOUR_API_KEY";

async function getWeather() {
  const city = document.getElementById("cityInput").value;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      document.getElementById("weatherResult").innerHTML = "City not found";
      return;
    }

    document.getElementById("weatherResult").innerHTML = `
      <h2>${data.name}</h2>
      <p>Temp: ${data.main.temp}°F</p>
      <p>Weather: ${data.weather[0].description}</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Wind: ${data.wind.speed} mph</p>
    `;
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = "Error fetching data";
  }
}
