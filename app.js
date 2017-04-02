var express = require('express'),
    exphbs  = require('express-handlebars');

var app = express();

var hbs = exphbs.create({
    defaultLayout: 'default',
    // register partials folder
    partialsDir: [
        'views/partials/'
    ]
});

// Register `hbs` as our view engine using its bound `engine()` function.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// home
app.get('/', function (req, res) {
    res.render('home', {
        title: 'Home'
    });
});

// about
app.get('/about', function (req, res) {
    res.render('about', {
        title: 'About'
    });
});

// else
app.get('/*', function (req, res) {
    res.render('home', {
        title: 'Other'
    });
});

// assets
app.use(express.static('public/'));

// listening
app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
    console.log('server listening on: 3000');
});