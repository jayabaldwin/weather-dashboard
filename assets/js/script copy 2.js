
// // API Key
// var apiKey = "735ee00c033a0c203ee912145178a36b";
// var baseUrl = "https://api.openweathermap.org";


// // Fetching the users city input prefernece
// function fetchCoords () {
//   var apiUrl = `${baseUrl}/geo/1.0/direct?q=ballina&limit=5&units=metric&appid=${apiKey}`;

//   fetch(apiUrl)
//     .then(function (res) {
//       return res.json();
//   })
//     .then(function (data){
//       renderItems(data);
//   })
//     .catch(function (error) {
//       console.log(error);
//   });

//   function renderItems (data) {
//     console.log(data);
//   }
  
//   var lat = data[0].lat;
//   var lon = data[0].lon;

//   var apiUrl = `${baseUrl}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

//   fetch(apiUrl)
//     .then(function (res) {
//       return res.json();
//   })
//     .then(function (data){
//       renderItems(data);

//   })
//     .catch(function (error) {
//       console.log(error);
//   });

// };


// Fetching the weather data through the Weather Geolocation endpoint, based on the users city input 
// function fetchWeather() {
//   var lat = data[0].lat;
//   var lon = data[0].lon;

//   var apiUrl = `${baseUrl}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

//   fetch(apiUrl)
//     .then(function (res) {
//       return res.json();
//   })
//     .then(function (data){
//       renderItems(data);

//   })
//     .catch(function (error) {
//       console.log(error);
//   })
// };

// fetchWeather();

// above to fetchCoord function and pass to fetchWeather function

// fetch(weatherUrl)
//   .then(response => response.json())
//   .then(data => {
//     var lat = data[0].lat;
//     var lon = data[0].lon;
//     var locationUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    
//     return fetch(locationUrl);
//   })
//   .then(response => response.json())
//   .then(weatherDetails => {
//     // This is where you have all your important data!
//     console.log(weatherDetails);


// PROJECT JS
const tmdbKey = 'f9eca978d834236e3eaffb9f8d4c55df';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const playBtn = document.getElementById('playBtn');

const getGenres = async () => {
  const genreRequestEndpoint = '/genre/movie/list';
  const requestParams = `?api_key=${tmdbKey}`;
  var urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;
  
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      const genres = jsonResponse.genres;
      console.log(genres);
      return genres;
    }
  } catch (error) {
    console.log(error);
  } 
}; 
  

const getMovies = async () => {
  const selectedGenre = getSelectedGenre();
  const discoverMovieEndpoint = '/discover/movie';
  const requestParams = `?api_key=${tmdbKey}&with_genre=${selectedGenre}`;
  var urlToFetch = `${tmdbBaseUrl}${discoverMovieEndpoint}${requestParams}`;

  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      const movies = jsonResponse.results;
      console.log(movies);
      return movies;
    }
  } catch (error) {
    console.log(error)
  };
};

const getMovieInfo = async (movie) => {
  const movieId = movie.id;
  const movieEndpoint = `/movie/${movie.id}`;
  requestParams = `?api_key=${tmdbKey}`;
  var urlToFetch = `${tmdbBaseUrl}${movie}${requestParams}`;

try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      const genres = jsonResponse.movieInfo;
      console.log(movieInfo);
      return movieInfo;
    }
  } catch (error) {
    console.log(error);
  } 
}; 


// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async () => {
  const movieInfo = document.getElementById('movieInfo');
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  };

  const movies = await getMovies();
  const randomMovie = getRandomMovie(movies);
  const info = await getMovieInfo(randomMovie);
  
  displayMovie(info);
};


getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;


// HELPER JS

// Populate dropdown menu with all the available genres
const populateGenreDropdown = (genres) => {
  const select = document.getElementById('genres')

  for (const genre of genres) {
      let option = document.createElement("option");
      option.value = genre.id;
      option.text = genre.name;
      select.appendChild(option);
  }
};

// Returns the current genre selection from the dropdown menu
const getSelectedGenre = () => {
  const selectedGenre = document.getElementById('genres').value;
  return selectedGenre;
};

// Displays the like and dislike buttons on the page
const showBtns = () => {
  const btnDiv = document.getElementById('likeOrDislikeBtns');
  btnDiv.removeAttribute('hidden');
};

// Clear the current movie from the screen
const clearCurrentMovie = () => {
  const moviePosterDiv = document.getElementById('moviePoster');
  const movieTextDiv = document.getElementById('movieText');
  moviePosterDiv.innerHTML = '';
  movieTextDiv.innerHTML = '';
}

// After liking a movie, clears the current movie from the screen and gets another random movie
const likeMovie = () => {
  clearCurrentMovie();
  showRandomMovie();
};

// After disliking a movie, clears the current movie from the screen and gets another random movie
const dislikeMovie = () => {
  clearCurrentMovie();
  showRandomMovie();
};

// Create HTML for movie poster
const createMoviePoster = (posterPath) => {
  const moviePosterUrl = `https://image.tmdb.org/t/p/original/${posterPath}`;

  const posterImg = document.createElement('img');
  posterImg.setAttribute('src', moviePosterUrl);
  posterImg.setAttribute('id', 'moviePoster');

  return posterImg;
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

// Returns a random movie from the first page of movies
const getRandomMovie = (movies) => {
  const randomIndex = Math.floor(Math.random() * movies.length);
  const randomMovie = movies[randomIndex];
  return randomMovie;
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