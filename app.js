////////IMPORTS/////////
const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const path = require('path')
const fs = require("fs")

const {Add} = require('/Users/leotulchin/StudyJS/ExpressWebPage/Helpers/utility.js');
const {Delete} = require("/Users/leotulchin/StudyJS/ExpressWebPage/Helpers/utility.js");
const {Search} = require("/Users/leotulchin/StudyJS/ExpressWebPage/Helpers/utility.js");

app.use(express.static(path.join(__dirname, 'public')))
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'./views'));

let filePath = ("/Users/leotulchin/StudyJS/ExpressWebPage/array.txt");
let readFile = fs.readFileSync(filePath);
let readFileProperArray = readFile.toString().split(",");




/////////////////////////

///Search Button Logic///

/**
 * 1. Here We will READ from a FILE instead of declaring an array
 * after reading from file we 'transform' (cast) into an array, remember it will pass in as an array of bytes first. 
 * 
 * 
 * 2. remember, we want to SAVE (Write to) the file everytime we edit it. Hint: Obviously this means we don't save the file during a search only query. Only delete and add 
 * 
 * EXTRA CREDIT: make everything it look nicer with CSS 
 */
// //The array I'm using as the contents of my txt file.
// let names = [  "emma",  "olivia",  "ava",  "isabella",  "sophia",  "charlotte",  "mia",  "amelia",  "harper",  "evelyn",  "abigail",  "emily",  "elizabeth",  "avery",  "ella",  "scarlett",  "grace",  "chloe",  "victoria",  "aubrey"];
// // The file path to my text file
// let filePath = (`${__dirname}/array.txt`);
// //The command that lets me write the contents of my aray, converted to a string, as my text file
// fs.writeFileSync(filePath, names.toString());
// //The command that lets me "read" the contents of the txt file in Terminal
// let readFile = fs.readFileSync(filePath);
// //The command that lets me convert the text file to a string, then an array split on commas.
// let readFileProperArray = readFile.toString().split(",");

// console.log(readFileProperArray);

//request and response
//each of the "app.get" thingies is called a "route"
// const Add = require('/Users/leotulchin/StudyJS/ExpressWebPage/utility.js')


app.get('/', (req, res) => {
    let num = 5
    res.render('home', {num});
});

// appGet();

// CRUD 
/**
 * here is an R (Retrieve, search)
 */
app.get('/arraySearch', (req, res) => {
    Search(req, res);
    res.render('array', {nameFilter});
});

app.get('/arrayAdd', (req, res) => {
    Add(req, res);
    res.render('arrayAdd', {readFileProperArray});
});

app.get('/arrayDelete', (req, res) => {
    // searchText = req.query["searchText"]
    Delete(req, res);
    res.render('arrayDelete', {readFileProperArray});
});
/**
 * make a router that adds to the names array with an html form, and displays the entire array in a table, like before
 */

//create a forEach loop that iterates over every item in nameFilter and makes it an item in a bulleted list.
// ctrl + tilde hides and show terminal (shortcut)
//1. render ul element
//2. render li elements within the ul element

app.listen(3000);