var express = require('express')
var path = require('path');
var app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/profile', function (req, res) {
    res.send('Profile Page')
})

app.get('/file', function (req, res) {
    var name = req.query.name;
    res.sendFile(path.join(__dirname,'assets',`./${name}.jpg`))
})

app.listen(3000)