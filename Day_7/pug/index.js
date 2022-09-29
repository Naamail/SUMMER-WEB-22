const express = require('express');
const path = require('path');
const app = express();
const port = 3030;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// set up for static dir
app.use(express.static('static'));

app.get('/', (req, res)=>{
    res.render('index', {
        variable1: "hello again PUG",
        variable2: "this is sssoooooo easy!"
    });
//    res.send('hello PUG');
});

app.listen(port, ()=>{
    console.log("server is running on port " + port);
})