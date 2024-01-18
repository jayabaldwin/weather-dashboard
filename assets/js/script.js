// YOURE JUST GRABBING DATA FROM THE API AND DISPLAYING IT
// STOP OVERTHINKING, YOU GOT THIS!

// HTML Elements
const searchInput = document.getElementById('inputText');
const searchButton = document.getElementById('search-btn');
const pastSearches = document.getElementById('past-searches');
const searchForm = document.querySelector('#form');

var search = searchInput.value;

// do a whole lot more of these for the columns





// API Key
var apiKey = "735ee00c033a0c203ee912145178a36b";
var baseUrl = "https://api.openweathermap.org";

// Fetching the users' location to be able to generate weather data
function fetchLocation() {
  var apiUrl = `${baseUrl}/geo/1.0/direct?q=ballina&limit=5&units=metric&appid=${apiKey}`;

  fetch(apiUrl)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      var lat = data[0].lat;
      var lon = data[0].lon;

      var weatherApiUrl = `${baseUrl}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
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
    // Render items logic here
  };

// Data collected from the object
function weatherResults(weatherData) {
  console.log(weatherData);
}


fetchLocation();


function handleSearchFormSubmit (event) {
  event.preventDefault();
  // var search = searchInput.value;
}

// call fetch weather function here with search as parameter
// interpolate the api url in the fetch weather function

// Event lister upon submitting the search form
searchForm.addEventListener('submit', handleSearchFormSubmit);