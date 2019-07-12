const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const userArray = [];

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res, next) => {
    res.render('form', {pageTitle: 'Form Page'});
});

app.post('/', (req, res, next) => {
    if(req.body.name !== '') {userArray.push(req.body.name)};
    res.redirect('/users');
});

app.get('/users', (req, res, next) => {
    res.render('list', {pageTitle: 'User list', usrArr: userArray})
});

app.listen(8000);