var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var usersAuthentication = require('./routes/Authentication');
var product = require('./routes/product');

const cors = require("cors");

var app = express();
app.use(cors());


//upload-file
const fileupload = require("express-fileupload");
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(fileupload());

app.post("/upload", (req, res) => {
  console.log(req.files.file)
  const newpath = __dirname + "/public/upload-files/";
  const file = req.files.file;
  const filename = file.name;
 
  file.mv(`${newpath}${filename}`, (err) => {
    if (err) {
      res.status(500).send({ message: "File upload failed", code: 200 });
    }
    res.status(200).send({ message: "File Uploaded", code: 200 });
  });
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/Authentication', usersAuthentication);
app.use('/', product)

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
