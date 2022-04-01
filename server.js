// Load express
const express = require('express');
const path = require('path');
const skillDb = require('./data/skills-db');
// Create our express app
const app = express();
// how to configure view engine//
app.set('view engine','ejs')
//this is the folder that sets the path to the views folder//
app.set('views', path.join(__dirname, 'views'));
// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
app.get('/', function (req, res) {
  res.redirect('/skills')
});

app.get('/home', function(req, res){
    res.render('home')// we use render when we want to complete an ejs template and send it to the client
});
app.get('/skills', function (req, res){
    res.render('skills/index', {
    skills: skillDb.getAll()// the key is a variable in the template
    })//skills is a variable inside the skills/index.ejs file
})


// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});        