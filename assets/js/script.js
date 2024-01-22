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

// Data collected from the object
function weatherResults(weatherData) {

  // Update current day
  var tempRoundUp = Math.ceil(weatherData.list[0].main.temp); // temp is rounded up to nearest degree
  var windspeed = Math.ceil((weatherData.list[0].wind.speed)*3.6) // update to km/hr
  var dateFormat = dayjs(weatherData.list[0].dt_txt).format('MMM D, YYYY'); // format the date

  updateWeatherElement('city-date', '', `${weatherData.city.name} (${dateFormat})`);
  updateWeatherElement('temp-0', 'Temperature:', `${tempRoundUp}°C`);
  updateWeatherElement('wind-0', 'Wind:', `${windspeed} km/h`);
  updateWeatherElement('humidity-0', 'Humidity:', `${weatherData.list[0].main.humidity}%`);
  document.getElementById('weather-icon').setAttribute("src", currentDayImage(`${weatherData.list[0].weather[0].main}`));


  // Update subsequent days
  for (let i = 1; i <= 4; i++) {
    const index = i * 8;
    
    var tempRoundUp = Math.ceil(weatherData.list[index].main.temp); // temp is rounded up to nearest degree
    var windspeed = Math.ceil((weatherData.list[index].wind.speed)*3.6) // update to km/hr
    var dateFormat = dayjs(weatherData.list[index].dt_txt).format('MMM D, YYYY'); // format the date
    
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

// Submission of form
function handleSearchFormSubmit (event) {
  event.preventDefault();
  var search = event.target[0].value;
  
  // Initiates weather data based on you search
  fetchLocation(search);

  // Initiates function for local storage
  saveToLocalStorage(search);


  // Save to local storage
  function saveToLocalStorage(search) {
    // City searches saved to an array
    let cityName = search;
  
    // Retrieving stored cities from local storage and converts from a string into an array
    // An empty array will be created upon the first search when there is nothing in storage --> []
    let storedCities = JSON.parse(localStorage.getItem("storedCities")) || [];
  
    // Check if the city name is not already in the array
    if (!storedCities.includes(cityName)) {
      // Create a button for the new city
      var pastSearches = document.getElementById('past-searches');
  
      const newCityButton = document.createElement('button');
      newCityButton.classList.add('new-button');
      newCityButton.textContent = search;
  
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

  //   if (cityName == '' || cityName === in || city)
  // }

    // Alert if city is submitted empty or with an invalid city

    // Classes to make weather dashboard visible after pressing search
    document.getElementById('city-search').classList.remove('before-search');
    document.getElementById('weather-information').classList.remove('hidden');
    document.getElementById('separator').classList.remove('hidden');
}
}

// Event lister upon submitting the search form
searchForm.addEventListener('submit', handleSearchFormSubmit);