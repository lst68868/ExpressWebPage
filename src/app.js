const express = require('express')
const app = express()

//yourwebsitename/
//The below code blocks are called "routes"

const path = require("path")

let database = ["Sophia", "Jackson", "Olivia", "Liam", "Emma", "Noah", "Ava", "Aiden", "Isabella", "Caden", "Mia", "Grayson", "Charlotte", "Elijah", "Amelia"];
let databaseLowerCase = [];
database.map((value, index) => {
  databaseLowerCase.push(value.toLowerCase())
})
let result = []

console.log(databaseLowerCase);
app.get('/', function (req, res) {
    //get requests retrieve, post requests send.
    //we "req" (request) /home, we "res" (receive) "Hello Home"
  //Instead of 'hello home', we could send the html file
  res.sendFile(path.join(__dirname, '/index.html'));
  // console.log(req.body);
  let names = res.req.query; //we saved query object as its own variable for get requests in forms

  console.log(names.search);
  let searchQuery = names.search;
  //basically have this logic print on the html page
  if(searchQuery){
    result = databaseLowerCase.filter(results => results.includes(searchQuery.toLowerCase()))
  }else{
    console.log(databaseLowerCase);
  }
  console.log(result)
  //database filtered by search query

  //useful for putting data into a database in future
})

app.get('/apartment', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
  
  })

app.listen(3000)

