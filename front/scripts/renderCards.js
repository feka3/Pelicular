const renderCards = (data) => {
    data.forEach(pelicula => {
        // Obtener el contenedor
        const carteleraContainer = document.querySelector('.movies_container');
        // Crear un div para la tarjeta de la película
        const cardElement = document.createElement('section');
        const imageElement = document.createElement('img');
        const cardBodyElement = document.createElement('div');
        const titleElement = document.createElement('h1');
        const durationElement = document.createElement('p');
        const rateElement = document.createElement('p');

        const genresContainer = document.createElement('div');

        const footerElement = document.createElement('div');
        const directorElement = document.createElement('p');
        const añoElement = document.createElement('p');
    
        imageElement.src = pelicula.poster;
        titleElement.textContent = pelicula.title
        durationElement.textContent = pelicula.duration;
        rateElement.textContent = pelicula.rate + '/10';
        directorElement.textContent = pelicula.director;
        añoElement.textContent = pelicula.year;

        
    
        // Agregar clase a la tarjeta
    
        cardElement.classList.add('card');
        cardBodyElement.classList.add('card_body', 'd-flex', 'flex-column', 'px-2');
        titleElement.classList.add('card_title', 'nomp', 'text-white','fs-2', 'pt-3', 'fs-3', 'px-2');
        durationElement.classList.add('card_duracion', 'nomp', 'text-white', 'px-2');
        rateElement.classList.add('card_rate', 'nomp', 'text-white', 'text-center', 'm-auto', 'fs-1', );
        
        footerElement.classList.add('d-flex', 'justify-content-between', 'fs-5', 'p-1');
        directorElement.classList.add('nomp', 'text-white');
        añoElement.classList.add('nomp', 'text-white');



        genresContainer.classList.add('d-flex', 'text-white', 'flex-column', 'align-items-center');


        
    
        // Crear elementos para mostrar la información de la película
    
        cardElement.appendChild(imageElement);
    
        cardElement.appendChild(cardBodyElement);
            cardBodyElement.appendChild(titleElement);
            cardBodyElement.appendChild(durationElement);

            pelicula.genre.forEach(genre => {
                const genreSpan = document.createElement('span');
                genreSpan.textContent = genre;
                genreSpan.classList.add('genre');
                cardBodyElement.appendChild(genresContainer);
                genresContainer.appendChild(genreSpan);
            });

            cardBodyElement.appendChild(rateElement);

    
            cardBodyElement.appendChild(footerElement);
                footerElement.appendChild(directorElement);
                footerElement.appendChild(añoElement);
    
        // Agregar la tarjeta de película al contenedor
        carteleraContainer?.appendChild(cardElement);


        
    });
}

module.exports = renderCards;