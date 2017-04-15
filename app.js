var express = require('express');
var exphbs  = require('express-handlebars');
var path    = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
//var users = require('./routes/users');

var app = express();

// view engine setup
var hbs = exphbs.create({
    defaultLayout: 'default',
    extname: 'hbs', //file extenstion name (.hbs)
    partialsDir: [
        'views/partials/'
    ]
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// assets path
app.use(express.static(path.join(__dirname, '/dist')));

// mount the index route at the / path
app.use('/', index); 
//app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  // render the error page
  res.render('error', {
        title: err
  });
});


// listening
app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(err, req) {
    if(err) {
        console.log('server error');
    } else {
        console.log('server listening on: 3000');
    }
});

module.exports = app;