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


// 1st function fetching weather
function fetchWeather (search) {
  var apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&units=metric&appid=${apiKey}`;

  fetch(apiUrl)
    .then(function (res) {
      return res.json();
  })
    .then(function (data){
      renderItems(data);

  })
    .catch(function (error) {
      console.log(error);
  })
};

// above to fetchCoord function and pass to fetchWeather function

function renderItems (data) {
  console.log(data);
  // display and construct html here
  // append to html or create <p> elements
  // start by creating parent div with class .column, then id day-2 etc etc in that same structure
  // then append to columns div

  // loop through arrays - data.main.temp etc etc 
}

// functions for header temp etc and pass through renderItems
// fetchWeather();

function handleSearchFormSubmit (event) {
  event.preventDefault();
  var search = searchInput.value

  console.log(search);
  // call fetch weather function here with search as parameter
  // interpolate the api url in the fetch weather function
  
};

// handle search form submit event
searchForm.addEventListener('submit', handleSearchFormSubmit);