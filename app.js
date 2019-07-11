//NODE CORE MODULES IMPORTS
const path = require('path');

//3RD PARTY PACKAGES IMPORTS
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));


app.use((req, res, next) => {
    res.status(404).render('page-not-found', {pageTitle: 'Page Not Found'});
});

app.listen(8000);