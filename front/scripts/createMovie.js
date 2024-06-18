const main = require('./index');
const axios = require("axios");

const createMovie = async (event) => {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente

  // Captura los valores de los inputs
  const title = document.getElementById('inputMovieName').value;
  const director = document.getElementById('inputMovieDirector').value;
  const year = document.getElementById('inputMovieYear').value;
  const duration = document.getElementById('inputMovieDuration').value;
  const rate = document.getElementById('inputMovieRate').value;
  const poster = document.getElementById('inputMovieUrl').value;


  const [horas, minutos] = duration.split(':');
  const durationString = horas[1]+ "h " + minutos + "min";

  const generos = extractGenreValues();


  if(validateForm(title,director,year,duration,rate,poster)==false){
    return;
  }

  try {
      // Envía una solicitud POST al servidor para agregar la película
      await axios.post('http://localhost:3000/movies', {
          title: title,
          director: director,
          year: year,
          duration: durationString,
          rate: rate,
          poster: poster,
          genre: generos,
      });

      alert("pelicula creada con exito");
      // Después de agregar la película, actualiza la lista de películas
      main();
  } catch (error) {
      console.error('Error al agregar la película:', error);
  }
}

function extractGenreValues() {
    // Obtener el contenedor de los campos de género
    const camposDiv = document.getElementById("genreFields");
    
    // Inicializar un arreglo para almacenar los valores de los géneros
    const generos = [];

    // Obtener todos los elementos de entrada dentro del contenedor
    const inputs = camposDiv.querySelectorAll("input");

    // Iterar sobre los elementos de entrada y extraer sus valores
    inputs.forEach(input => {
        // Obtener el valor del campo de entrada y agregarlo al arreglo de géneros
        generos.push(input.value);
    });

    // Devolver el arreglo de géneros
    return generos;
}

function validateForm(title,director,year,duration,rate,poster) {
  const selectedGenre = document.getElementById("inputStateGenre").value;
  const generos = extractGenreValues();

  if (selectedGenre === "Elige..." || generos.length === 0 || !title || !director || !year || !duration || !rate || !poster) {
      console.log(title, director, year, duration, rate, poster);
      alert("Por favor, completa todos los campos.");
      return false; // Evita que el formulario se envíe
  }

  return true; // Permite que el formulario se envíe
}


  module.exports = createMovie;