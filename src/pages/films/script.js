document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const moviesSection = document.querySelector('.movie-grid');
    const genreFilter = document.getElementById('genre-filter');

    let films = [];
    let filteredFilms = [];

    fetch('../../json/films.json')
        .then(response => response.json())
        .then(data => {
            films = data.films;
            filteredFilms = films;
            displayMovies(filteredFilms);
            populateGenreFilter(films);
        })
        .catch(error => console.error('Erro ao carregar os dados dos filmes:', error));

    function createMovieCard(film) {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <img src="${film.capa}" alt="${film.nome}">
            <div class="info">
                <h3>${film.nome}</h3>
                <p>${film.ano} - ${film.avaliacao} / 10</p>
            </div>
        `;
        return movieCard;
    }

    function displayMovies(films) {
        moviesSection.innerHTML = '';
        films.forEach(film => {
            const movieCard = createMovieCard(film);
            moviesSection.appendChild(movieCard);
        });
    }

    function searchMovies(query) {
        const lowerQuery = query.toLowerCase();
        filteredFilms = films.filter(film => 
            film.nome.toLowerCase().includes(lowerQuery)
        );
        displayMovies(filteredFilms);
    }

    searchButton.addEventListener('click', () => {
        const query = searchInput.value;
        searchMovies(query);
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });

    function filterByGenre(genre) {
        if (genre === 'all') {
            filteredFilms = films;
        } else {
            filteredFilms = films.filter(film => film.categorias.includes(genre));
        }
        displayMovies(filteredFilms);
    }

    function populateGenreFilter(films) {
        const genres = new Set();
        films.forEach(film => {
            film.categorias.forEach(category => genres.add(category));
        });
        genres.forEach(genre => {
            const option = document.createElement('option');
            option.value = genre;
            option.textContent = genre.charAt(0).toUpperCase() + genre.slice(1);
            genreFilter.appendChild(option);
        });
        genreFilter.addEventListener('change', (e) => {
            filterByGenre(e.target.value);
        });

        const allOption = document.createElement('option');
        allOption.value = 'all';
        allOption.textContent = 'Todos';
        genreFilter.insertBefore(allOption, genreFilter.firstChild);
    }
});