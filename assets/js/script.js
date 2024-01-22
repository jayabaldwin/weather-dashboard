// YOURE JUST GRABBING DATA FROM THE API AND DISPLAYING IT
// STOP OVERTHINKING, YOU GOT THIS!

// HTML Elements
const searchInput = document.getElementById('inputText');
const searchButton = document.getElementById('search-btn');
const pastSearches = document.getElementById('past-searches');
const searchForm = document.querySelector('#form');
var search = '';

// API Key
var apiKey = "735ee00c033a0c203ee912145178a36b";
var baseUrl = "https://api.openweathermap.org";

// Fetching the users' location to be able to generate weather data
function fetchLocation(search) {
  var apiUrl = `${baseUrl}/geo/1.0/direct?q=${search}&limit=5&units=metric&appid=${apiKey}`;

  fetch(apiUrl)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log('data', data);
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
      console.log(weatherData);
    })
    .catch(function (error) {
      alert("Unfortunately we couldn't find data for that city.")
      console.log(error);
      
    });
  };


// Sets up ability to update each forecast day without repetition
function updateWeatherElement(id, label, value) {
  document.getElementById(id).innerHTML = `${label} ${value}`;
}

// Data collected from the API
function weatherResults(weatherData) {

  // Update current day
  var tempRoundUp = Math.ceil(weatherData.list[0].main.temp); // temp is rounded up to nearest degree
  var windspeed = Math.ceil((weatherData.list[0].wind.speed)*3.6) // converted from m/s to km/hr
  var dateFormat = dayjs(weatherData.list[0].dt_txt).format('MMM D, YYYY'); // formats the date, without the time

  updateWeatherElement('city-date', '', `${weatherData.city.name} (${dateFormat})`);
  updateWeatherElement('temp-0', 'Temperature:', `${tempRoundUp}°C`);
  updateWeatherElement('wind-0', 'Wind:', `${windspeed} km/h`);
  updateWeatherElement('humidity-0', 'Humidity:', `${weatherData.list[0].main.humidity}%`);
  document.getElementById('weather-icon').setAttribute("src", currentDayImage(`${weatherData.list[0].weather[0].main}`));


  // Update subsequent days
  for (let i = 1; i <= 4; i++) {
    // The response is 40 items (8/day), therefore i is incremented by 8 to generate the following days data
    // i starts from 1 as the current day [0] data has already been displayed, so must start with the 8th index
    const index = i * 8;
    
    var tempRoundUp = Math.ceil(weatherData.list[index].main.temp); // temp is rounded up to nearest degree
    var windspeed = Math.ceil((weatherData.list[index].wind.speed)*3.6) // converted from m/s to km/hr
    var dateFormat = dayjs(weatherData.list[index].dt_txt).format('MMM D, YYYY'); // formats the date, without the time
    
    updateWeatherElement(`day-${i}-date`, '', `${dateFormat}`);
    updateWeatherElement(`temp-${i}`, 'Temp:', `${tempRoundUp}°C`);
    updateWeatherElement(`wind-${i}`, 'Wind:', `${windspeed} km/h`);
    updateWeatherElement(`humidity-${i}`, 'Humidity:', `${weatherData.list[index].main.humidity}%`);

    var weatherImage = document.getElementById('weather-icon-' + i);

    console.log(`${weatherData.list[index].weather[0].main}`);
    weatherImage.setAttribute("src", currentDayImage(`${weatherData.list[index].weather[0].main}`))
  };
}

// Updating weather icons based on condition
function currentDayImage(weatherCondition) {
  switch (weatherCondition) {
    case "Rain":
      return "./assets/images/rain.png"
      break;
    case "Clouds":
      return "./assets/images/clouds.png"
      break;
    case "Mist":
      return "./assets/images/mist.png"
      break;
    case "Snow":
      return "./assets/images/snow.png"
      break;
  
    default:
      return "./assets/images/clear.png"
      break;
  }
}

// On loading the page checks if theres already cities in local storage
// Appends corresponding buttons if there is
// These buttons remain hidden until 'search' has been clicked
window.onload = () => {
  // Check if there is something in localStorage with the key "storedCities"
  if (localStorage.getItem("storedCities")) {
    // Retrieve the array of stored cities
    var storedCities = JSON.parse(localStorage.getItem("storedCities"));

    // Get the element where you want to append the buttons
    var pastSearches = document.getElementById('past-searches');

    if (search !== '') {
      // Loop through the array and create a button for each city
    storedCities.forEach(function(value) {
      const newCityButton = document.createElement('button');
      newCityButton.classList.add('new-button');
      newCityButton.textContent = value;

      // Append button to pastSearches element
      pastSearches.appendChild(newCityButton);
      });
    }
  }
};

// Submission of form
function handleSearchFormSubmit (event) {
  event.preventDefault();
  var search = event.target[0].value;
  
  // Initiates weather data based on you search
  fetchLocation(search);

  // Initiates function for local storage
  saveToLocalStorage(search);


  // Save to local storage, function is within the form submit as it had variables that were outside of the scope
  function saveToLocalStorage(search) {
    // City name holds the search value 
    // Gets first character and capitalises it
    // Appends the rest of the string starting from character 1 to the uppercase letter
    let cityName = search.charAt(0).toUpperCase() + search.slice(1);
  
    // Retrieving stored cities from local storage and converts from a string into an array
    // An empty array will be created upon the first search when there is nothing in storage --> []
    let storedCities = JSON.parse(localStorage.getItem("storedCities")) || [];
  
    // Check if the city name is not already in the array
    if (!storedCities.includes(cityName)) {
      // Create a button for the new city
      var pastSearches = document.getElementById('past-searches');
  
      const newCityButton = document.createElement('button');
      newCityButton.classList.add('new-button');
      newCityButton.textContent = cityName;
  
      // Add an event listener to the button to fetch data from localStorage
      newCityButton.addEventListener('click', function() {
        fetchLocation(search);
      });
  
      // Append button to pastSearches element
      pastSearches.appendChild(newCityButton);
  
      // Add the new city to the array
      storedCities.push(cityName);
  
      // Save the updated array to local storage
      localStorage.setItem("storedCities", JSON.stringify(storedCities));
    }

    // Alert if city is submitted empty or with an invalid city

    // Classes to make weather dashboard visible after pressing search
    document.getElementById('city-search').classList.remove('before-search');
    document.getElementById('weather-information').classList.remove('hidden');
    document.getElementById('separator').classList.remove('hidden');
    document.getElementById('past-searches').classList.remove('hidden');
  }
}

// Event lister upon submitting the search form
searchForm.addEventListener('submit', handleSearchFormSubmit);