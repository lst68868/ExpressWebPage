////////IMPORTS/////////
const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const path = require('path')
const fs = require("fs")

const {Add, Delete, Search} = require('./Helpers/utility.js');
// const {Read} = require('./Helpers/utility.js');

app.use(express.static(path.join(__dirname, 'public')))
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'./views'));

let filePath = ("/Users/leotulchin/StudyJS/ExpressWebPage/array.txt");
let readFile = fs.readFileSync(filePath);
let readFileProperArray = readFile.toString().split(",");


app.get('/', (req, res) => {
    let num = 5
    res.render('home', {num});
});

app.get('/arraySearch', (req, res) => {
    Search(req, res, readFileProperArray);
    res.render('array', {nameFilter});
});

app.get('/arrayAdd', (req, res) => {
    Add(req, res, readFileProperArray);
    res.render('arrayAdd', {readFileProperArray});
});

app.get('/arrayDelete', (req, res) => {
    // searchText = req.query["searchText"]
    Delete(req, res, readFileProperArray);
    res.render('arrayDelete', {readFileProperArray});
});


app.listen(3000);