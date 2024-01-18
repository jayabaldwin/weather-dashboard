// YOURE JUST GRABBING DATA FROM THE API AND DISPLAYING IT
// STOP OVERTHINKING, YOU GOT THIS!

// HTML Elements
const searchInput = document.getElementById('inputText');
const searchButton = document.getElementById('search-btn');
const pastSearches = document.getElementById('past-searches');
const searchForm = document.querySelector('#form');

var search = searchInput.value;


// API Key
var apiKey = "735ee00c033a0c203ee912145178a36b";
var baseUrl = "https://api.openweathermap.org";

// Fetching the users' location to be able to generate weather data
function fetchLocation() {
  var apiUrl = `${baseUrl}/geo/1.0/direct?q=${search}&limit=5&units=metric&appid=${apiKey}`;

  fetch(apiUrl)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      var lat = data[0].lat;
      var lon = data[0].lon;

      var weatherApiUrl = `${baseUrl}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
      return fetch(weatherApiUrl);
    })
    .then(function (res) {
      return res.json();
    })
    .then(function (weatherData) {
      weatherResults (weatherData);
    })
    .catch(function (error) {
      console.log(error);
    });
  };


// Find way to remove the time element from the string with a split() method
function separateDateAndTime () {
}

// Sets up ability to update each forecast day without repetition
function updateWeatherElement(id, label, value) {
  document.getElementById(id).innerHTML = `${label}: ${value}`;
}

// Data collected from the object
function weatherResults(weatherData) {
  // Update current day
  updateWeatherElement('city-date', 'Date', `${weatherData.city.name} (${weatherData.list[0].dt_txt})`);
  updateWeatherElement('temp-0', 'Temp', `${weatherData.list[0].main.temp}°C`);
  updateWeatherElement('wind-0', 'Wind', `${weatherData.list[0].wind.speed} km/h`);
  updateWeatherElement('humidity-0', 'Humidity', `${weatherData.list[0].main.humidity}%`);

  // Update subsequent days
  for (let i = 1; i <= 4; i++) {
    const index = i * 8;
    updateWeatherElement(`day-${i}-date`, 'Date', `(${weatherData.list[index].dt_txt})`);
    updateWeatherElement(`temp-${i}`, 'Temp', `${weatherData.list[index].main.temp}°C`);
    updateWeatherElement(`wind-${i}`, 'Wind', `${weatherData.list[index].wind.speed} km/h`);
    updateWeatherElement(`humidity-${i}`, 'Humidity', `${weatherData.list[index].main.humidity}%`);
  }

  console.log(weatherData);
}


// Submission of form
function handleSearchFormSubmit (event) {
  event.preventDefault();
  var search = searchInput.value;
  fetchLocation(search);
}

// Event lister upon submitting the search form
searchForm.addEventListener('submit', handleSearchFormSubmit);