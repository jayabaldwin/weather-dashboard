/ Get coordiantes based on latitude and longitude
const getCityCoordinates = async () => {
  const cityCoordRequestEndpoint = '';
  const requestParams = `?api_key=${apiKey}`;
  var urlToFetch = `${tmdbBaseUrl}${cityCoordRequestEndpoint}${requestParams}`;
  
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      const location = jsonResponse.location;
      console.log(location);
      return location;
    }
  } catch (error) {
    console.log(error);
  } 
}; 


// Create HTML for movie title
const createMovieTitle = (title) => {
  const titleHeader = document.createElement('h1');
  titleHeader.setAttribute('id', 'movieTitle');
  titleHeader.innerHTML = title;

  return titleHeader;
};

// Create HTML for movie overview
const createMovieOverview = (overview) => {
  const overviewParagraph = document.createElement('p');
  overviewParagraph.setAttribute('id', 'movieOverview');
  overviewParagraph.innerHTML = overview;

  return overviewParagraph;
};

// Uses the DOM to create HTML to display the movie
const displayMovie = (movieInfo) => {
  const moviePosterDiv = document.getElementById('moviePoster');
  const movieTextDiv = document.getElementById('movieText');
  const likeBtn = document.getElementById('likeBtn');
  const dislikeBtn = document.getElementById('dislikeBtn');

  // Create HTML content containing movie info
  const moviePoster = createMoviePoster(movieInfo.poster_path);
  const titleHeader = createMovieTitle(movieInfo.title);
  const overviewText = createMovieOverview(movieInfo.overview);

  // Append title, poster, and overview to page
  moviePosterDiv.appendChild(moviePoster);
  movieTextDiv.appendChild(titleHeader);
  movieTextDiv.appendChild(overviewText);

  showBtns();
  likeBtn.onclick = likeMovie;
  dislikeBtn.onclick = dislikeMovie;
};

// Current day

// Day 1

// Day 2

// Day 3

// Day 4

// Day 5

// Use map to generate
// Fetch request

fetch(weatherUrl)
  .then(response => response.json())
  .then(data => {
    var lat = data[0].lat;
    var lon = data[0].lon;
    var locationUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    
    return fetch(locationUrl);
  })
  .then(response => response.json())
  .then(weatherDetails => {
    // This is where you have all your important data!
    console.log(weatherDetails);















    
    // Update HTML elements
    document.getElementById('city-date').innerHTML = weatherDetails.city.name;
    document.getElementById('temp-0').innerHTML = 'Temperature: ' + weatherDetails.list[0].main.temp + '°c';
    document.getElementById('wind-0').innerHTML = 'Wind: ' + weatherDetails.list[0].wind.speed + ' km/h';
    document.getElementById('humidity-0').innerHTML = 'Humidity: ' + weatherDetails.list[0].main.humidity + '%';











    // Convert wind speed to km/h
    var windSpeedKMH = (weatherDetails.list[0].wind.speed * 3.6).toFixed(2);
    document.getElementById('wind-0').innerHTML = 'Wind: ' + windSpeedKMH + ' km/h';

    document.getElementById('humidity-0').innerHTML = 'Humidity: ' + weatherDetails.list[0].main.humidity + '%';
    
    // Set the weather icon based on weather conditions
    setWeatherIcon(weatherDetails.list[0].weather[0].main);

    // Function to set the weather icon
  function setWeatherIcon(weatherCondition) {
    var weatherIcon = document.
    if (weatherCondition == 'Clouds') {
      weatherIcon.src = 'assets/images/clouds.png';
    } else if (weatherCondition == 'Clear') {
      weatherIcon.src = 'assets/images/clear.png';
    } else if (weatherCondition == 'Rain') {
      weatherIcon.src = 'assets/images/rain.png';
    } else if (weatherCondition == 'Drizzle') {
      weatherIcon.src = 'assets/images/drizzle.png';
    } else if (weatherCondition == 'Mist') {
      weatherIcon.src = 'assets/images/mist.png';
    } else if (weatherCondition == 'Snow') {
      weatherIcon.src = 'assets/images/snow.png';
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });

// Function to set the weather icon
function setWeatherIcon(weatherCondition) {
  if (weatherCondition == 'Clouds') {
    weatherIcon.src = 'assets/images/clouds.png';
  } else if (weatherCondition == 'Clear') {
    weatherIcon.src = 'assets/images/clear.png';
  } else if (weatherCondition == 'Rain') {
    weatherIcon.src = 'assets/images/rain.png';
  } else if (weatherCondition == 'Drizzle') {
    weatherIcon.src = 'assets/images/drizzle.png';
  } else if (weatherCondition == 'Mist') {
    weatherIcon.src = 'assets/images/mist.png';
  } else if (weatherCondition == 'Snow') {
    weatherIcon.src = 'assets/images/snow.png';
  }
}
  })
  .catch(error => {
    console.error('Error:', error);
  });





// URLS
var weatherUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&units=metric&appid=${apiKey}`;

fetch(weatherUrl)
  .then(function (response) {
    return response.json();
  })
    .then(function (data) {
        var lat = data[0].lat;
        var lon = data[0].lon;
        var locationUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

        fetch(locationUrl)
            .then(function (response) {
            return response.json();
        })  
            .then(function (weatherDetails) {
                    //this is where you have all your important data!
                    console.log(weatherDetails)

                    document.getElementById('city-date').innerHTML = data[0].name;
                    document.getElementById('temp-0').innerHTML = 'Temperature: ' + data[0].main.temp;
                    document.getElementById('wind-0').innerHTML = 'Wind: ' + data[0].wind.speed + 'km/h';
                    document.getElementById('humidity-0').innerHTML = 'Humidity: ' + data[0].main.humidity + '%';


                  //   for (var i = 0; i < weatherDetails.list; i++) {
                  //      const pTag = document.createElement("p")
                  //      pTag.innerHTMl = weatherDetails.list[0].main.temp
                  //      pTag.append(someDiv)

                  //  } 
            }) 

});


// HTML Elements
var searchInput = $('#inputText')
var searchButton = $('#search-btn')

// API Key
const apiKey = "735ee00c033a0c203ee912145178a36b";

// URLs
// const weatherUrl = ``
// const locationUrl = `` 

// Weather information
function getWeatherDetails() {


}



// City Coordinates
function getCityCoordinates() {
  const cityName = 'ballina'
  // if (!cityName) return ; // Returns if input is empty 

  const locationUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`;

  fetch(locationUrl) 
    .then(function (response) {
      return response.json();
  }) 
    .then(function (data) {
      if (!data.length) 
      return alert(`No coordinates found for ${cityName}`)
    const { name,   }
  })
};

getCityCoordinates();

// searchButton.addEventListener('click', getCityCoordinates);



// Fetch request gets a list of weather info from API
async function getApi(){
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  document.getElementById('city-date').innerHTML = data.name;
  document.getElementById('temp-0').innerHTML = 'Temperature: ' + Math.round(data.main.temp) + '°c';
  document.getElementById('wind-0').innerHTML = 'Wind: ' + data.wind.speed + 'km/h';
  document.getElementById('humidity-0').innerHTML = 'Humidity: ' + data.main.humidity + '%';

  // if we
}

function getApi () {
  fetch(apiUrl )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //Using console.log to examine the data
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        //Creating a h3 element and a p element
        var userName = document.createElement('h3');
        var userUrl = document.createElement('p');

        //Setting the text of the h3 element and p element.
        userName.textContent = data[i].login;
        userUrl.textContent = data[i].html_url;

        //Appending the dynamically generated html to the div associated with the id="users"
        //Append will attach the element as the bottom most child.
        usersContainer.append(userName);
        usersContainer.append(userUrl);
      }
    });
}

















// HTML Elements
var searchButton = document.getElementById('search-btn');
var searchInput = document.getElementById('search-inputText');
var city = searchInput.value;



// API Key and URL
const apiKey = "735ee00c033a0c203ee912145178a36b";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&q=${city}&units=metric&appid=${apiKey}`;


const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}&units=metric`;

// Fetch request gets a list of weather info from API
async function getApi(){
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  document.getElementById('city-date').innerHTML = data.name;
  document.getElementById('temp-0').innerHTML = 'Temperature: ' + Math.round(data.main.temp) + '°c';
  document.getElementById('wind-0').innerHTML = 'Wind: ' + data.wind.speed + 'km/h';
  document.getElementById('humidity-0').innerHTML = 'Humidity: ' + data.main.humidity + '%';

  // if we
}

function getApi () {
  fetch(apiUrl )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //Using console.log to examine the data
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        //Creating a h3 element and a p element
        var userName = document.createElement('h3');
        var userUrl = document.createElement('p');

        //Setting the text of the h3 element and p element.
        userName.textContent = data[i].login;
        userUrl.textContent = data[i].html_url;

        //Appending the dynamically generated html to the div associated with the id="users"
        //Append will attach the element as the bottom most child.
        usersContainer.append(userName);
        usersContainer.append(userUrl);
      }
    });
}

getApi();

// searchButton.addEventListener('click', ()=> {
//   getApi(searchInput.value);
// });

// Variables for API call
// var city;









// function getApi() {
//   fetch(queryURL)
//     .then(function (response) {
//       // parsed through JSON
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// }

// // Returns data from API call
// searchButton.addEventListener('click', getApi);








fetch(queryURL)
  .then(function (response) {
    return response.json();
  })
    then(function (data) {
      console.log(data)

    .then(function (data) {
        console.log(data[0].lon);
        var lat = data[0].lat;
        var lon = data[0].lon;
        var weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherKey}`;

        fetch(queryURL)
            .then(function (response) {
            return response.json();
        })  
            .then(function (response) {
          }
                    console.log(response)
                    
                    for (var i = 0; i < weatherInfo.list; i++) {
                       const pTag = document.createElement("p")
                       pTag.innerHTMl = weatherInfo.list[0].main.temp;
            

                   }); 
            });




























// var searchUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${weatherKey}`;


// Input in form
// var search = $("#inputText").val();



// fetch(searchUrl)
//   .then(function (response) {
//     return response.json();
//   })
//     .then(function (data) {
//         console.log(data[0].lon);
//         var lat = data[0].lat;
//         var lon = data[0].lon;
//         var weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherKey}`;

//         fetch(weatherUrl)
//             .then(function (response) {
//             return response.json();
//         })  
//             .then(function (response) {

//                     //this is where you have all your important data!
//                     for(var i=0; i<response.list.length; i+=8){
//                       var dayCounter = 1;
//                       var tempDayOne = response.list[i].main.temp;
//                       console.log(tempDayOne);
//                       $('#day-' + dayCounter + '-temp').text(tempDayOne);
//                       dayCounter++;
//           }
//                     console.log(response)
                    
//                   //   for (var i = 0; i < weatherInfo.list; i++) {
//                   //      const pTag = document.createElement("p")
//                   //      pTag.innerHTMl = weatherInfo.list[0].main.temp
//                   //      pTag.append(someDiv)

//                   //  } 
//             }) 
// });


// function handleSearchFormSubmit(event){
//   event.preventDefault();
//   var cityName = $("#search-inputText").val();
//   // I used .toLowerCase because the program was seeing 'new york' and 'New York' as two different cities and would append both as buttons
//   cityName = cityName.toLowerCase();
//   // sets the header of the page to say 'weather for _____'
//   $('#city-date').text('The Weather for '+cityName);
//   // sets the weatherApi url
//   // var cityNameApi = weatherApiStart + cityName + weatherApiEnd;
  
//   // I originally was appending the buttons of the past searches in this function but had to change it because I couldn't check if the city was in the api here
//       // If the city wasn't in the api, I didn't want to append the button
//           // This is the reason I pass the city name to the callWeatherApi()
//       var searchUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${weatherKey}`;

//   callWeatherApi(searchUrl, cityName);
// }
// // when they submit the form looking for a city
// $('#search-btn').on('submit', handleSearchFormSubmit);


// firstly figure out apis

// data i need to collect
// 1. when the search button is hit trigger the api call
// 2. append the name of the search into the top box
// 3. create a button using local storage of prior searched citys
// 4. an alert if the city cannot be found
// 5. automatically capitalise the first letter of the searched city
// 6. pull todays date and display, iterate through following 5 days (6 total) and append to elements

// for(var i=0; i<response.list.length; i+=8){
//   // the temp is in kelvin so I need to convert the data into an int before I convert it to c
//   var tempInt = parseInt(response.list[i].main.temp);
//   // I subtract 273 to convert the temp from K to C and store it
//   var cTemp = tempInt - 273;
//   // The default is m/sec so I need to convert it to km/hr
//   var windSpeedInt = parseInt(response.list[i].wind.speed);
//   var windSpeed = windSpeedInt * 3.6;
//   // Humidity, and sky conditions
//   var humidity = response.list[i].main.humidity;
//   var sky = response.list[i].weather[0].main;
//   // sends the data to the displaySearch() function
//   displaySearch(cTemp, windSpeed, humidity, sky);
// }
// // Gets the stored cities from the local storage. Will be used to check if a new city is searched for and if so, will append it as a new button
//   // the '|| []' is there for when the app is first started and there is nothing in the local storage, it'll create an empty array to be filled
// var storedCities = JSON.parse(localStorage.getItem('storedCities')) || [];
// // This if statement is checking if the searched city is NOT in the local storage. And if it isn't, it'll append it as a new button
// if (!storedCities.includes(cityName)){
//   var pastSearches = $('#pastSearches');
//   var pastBtn = $('<button>');
//   pastBtn.text(cityName);
//   pastSearches.attr('class', 'container-fluid row row-cols-1 rounded align-items-start justify-content-center');
//   pastBtn.attr('class', 'btn btn-outline-secondary w-75 my-2');
//   //this if statement fixed a bug I was having
//       // when the user clicked on an appeneded button, a 'null' value was put in the local storage and that 'null' was then appeneded into a button
//           // this if statment essentially checks if what's trying to be appended is null and if it's NOT null then it'll append the button
//   if(pastBtn.text() !== ''){
//       pastSearches.append(pastBtn);
//       storedCities.push(cityName);
//       // stores the searched city into the local storage
//       localStorage.setItem('storedCities', JSON.stringify(storedCities));
//   }
// }



// // specify html elements
// // var day-1-temp = response.list[i].lengt

// for(var i=0; i<response.list.length; i +=8){
//   var dayCounter = 1;

// }