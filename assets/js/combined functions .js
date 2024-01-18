// YOURE JUST GRABBING DATA FROM THE API AND DISPLAYING IT
// STOP OVERTHINKING, YOU GOT THIS!

// HTML Elements
const searchInput = document.getElementById('inputText');
const searchButton = document.getElementById('search-btn');
const pastSearches = document.getElementById('past-searches');
const searchForm = document.querySelector('#form');

// do a whole lot more of these for the columns

// API Key
var apiKey = "735ee00c033a0c203ee912145178a36b";
var baseUrl = "https://api.openweathermap.org";

// Fetching the users' city input preference
function fetchWeather(search) {
  var apiUrl = `${baseUrl}/geo/1.0/direct?q=ballina&limit=5&units=metric&appid=${apiKey}`;

  fetch(apiUrl)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      var lat = data[0].lat;
      var lon = data[0].lon;

      var weatherApiUrl = `${baseUrl}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
      // Fetching the geo coordinates of the search, by using its lat and lon properties
      return fetch(weatherApiUrl);
    })
    .then(function (res) {
      return res.json();
    })
    .then(function (weatherData) {
      renderItems(weatherData);
    })
    .catch(function (error) {
      console.log(error);
    });
  };


function renderItems (data) {
  console.log(data);
  // // functions for header temp etc and pass through render items

  // display and construct html here
  // append to html or create <p> elements
  // start by creating parent div with class .column, then id day-2 etc etc in that same structure
  // then append to columns div
  // loop through arrays - data.main.temp etc etc 
}

// fetchWeather();

function handleSearchFormSubmit (event) {
  event.preventDefault();
  var search = searchInput.value;
}

// handle search form submit event
searchForm.addEventListener('submit', handleSearchFormSubmit);



//   console.log(search);
//   // call fetch weather function here with search as parameter
//   // interpolate the api url in the fetch weather function
  
// };

// handle search form submit event
searchForm.addEventListener('submit', handleSearchFormSubmit);

// // Fetching the users' city input preference
// function fetchCoords() {
//   var apiUrl = `${baseUrl}/geo/1.0/direct?q=ballina&limit=5&units=metric&appid=${apiKey}`;

//   fetch(apiUrl)
//     .then(function (res) {
//       return res.json();
//   })
//     .then(function (data){
//       // renderItems(data);
//       fetchWeather(data);
//   })
//     .catch(function (error) {
//       console.log(error);
//   });
// }

// // Fetching the weather data through the Weather Geolocation endpoint, based on the users city input 
// function fetchWeather(data) {
//   var lat = data[0].lat;
//   var lon = data[0].lon;

//   var apiUrl = `${baseUrl}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

//   fetch(apiUrl)
//     .then(function (res) {
//       return res.json();
//   })
//     .then(function (weatherData){
//       renderItems(weatherData);
//   })
//     .catch(function (error) {
//       console.log(error);
//   })
// };

// fetchCoords();

// function renderItems () {
// // API Key
// var apiKey = "735ee00c033a0c203ee912145178a36b";
// var baseUrl = "https://api.openweathermap.org";

// // Fetching the users' city input preference
// function fetchCoords() {
//   var apiUrl = `${baseUrl}/geo/1.0/direct?q=ballina&limit=5&units=metric&appid=${apiKey}`;

//   fetch(apiUrl)
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (data) {
//       renderItems(data);
//       fetchWeather(data); // Pass data to fetchWeather
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }

// fetchCoords;

// // Fetching the weather data through the Weather Geolocation endpoint, based on the users' city input 
// function fetchWeather(data) {
//   // Check if data is defined
//   if (!data || !data[0]) {
//     console.error("Invalid data for weather fetch");
//     return;
//   }

//   var lat = data[0].lat;
//   var lon = data[0].lon;

//   var apiUrl = `${baseUrl}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

//   fetch(apiUrl)
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (weatherData) {
//       renderItems(weatherData);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }

// function renderItems(data) {
//   console.log(data);
//   // functions for header temp, etc., and pass through render items
//   // display and construct HTML here
//   // append to HTML or create <p> elements
//   // start by creating a parent div with class .column, then id day-2, etc., in that same structure
//   // then append to columns div
//   // loop through arrays - data.main.temp, etc.
// }
// };

// / Example: Call fetchCoords
