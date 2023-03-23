const cityInput = document.querySelector("#city");
const submitButton = document.querySelector("#submit");
const weatherDataSection = document.querySelector("#weather-data");
const LoadingSection = document.querySelector("#loading-section");

const requestOptions = {
    method: "GET",
    
  };
  const API_KEY = `6409ee75b6ffc020adb31a565296a4bb`;
  const errorStatus = ["404", "401"];
  let isLoading = false;

  const lastReqData = localStorage.getItem("weather-data") 
  ? JSON.parse(localStorage.getItem("weather-data"))
  : undefined;
  lastReqData && renderWeather(lastReqData)



function getWeather (city) {
    isLoading = true;
    renderLoading(isLoading)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`, requestOptions)
  .then((response) => response.json())
  .then((response) => {
    console.log(response, "response");
    if (errorStatus.includes(response.cod)) {
        return renderError(response)
    }
    localStorage.setItem("city", city);
    localStorage.setItem("weather-data", JSON.stringify(response))

    renderWeather(response);
  })
  .catch((err) => console.log(err))
  .finally(() => {
    isLoading = false
    renderLoading(isLoading)
  })
}


submitButton.onclick = () => {
    getWeather(cityInput.value)
}

function renderError (error) {
    weatherDataSection.innerHTML = `<h3>${error.message}</h3>`;
}

function renderLoading (isLoading) {
    LoadingSection.innerHTML = isLoading ? `<h3>Loading...</h3>` : "";
}

function renderWeather (data) {
    const {main, wind, sys, } = data;
    const {feels_like, temp, temp_min, temp_max, pressure} = main
    const {speed, deg, gust} = wind;

    weatherDataSection.innerHTML = "";

    weatherDataSection.innerHTML = `
    <h3>Weather in ${name}</h3>
    <p>Temp: ${temp}C</p>
    <span>Feels like: ${feels_like}</span>
    <span>${temp_min}C - ${temp_max}C</span>
    <span>Pressure ${pressure}</span>
    <h3>Wind</h3>
    <span>Speed: ${speed}</span>
    <span>Direction: ${deg}</span>
    <span>Gust: ${gust}</span>
    `
}