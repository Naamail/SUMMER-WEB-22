const { application } = require('express');
const express = require('express');
const path = require('path');

const port = 8080;

const app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'pug');

 app.get('/', (req,res)=>{
    res.render('index', {
        var1: "Hi all",
        var2: "This is a pug demo"
    });
    //res.send('hello PUG');
 });
 app.listen(port, ()=>{
    console.log("server is running on port " + port);
 }
 );

