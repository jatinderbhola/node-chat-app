var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


const { db, session, socket } = require("./server/lib");

//////////////////////// initialize my db
db.connect(function (err, res) {
  if (res) {
    console.log('mongodb connected');
  } else {
    console.error('mongodb connected failed', err);
  }
});


///////////////////////// register my models
require("./server/models");


//////////////////////// init app
var app = express();


//////////////////////// app config
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//////////// view engine setup
app.use(express.static(__dirname));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//////////////////////// register my routes
require("./server/routes");
var { message, chatRoom, person } = require('./server/routes');

app.get('/', function (req, res, next) {
  res.render('index');
});
app.use('/api/messages', message);
// app.use('/api/person', person);
// app.use('/api/chat-room', chatRoom);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




module.exports = app;
