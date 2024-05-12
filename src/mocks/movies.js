export const movies = [
    { id: 1, title: 'Forrest Gump', director: 'Robert Zemeckis', year: 1994, category: 'Drama', img: 'https://i.pinimg.com/736x/a8/39/7d/a8397dcfdf56fc342c3712a91e186575.jpg'},
    { id: 2, title: 'The Godfather', director: 'Francis Ford Coppola', year: 1972, category: 'Acción', img: 'https://i.ebayimg.com/images/g/X~cAAOSwz2ZiaB2w/s-l1200.jpg' },
    { id: 3, title: 'The Godfather: Part II', director: 'Francis Ford Coppola', year: 1974, category: 'Acción', img: 'https://i.ebayimg.com/images/g/RAMAAOSwYHVj8lr6/s-l1600.jpg'},
    { id: 4, title: 'The Dark Knight', director: 'Christopher Nolan', year: 2008, category: 'Acción', img: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg' },
    { id: 5, title: 'Pulp Fiction', director: 'Quentin Tarantino', year: 1994, category: 'Comedia', img: 'https://m.media-amazon.com/images/I/718LfFW+tIL._AC_UF894,1000_QL80_.jpg' },
    { id: 6, title: 'Fight Club', director: 'David Fincher', year: 1999, category: 'Acción', img: 'https://i.pinimg.com/736x/91/43/7e/91437e40c778c43362378556bfd2c43f.jpg'},
    { id: 7, title: 'The Matrix', director: 'Lana Wachowski', year: 1999, category: 'Ciencia Ficción', img: 'https://i.ebayimg.com/images/g/QFQAAOSwAQpfjaA6/s-l1600.jpg' },
    { id: 8, title: 'Inception', director: 'Christopher Nolan', year: 2010, category: 'Acción', img: 'https://m.media-amazon.com/images/I/71uKM+LdgFL._AC_UF894,1000_QL80_.jpg'},
    { id: 9, title: 'The Lord of the Rings: The Fellowship of the Ring', director: 'Peter Jackson', year: 2001, category: 'Fantasía', img: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg' },
    { id: 10, title: 'The Lord of the Rings: The Two Towers', director: 'Peter Jackson', year: 2002, category: 'Fantasía',  img: 'https://m.media-amazon.com/images/M/MV5BZTUxNzg3MDUtYjdmZi00ZDY1LTkyYTgtODlmOGY5N2RjYWUyXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_FMjpg_UX1000_.jpg' },
    { id: 11, title: 'Pearl', director: 'Ti West', year: 2022, category: 'Terror', img: 'https://image.tmdb.org/t/p/original/h3b2KrlxYLSr4uqeY4Tn4KeGwAg.jpg'} 
    // { id: 12, title: 'The Lord of the Rings: The Return of the King', director: 'Peter Jackson', year: 2003 },
    // { id: 13, title: 'Goodfellas', director: 'Martin Scorsese', year: 1990 },
    // { id: 14, title: 'The Silence of the Lambs', director: 'Jonathan Demme', year: 1991 },
    // { id: 15, title: 'The Departed', director: 'Martin Scorsese', year: 2006 },
    // { id: 16, title: 'Gladiator', director: 'Ridley Scott', year: 2000 },
    // { id: 17, title: 'The Prestige', director: 'Christopher Nolan', year: 2006 },
    // { id: 18, title: 'The Green Mile', director: 'Frank Darabont', year: 1999 },
    // { id: 19, title: 'The Lion King', director: 'Roger Allers', year: 1994 },
    // { id: 20, title: 'Inglourious Basterds', director: 'Quentin Tarantino', year: 2009 },
    // { id: 21, title: 'The Avengers', director: 'Joss Whedon', year: 2012 },
    // { id: 22, title: 'The Social Network', director: 'David Fincher', year: 2010 },
    // { id: 23, title: 'Interstellar', director: 'Christopher Nolan', year: 2014 },
    // { id: 24, title: 'The Dark Knight Rises', director: 'Christopher Nolan', year: 2012 },
    // { id: 25, title: 'The Shawshank Redemption', director: 'Frank Darabont', year: 1994 },
    // { id: 26, title: 'The Godfather', director: 'Francis Ford Coppola', year: 1972 },
    // { id: 27, title: 'The Godfather: Part II', director: 'Francis Ford Coppola', year: 1974 },
    // { id: 28, title: 'The Dark Knight', director: 'Christopher Nolan', year: 2008 },
    // { id: 29, title: 'Pulp Fiction', director: 'Quentin Tarantino', year: 1994 },
    // { id: 30, title: 'Fight Club', director: 'David Fincher', year: 1999 },
    // { id: 31, title: 'The Matrix', director: 'Lana Wachowski', year: 1999 },
    // { id: 32, title: 'Inception', director: 'Christopher Nolan', year: 2010 },
    // { id: 33, title: 'The Lord of the Rings: The Fellowship of the Ring', director: 'Peter Jackson', year: 2001 },
    // { id: 34, title: 'The Lord of the Rings: The Two Towers', director: 'Peter Jackson', year: 2002 },
    // { id: 35, title: 'The Lord of the Rings: The Return of the King', director: 'Peter Jackson', year: 2003 },
    // { id: 36, title: 'Forrest Gump', director: 'Robert Zemeckis', year: 1994 },
    // { id: 37, title: 'Goodfellas', director: 'Martin Scorsese', year: 1990 },
    // { id: 38, title: 'The Silence of the Lambs', director: 'Jonathan Demme', year: 1991 },
    // { id: 39, title: 'The Departed', director: 'Martin Scorsese', year: 2006 },
    // { id: 40, title: 'Gladiator', director: 'Ridley Scott', year: 2000 }
];