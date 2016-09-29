var express = require('express');
var app = express();
// var port = 8000;

// app.listen(port, function() {
//     console.log('started server and can be reached on http://localhost:' + port);
// });

app.listen(process.env.PORT || 3000);

app.set('view engine', 'ejs');

var routes = require('./routes');

var path = require('path');

// viewed at http://localhost:3000
app.use(express.static(path.join(__dirname, 'public')));

// Home
app.get('/', routes.home);

// movie_single
app.get('/star_wars_episode/:episode_number?', routes.movie_single);

// notFound
app.get('*', routes.notFound);