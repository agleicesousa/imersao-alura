let filmes = [
    {
        nome: "A Rede Social",
        ano: 2010,
        categorias: ["Drama", "Biografia"],
        avaliacao: 7.7,
        capa: "https://br.web.img3.acsta.net/medias/nmedia/18/87/32/90/19874370.jpg",
    },
    {
        nome: "O Senhor dos Anéis: A Sociedade do Anel",
        ano: 2001,
        categorias: ["Aventura", "Fantasia"],
        avaliacao: 8.8,
        capa: "https://harpercollins.com.br/cdn/shop/products/9786555113631_79a81e4f-07c1-4aa8-ba58-b44033442bbf.jpg?v=1686061056",
    },
    {
        nome: "A Origem",
        ano: 2010,
        categorias: ["Ação", "Sci-Fi"],
        avaliacao: 8.8,
        capa: "https://upload.wikimedia.org/wikipedia/pt/8/84/AOrigemPoster.jpg",
    },
    {
        nome: "Pulp Fiction: Tempo de Violência",
        ano: 1994,
        categorias: ["Crime", "Drama"],
        avaliacao: 8.9,
        capa: "https://m.media-amazon.com/images/I/61I5eZI9HJL._AC_UF894,1000_QL80_.jpg",
    },
    {
        nome: "O Poderoso Chefão",
        ano: 1972,
        categorias: ["Crime", "Drama"],
        avaliacao: 9.2,
        capa: "https://www.europanet.com.br/upload/id_produto/107___/107366g.jpg",
    },
    {
        nome: "O Cavaleiro das Trevas",
        ano: 2008,
        categorias: ["Ação", "Crime"],
        avaliacao: 9.0,
        capa: "https://upload.wikimedia.org/wikipedia/pt/thumb/d/d1/The_Dark_Knight.jpg/250px-The_Dark_Knight.jpg",
    },
    {
        nome: "Forrest Gump: O Contador de Histórias",
        ano: 1994,
        categorias: ["Drama", "Romance"],
        avaliacao: 8.8,
        capa: "https://m.media-amazon.com/images/S/pv-target-images/c13db7cab337d48fbac3715065ef255862e2c7e5fc25d6a262a0cf7c35c29d20.jpg",
    },
    {
        nome: "Clube da Luta",
        ano: 1999,
        categorias: ["Drama"],
        avaliacao: 8.8,
        capa: "https://br.web.img3.acsta.net/medias/nmedia/18/90/95/96/20122166.jpg",
    },
    {
        nome: "O Silêncio dos Inocentes",
        ano: 1991,
        categorias: ["Crime", "Drama"],
        avaliacao: 8.6,
        capa: "https://upload.wikimedia.org/wikipedia/pt/0/0a/Silence_of_the_lambs.png",
    },
    {
        nome: "Gladiador",
        ano: 2000,
        categorias: ["Ação", "Aventura"],
        avaliacao: 8.5,
        capa: "https://upload.wikimedia.org/wikipedia/pt/4/44/GladiadorPoster.jpg",
    },
    {
        nome: "A Vida é Bela",
        ano: 1997,
        categorias: ["Drama", "Comédia"],
        avaliacao: 8.6,
        capa: "https://upload.wikimedia.org/wikipedia/pt/a/af/La_vita_%C3%A8_bella.jpg",
    },
    {
        nome: "O Exorcista",
        ano: 1973,
        categorias: ["Horror"],
        avaliacao: 8.0,
        capa: "https://upload.wikimedia.org/wikipedia/pt/thumb/a/a6/The_Exorcist_1973.jpg/225px-The_Exorcist_1973.jpg",
    },
    {
        nome: "Cães de Aluguel",
        ano: 1992,
        categorias: ["Crime", "Drama"],
        avaliacao: 8.3,
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAUTDqfqUQptpcAoJ8qjApAQnvtWLuOBA7OA&s",
    },
    {
        nome: "Matrix",
        ano: 1999,
        categorias: ["Ação", "Sci-Fi"],
        avaliacao: 8.7,
        capa: "https://img.elo7.com.br/product/zoom/26799EE/big-poster-filme-matrix-lo01-tamanho-90x60-cm-poster.jpg",
    },
    {
        nome: "Jurassic Park",
        ano: 1993,
        categorias: ["Aventura", "Sci-Fi"],
        avaliacao: 8.1,
        capa: "https://i.pinimg.com/originals/5e/3b/9e/5e3b9ed50212e01eba8499cd479b2451.jpg",
    },
    {
        nome: "Star Wars: Episódio IV - Uma Nova Esperança",
        ano: 1977,
        categorias: ["Aventura", "Fantasia"],
        avaliacao: 8.6,
        capa: "https://m.media-amazon.com/images/I/91JdH5gPo4L._AC_UF1000,1000_QL80_.jpg",
    },
    {
        nome: "O Labirinto do Fauno",
        ano: 2006,
        categorias: ["Fantasia", "Drama"],
        avaliacao: 8.2,
        capa: "https://br.web.img2.acsta.net/medias/nmedia/18/87/14/49/19872468.jpg",
    },
    {
        nome: "O Grande Lebowski",
        ano: 1998,
        categorias: ["Comédia", "Crime"],
        avaliacao: 8.1,
        capa: "https://upload.wikimedia.org/wikipedia/pt/thumb/0/0c/The_Big_Lebowski.jpg/250px-The_Big_Lebowski.jpg",
    },
    {
        nome: "A Forma da Água",
        ano: 2017,
        categorias: ["Fantasia", "Romance"],
        avaliacao: 7.3,
        capa: "https://br.web.img2.acsta.net/pictures/17/11/28/18/40/3044833.jpg",
    },
    {
        nome: "Os Infiltrados",
        ano: 2006,
        categorias: ["Crime", "Drama"],
        avaliacao: 8.5,
        capa: "https://br.web.img3.acsta.net/medias/nmedia/18/90/18/94/20085052.jpg",
    },
    {
        nome: "O Lobo de Wall Street",
        ano: 2013,
        categorias: ["Comédia", "Drama"],
        avaliacao: 8.2,
        capa: "https://br.web.img2.acsta.net/pictures/13/12/30/18/11/111145.jpg",
    },
    {
        nome: "Parasita",
        ano: 2019,
        categorias: ["Drama", "Comédia"],
        avaliacao: 8.6,
        capa: "https://br.web.img2.acsta.net/pictures/19/10/04/19/58/1046648.jpg",
    },
    {
        nome: "Coringa",
        ano: 2019,
        categorias: ["Crime", "Drama"],
        avaliacao: 8.4,
        capa: "https://upload.wikimedia.org/wikipedia/pt/6/63/Joker_%282019%29.jpg"
    },
    {
        nome: "O Diabo Veste Prada",
        ano: 2006,
        categorias: ["Comédia", "Drama"],
        avaliacao: 6.9,
        capa: "https://upload.wikimedia.org/wikipedia/pt/e/e8/The_Devil_Wears_Prada_-_filme.jpg",
    },
    {
        nome: "O Jogo da Imitação",
        ano: 2014,
        categorias: ["Biografia", "Drama"],
        avaliacao: 8.0,
        capa: "https://gagueira.org.br/images/imagens-releases/o-jogo-da-imitacao-alan-turing.jpeg",
    },
    {
        nome: "A Bela e a Fera",
        ano: 1991,
        categorias: ["Animação", "Fantasia"],
        avaliacao: 8.0,
        capa: "https://i.pinimg.com/736x/e3/c9/6e/e3c96e80d2798a3d4d6d34d161b33a01.jpg",
    },
    {
        nome: "A Viagem de Chihiro",
        ano: 2001,
        categorias: ["Animação", "Fantasia"],
        avaliacao: 8.6,
        capa: "https://www.cinemadebuteco.com.br/wp-content/uploads/2012/10/a-viagem-de-chihiro-poster.jpeg",
    },
    {
        nome: "A Fantástica Fábrica de Chocolates",
        ano: 1971,
        categorias: ["Aventura", "Familia"],
        avaliacao: 7.8,
        capa: "https://images.justwatch.com/poster/187992897/s718/a-fantastica-fabrica-de-chocolate-1971.jpg",
    },
    {
        nome: "O Grande Hotel Budapeste",
        ano: 2014,
        categorias: ["Comédia", "Crime"],
        avaliacao: 8.1,
        capa: "https://upload.wikimedia.org/wikipedia/pt/1/1f/O_Grande_Hotel_Budapeste_poster_no_Brasil_wk.png",
    },
    {
        nome: "O Iluminado",
        ano: 1980,
        categorias: ["Horror", "Drama"],
        avaliacao: 8.4,
        capa: "https://br.web.img3.acsta.net/pictures/14/10/10/19/21/152595.jpg",
    },
    {
        nome: "Django Livre",
        ano: 2012,
        categorias: ["Ação", "Drama"],
        avaliacao: 8.4,
        capa: "https://br.web.img2.acsta.net/r_1280_720/medias/nmedia/18/90/07/53/20311243.jpg",
    },
    {
        nome: "O Menino que Descobriu o Vento",
        ano: 2019,
        categorias: ["Drama", "Família"],
        avaliacao: 7.6,
        capa: "https://br.web.img3.acsta.net/pictures/19/01/30/09/40/0392469.jpg",
    },
    {
        nome: "It: A Coisa",
        ano: 2017,
        categorias: ["Horror", "Fantasia"],
        avaliacao: 6.7,
        capa: "https://br.web.img3.acsta.net/pictures/17/03/30/22/44/345288.jpg",
    },
    {
        nome: "Missão: Impossível - Fallout",
        ano: 2018,
        categorias: ["Ação", "Aventura"],
        avaliacao: 7.7,
        capa: "https://one-cinema.s3.sa-east-1.amazonaws.com/filmes/mission-impossible-fallout/10062020/342/capa-mission-impossible-fallout.jpg",
    },
    {
        nome: "No País das Maravilhas",
        ano: 1951,
        categorias: ["Animação", "Fantasia"],
        avaliacao: 7.4,
        capa: "https://br.web.img2.acsta.net/pictures/14/02/27/19/01/345052.jpg",
    }
]

console.log(filmes);