var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// first adition to change jade to html
// var bodyParser = require("body-parser");
// var cons = require('consolidate');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var Page2Router = require('./routes/page2')

// setup app
var app = express();

// second addition to change jade to html  
// app.engine('html', cons.swig)

// view engine setup -- change jade to html
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// refernce to page: rout+view
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Page2', Page2Router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
