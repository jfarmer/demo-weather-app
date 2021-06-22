let weatherForm = document.querySelector('#weather-form');

weatherForm.addEventListener('submit', function(event) {
  event.preventDefault();

  let postalCode = document.querySelector('#postal-code').value;
  refreshWeatherData(postalCode);
});

function refreshWeatherData(postalCode) {
  let CURRENT_WEATHER_URL=`http://api.weatherapi.com/v1/current.json?key=0613f9d5bd234865afd150529212206&q=${postalCode}&aqi=no`

  axios.get(CURRENT_WEATHER_URL).then(function(response) {
    let weatherData = response.data;
    updatePageWithWeatherData(weatherData);
  });
}

function updatePageWithWeatherData(weatherData) {
  let locationDiv = document.querySelector('#current-location')
  locationDiv.innerText = weatherData.location.name;

  let temperatureDiv = document.querySelector('#current-temp');
  temperatureDiv.innerText = Math.round(weatherData.current.temp_f);
}
