var search = 'sydney';
// API Key
var weatherKey = "735ee00c033a0c203ee912145178a36b";

// the API url
var searchUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${weatherKey}`;


fetch(searchUrl)
  .then(function (response) {
    return response.json();
  })
    .then(function (data) {
        console.log(data[0].lon);
        var lat = data[0].lat;
        var lon = data[0].lon;
        var weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherKey}`;

        fetch(weatherUrl)
            .then(function (response) {
            return response.json();
        })  
            .then(function (weatherInfo) {
                    //this is where you have all your important data!
                    console.log(weatherInfo)
                    
                    for (var i = 0; i < weatherInfo.list; i++) {
                       const pTag = document.createElement("p")
                       pTag.innerHTMl = weatherInfo.list[0].main.temp
                       pTag.append(someDiv)

                   } 
            }) 

});


// firstly figure out apis

// data i need to collect
// 1. when the search button is hit trigger the api call
// 2. append the name of the search into the top box
// 3. create a button using local storage of prior searched citys
// 4. an alert if the city cannot be found
// 5. automatically capitalise the first letter of the searched city
// 6. pull todays date and display, iterate through following 5 days (6 total) and append to elements