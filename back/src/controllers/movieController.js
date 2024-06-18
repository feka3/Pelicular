const movieService = require("../services/movieService");
const catchAsync = require("../utils/catchAsync");


const getAllMovies = async (req, res) => {
    const movies = await movieService.getAllMovies();
    res.status(200).json(movies);
    res.status(500).json({error: "Error interno del servidor"})
}

const createMovie = async (req, res) => {
    const { title, year, director, duration, genre, rate, poster } = req.body;
    await movieService.createMovie({title, year, director, duration, genre, rate, poster});
    res.status(200).json({message: "Pelicula creada correctamente"})
    res.status(500).json({error: "Error al crear pelicula"});
}

module.exports = {
    getAllMovies: catchAsync(getAllMovies),
    createMovie: catchAsync(createMovie)
}