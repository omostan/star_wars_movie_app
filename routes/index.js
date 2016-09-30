var moviesJSON = require('../movies.json');
var settingJSON = require('../package.json');

// Home
exports.home = function(req, res) {

    var movies = moviesJSON.movies;
    var author = settingJSON.author;
    var version = settingJSON.version;
    var description = settingJSON.description;


    // var moviePosters = [];

    // for(var i = 0; i < movies.length; i++) {
    //     moviePosters = moviePosters.concat(movies[i].poster);
    // }


    res.render('home', {
        title: 'Star Wars Movies',
        movies: movies,
        // app settings
        author: author,
        version: version,
        description: description
        //, moviePosters: moviePosters
    });
};

// movie_single
exports.movie_single = function(req, res) {

    var episode_number = req.params.episode_number;

    var movies = moviesJSON.movies;
    var author = settingJSON.author;
    var version = settingJSON.version;
    var description = settingJSON.description;

    if (episode_number >= 1 && episode_number <= movies.length) {
        var movie = movies[episode_number - 1];

        var title = movie.title;

        var main_characters = movie.main_characters;

        res.render('movie_single', {
            movies: movies,
            title: title,
            movie: movie,
            main_characters: main_characters,
            // app settings
            author: author,
            version: version,
            description: description
        });
    } else {
        res.render('notFound', {
            movies: movies,
            // app settings
            author: author,
            version: version,
            description: description,
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