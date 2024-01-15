// HTML Elements
var searchButton = document.getElementById('search-btn');
var searchInput = document.getElementById('search-inputText');
var city;


// API Key and URL
const apiKey = "735ee00c033a0c203ee912145178a36b";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&q=${city}&units=metric`;

function getWeather() {
  fetch(apiUrl + `&appid=${apiKey}`)
  .then(function (response) {
    return response.json();
  });





}

