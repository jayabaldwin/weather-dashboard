// API Key
var APIKey = "735ee00c033a0c203ee912145178a36b";

// Variables for API call
var city;

// The API url
var queryURL = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${APIKey}`;






























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