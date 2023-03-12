////////IMPORTS/////////
const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'./views'));
/////////////////////////

///Search Button Logic///

let names = [  "emma",  "olivia",  "ava",  "isabella",  "sophia",  "charlotte",  "mia",  "amelia",  "harper",  "evelyn",  "abigail",  "emily",  "elizabeth",  "avery",  "ella",  "scarlett",  "grace",  "chloe",  "victoria",  "aubrey"];

console.log("FUCK ME DADDIE");

//request and response
//each of the "app.get" thingies is called a "route"
app.get('/', (req, res) => {
    let num = 5
    res.render('home', {num});
});


// CRUD 
/**
 * here is an R (Retrieve, search)
 */
app.get('/arraySearch', (req, res) => {
    let searchText;
    // searchText = req.query["searchText"]
    req.query["searchText"];
    if(req.query["searchText"] !== undefined){
        
        searchText = req.query["searchText"].toLowerCase();
    }
    let nameFilter = names.filter(search => search.includes(searchText));

    res.render('array', {nameFilter});

});

app.get('/arrayAdd', (req, res) => {
    // searchText = req.query["searchText"]
    let searchText;
    
    req.query["searchText"];
    if(req.query["searchText"] !== undefined){
        searchText = req.query["searchText"].toLowerCase();
        names.push(searchText);
    }
    console.log(names);
    
    res.render('arrayAdd', {names});


});

app.get('/arrayDelete', (req, res) => {
    // searchText = req.query["searchText"]
    let searchText;
    
    req.query["searchText"];
    if(req.query["searchText"] !== undefined && names.find(search => search === searchText) === searchText){
        searchText = req.query["searchText"].toLowerCase();
        let indexOfSearchText = names.indexOf(searchText);
        //we have the index of the search text in the array
        names.splice(indexOfSearchText, indexOfSearchText);
    }
    console.log(names);
    
    res.render('arrayDelete', {names});

});
/**
 * make a router that adds to the names array with an html form, and displays the entire array in a table, like before
 */

//create a forEach loop that iterates over every item in nameFilter and makes it an item in a bulleted list.
// ctrl + tilde hides and show terminal (shortcut)
//1. render ul element
//2. render li elements within the ul element

app.listen(3000);