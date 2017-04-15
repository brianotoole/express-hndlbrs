var express = require('express');
var exphbs  = require('express-handlebars');
var path    = require('path');
var app     = express();

// setup handlebars
var hbs = exphbs.create({
    defaultLayout: 'default',
    extname: 'hbs', //file extenstion name (.hbs)
    partialsDir: [
        'views/partials/'
    ]
});

// Register `hbs` as our view engine using its bound `engine()` function.
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

// Requests
// home
app.get('/', function (req, res) {
    res.render('index', {
        title: 'Home'
    });
});

// about
app.get('/about', function (req, res) {
    res.render('about', {
        title: 'About'
    });
});

// assets path
app.use(express.static(path.join(__dirname, '/dist')));

// listening
app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
    console.log('server listening on: 3000');
});