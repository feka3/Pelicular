
const renderCards = require("./renderCards");
const createMovie = require("./createMovie");
const axios = require("axios");

// METODO AXIOS

const main = async () => {
    try{
        const movies = await axios.get('http://localhost:3000/movies');
        renderCards(movies.data);
    }catch(err){
        console.log(err.message);
    }
}


const submitButton = document.getElementById('formContainer');

submitButton?.addEventListener('submit', createMovie);

main();

export default main;