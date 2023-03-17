////////IMPORTS/////////
const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const path = require('path')
const fs = require("fs")
const fileUpload = require("express-fileupload")

app.use(fileUpload());

const {Add, Delete, Search, Read} = require('./Helpers/utility.js');
// const {Read} = require('./Helpers/utility.js');

app.use(express.static(path.join(__dirname, 'public')))
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'./views'));

let filePath = ("/Users/leotulchin/StudyJS/ExpressWebPage/array.txt");
// let readFile = fs.readFileSync(filePath);
let readFileProperArray = Read(filePath);
let uploadedFileData;
console.log(uploadedFileData) //this should read as undefined every time the server restarts

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
    console.log("arrayAdd complete")
});

app.get('/arrayDelete', (req, res) => {
    // searchText = req.query["searchText"]
    Delete(req, res, readFileProperArray);
    res.render('arrayDelete', {readFileProperArray});
});

app.get('/arrayUpload', (req, res) => {
    // searchText = req.query["searchText"]
    let filePath = "/Users/leotulchin/StudyJS/ExpressWebPage/views/arrayUpload.handlebars"
    res.render(filePath)
});

app.post("/arrayUpload", (req, res) => {
    let uploadedFileData = req.files.file.data.toString().split(",")
    this.uploadedFileData = uploadedFileData; //this allows you to access the global version of a variable within a local scope
    res.render('arrayUpload', {uploadedFileData});
});



// here we add another router  called /upload. Start with this.



/**
 *  Here we are going to upload a new 'data' file (array.txt, very important that you UPLOAD it as the SAME NAME)
 *      1. The new array.txt file that is uploaded should be reflected in in the table that is rendered
 *      2. to do this, you are going to have to have an input in the HTML form, be of type "file"
 *      3. from there, you should be able to grab it from either the req or res variable that is passed into the gets
 *              ** you MIGHT have to use app.post, we are not there yet. Feel free to try it out if that ends up being the solution but don't beat yourself up about it **
 *      4. assign the passed file to a global variable that is read 'aka the the read function we made on line 18'
 *      
 */

app.listen(3000);