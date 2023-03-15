/**
 *  you will make functions here to further 'encapsulate' your project
 *  add a function for:
 *      Add - Done 
 *      Delete - Done
 *      Search - Done
 *      Save
 *      Read
 */
/**
 * Make a new branch for this work
 */

const path = require('path');
const fs = require("fs");
let filePath = ("/Users/leotulchin/StudyJS/ExpressWebPage/array.txt");
// let readFile = fs.readFileSync(filePath);
// let readFileProperArray = readFile.toString().split(",");

/////Add function works!!/////
const Add = (req, res, readFileProperArray) => {
    let searchText;
    // let filePath = ("/Users/leotulchin/StudyJS/ExpressWebPage/array.txt");
    // let readFile = fs.readFileSync(filePath);
    // let readFileProperArray = readFile.toString().split(",");
    req.query["searchText"];
    if(req.query["searchText"] !== undefined){
        searchText = req.query["searchText"].toLowerCase();
        readFileProperArray.push(searchText);
        fs.writeFileSync(filePath, readFileProperArray.toString());
    }
}
exports.Add = Add;
///////////delete function works!//////////
const Delete = (req, res, readFileProperArray) => {
    let searchText;  
    req.query["searchText"];
    if(req.query["searchText"] !== undefined && readFileProperArray.find(search => search === searchText) === searchText){
        searchText = req.query["searchText"].toLowerCase();
        let indexOfSearchText = readFileProperArray.indexOf(searchText);
        //we have the index of the search text in the array
        readFileProperArray.splice(indexOfSearchText, indexOfSearchText);
        fs.writeFileSync(filePath, readFileProperArray.toString());

    }
}
exports.Delete = Delete;
///////////////////////////////////////////////////////

const Search = (req, res, readFileProperArray) => {
    let searchText;
    // searchText = req.query["searchText"]
    req.query["searchText"];

    if(req.query["searchText"] !== undefined){
        
        searchText = req.query["searchText"].toLowerCase();
    }
    nameFilter = readFileProperArray.filter(search => search.includes(searchText));
}
exports.Search = Search;
/////////////////////////////////////////////////////////

const Read = (filePath) => {
    fs.readFileSync(filePath);
    readFileProperArray = readFile.toString().split(",");
}

// exports.Read = Read;
///////////////////////////////////////////////////////////
