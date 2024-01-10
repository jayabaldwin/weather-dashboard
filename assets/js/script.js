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