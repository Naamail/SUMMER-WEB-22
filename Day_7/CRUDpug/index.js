// import + declare what ever you need
const express = require('express');
const BodyParser = require('body-parser');
const path = require('path');
const port = 3000;
const sql = require('./db');
const CRUD = require('./CRUD');

// setups
const app = express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static('static'));


//routs
app.get('/', (req, res)=>{
    res.render('insert');
    //res.send("hi mysql + pug");
});

app.post('/insertStudent',CRUD.InsertStudent);

app.get('/SelectAll', (req, res)=>{
    res.render('SelectAll');
});

app.get('/ShowAllStudents', CRUD.ShowAllStudents);

// listen
app.listen(port, ()=>{
    console.log("server is running on port " + port);
});
