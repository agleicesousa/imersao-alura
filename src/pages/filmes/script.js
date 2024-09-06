document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os elementos da página
    const searchButton = document.getElementById('search-button');  // Botão de busca
    const searchInput = document.getElementById('search-input');    // Campo de input da busca
    const moviesSection = document.querySelector('.movie-grid');    // Seção onde os filmes serão exibidos
    const genreFilter = document.getElementById('genre-filter');    // Filtro de gênero

    let filteredFilms = filmes; // Inicializa a variável com a lista de filmes

    // Exibe os filmes iniciais e preenche o filtro de gêneros
    displayMovies(filteredFilms);
    populateGenreFilter(filmes);

    // Cria um card para exibir as informações de um filme
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

    // Exibe os filmes na seção de grid
    function displayMovies(films) {
        moviesSection.innerHTML = ''; // Limpa a seção de filmes
        films.forEach(film => {
            const movieCard = createMovieCard(film); // Cria um card para cada filme
            moviesSection.appendChild(movieCard);   // Adiciona o card à seção de filmes
        });
    }

    // Filtra e exibe filmes de acordo com a busca
    function searchMovies(query) {
        const lowerQuery = query.toLowerCase(); // Converte a busca para letras minúsculas
        filteredFilms = filmes.filter(film =>
            film.nome.toLowerCase().includes(lowerQuery) // Filtra os filmes pelo nome
        );
        displayMovies(filteredFilms); // Exibe os filmes filtrados
    }

    // Evento de clique no botão de busca
    searchButton.addEventListener('click', () => {
        const query = searchInput.value; // Obtém o valor do campo de busca
        searchMovies(query); // Executa a busca
    });

    // Evento de pressionar Enter no campo de busca
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchButton.click(); // Simula um clique no botão de busca
        }
    });

    // Filtra filmes por gênero
    function filterByGenre(genre) {
        if (genre === 'all') {
            filteredFilms = filmes; // Exibe todos os filmes se "Todos" for selecionado
        } else {
            filteredFilms = filmes.filter(film => film.categorias.includes(genre)); // Filtra por categoria
        }
        displayMovies(filteredFilms); // Exibe os filmes filtrados
    }

    // Preenche o filtro de gêneros com as categorias disponíveis
    function populateGenreFilter(films) {
        const genres = new Set(); // Usa um Set para garantir que não haja categorias duplicadas
        films.forEach(film => {
            film.categorias.forEach(category => genres.add(category)); // Adiciona as categorias ao Set
        });
        genres.forEach(genre => {
            const option = document.createElement('option');
            option.value = genre;
            option.textContent = genre.charAt(0).toUpperCase() + genre.slice(1); // Capitaliza o gênero
            genreFilter.appendChild(option); // Adiciona a opção ao filtro
        });

        // Adiciona evento ao filtro para filtrar filmes quando o usuário seleciona uma categoria
        genreFilter.addEventListener('change', (e) => {
            filterByGenre(e.target.value);
        });

        // Adiciona uma opção "Todos" no início da lista de gêneros
        const allOption = document.createElement('option');
        allOption.value = 'all';
        allOption.textContent = 'Todos';
        genreFilter.insertBefore(allOption, genreFilter.firstChild); // Coloca a opção "Todos" como a primeira
    }
});