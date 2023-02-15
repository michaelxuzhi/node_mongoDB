var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// mongoose、配置信息的导入
const mongoose = require('mongoose');
const { url, dbname } = require('./config/config.dev');

// 路由的导入
var indexRouter = require('./routes/index');
var registerRouter = require('./routes/register');
var searchRouter = require('./routes/search');
var tageditRouter = require('./routes/tagedit'); // 指令标签修改

// var events = require('events');
// var emitter = new events.EventEmitter();

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//设置CORS
// 跨域设置
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3002'); //当允许携带cookies此处的白名单不能写’*’
    res.header(
        'Access-Control-Allow-Headers',
        'content-type,Content-Length, Authorization,Origin,Accept,X-Requested-With'
    ); //允许的请求头
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT'); //允许的请求方法
    res.header('Access-Control-Allow-Credentials', true); //允许携带cookies
    next();
});

// 路由的使用
app.use('/', indexRouter);
app.use('/register', registerRouter);
app.use('/search', searchRouter);
app.use('/tagedit', tageditRouter); // 指令标签修改

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

// app.locals.$emitter = emitter;
// 连接数据库
mongoose
    .connect(`${url}/${dbname}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('数据库连接成功');
    })
    .catch(err => {
        console.log(err);
    });

module.exports = app;
