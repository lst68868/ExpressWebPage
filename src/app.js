const express = require('express')
const app = express()

//yourwebsitename/
//The below code blocks are called "routes"

const path = require("path")

app.get('/', function (req, res) {
    //get requests retrieve, post requests send.
    //we "req" (request) /home, we "res" (receive) "Hello Home"
  //Instead of 'hello home', we could send the html file
  res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/apartment', function (req, res) {
    res.send('Hello apartment')
  })

app.listen(3000)