var moviesJSON = require('../movies.json');

// Home
exports.home = function(req, res) {

    var movies = moviesJSON.movies;


    // var moviePosters = [];

    // for(var i = 0; i < movies.length; i++) {
    //     moviePosters = moviePosters.concat(movies[i].poster);
    // }


    res.render('home', {
        title: 'Star Wars Movies',
        movies: movies
            //, moviePosters: moviePosters
    });
};

// movie_single
exports.movie_single = function(req, res) {

    var episode_number = req.params.episode_number;

    var movies = moviesJSON.movies;

    if (episode_number >= 1 && episode_number <= 6) {
        var movie = movies[episode_number - 1];

        var title = movie.title;

        var main_characters = movie.main_characters;

        res.render('movie_single', {
            movies: movies,
            title: title,
            movie: movie,
            main_characters: main_characters
        });
    } else {
        res.render('notFound', {
            movies: movies,
            title: 'This is not the page you are looking for.'
        });
    }


};

// notFound
exports.notFound = function(req, res) {
    var movies = moviesJSON.movies;
    res.render('notFound', {
        movies: movies,
        title: 'This is not the page you are looking for.'
    });
};