// HTML Elements
var searchButton = $('#search-btn')
var citySearch = $('#inputText')

// API Key
var apiKey = "735ee00c033a0c203ee912145178a36b";
var weatherUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${citySearch}&limit=5&units=metric&appid=${apiKey}`;


  $.ajax({
    url: weatherUrl,
    method: 'GET',
    dataType: 'json'
  })
  .then(function (data) {
    var lat = data[0].lat;
    var lon = data[0].lon;
    var locationUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

    return $.ajax({
      url: locationUrl,
      method: 'GET',
      dataType: 'json'
    });
  })
  .then(function (weatherDetails) {
    // This is where you have all your important data!
    console.log(weatherDetails);

    $('#city-date').html(weatherDetails.city.name);
    $('#temp-0').html('Temperature: ' + weatherDetails.list[0].main.temp + '°c');
    $('#wind-0').html('Wind: ' + weatherDetails.list[0].wind.speed + ' km/h');
    $('#humidity-0').html('Humidity: ' + weatherDetails.list[0].main.humidity + '%');
  })
  .fail(function (error) {
    console.error('Error:', error);
  });

  