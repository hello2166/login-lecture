
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const home = require('./src/routes/home');

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(bodyParser.json()); // app.use('/'.. 보다 위에 둬야 제대로 작동하는 듯
//app.use(bodyParser.urlencoded({extended: true})); // url의 공백, 한글등 처리, 당장은 한글 전달 문제 없는 듯

app.use('/', home);
app.use(express.static(`${__dirname}/src/public`));


module.exports = app;

