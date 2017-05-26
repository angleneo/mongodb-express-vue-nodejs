var express = require('express');
// var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var router = require('router');
var books = require('./routes/books');
var Book = require('./schema/book');
var app = express();
app.use(bodyParser.json());

// view engine setup
 // app.set('views', path.join(__dirname, 'views'));
 // app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());
app.use('/static', express.static('public'));



mongoose.connect('mongodb://localhost:27011/bookstore');
// catch 404 and forward to error handler
app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

  if (req.method == 'OPTIONS') {
    res.send(200); /让options请求快速返回/
  }
  else {
    next();
  }
});
var router = express.Router();

router.use(function(req,res,next){
	console.log('Something you do');
	next();
})

router.get('/',function(req,res){
		res.json({message:'api has beused'});
})



app.use('/api',router);
app.use('/api',require('./routes/books'));
module.exports = app;
