const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


//express.static => 'public'
app.use(express.static('public'));


// set the view engine to ejs
app.set('view engine', 'ejs');


//index
app.get('/index', (req, res) => {
    res.render('index');
});

//portfolio
app.get('/portfolio', (req, res) => {
    res.render('portfolio');
});


//contact
app.get('/contact', (req, res) => {
    res.render('contact');
});



//skill
app.get('/skill', (req, res) => {
    res.render('skill');
});


app.listen(3000, () => {
    console.log('server started on port 3000!');
    });