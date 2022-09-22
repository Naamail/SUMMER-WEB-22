const { application } = require('express');
const express = require('express');
const path = require('path');
const port = 8080;
const app = express();
//set up pubkic directory for static files
app.use(express.static(path.join(__dirname, "public")));
// set up views directory for html/pug files
app.set('views',path.join(__dirname,'views'));
// set up view engine as pug
app.set('view engine', 'pug');

app.get('/', (req,res)=>{
   res.render('index', {
      var1: "Hi all",
      var2: "This is a pug demo"
   });
   //res.send('hello PUG');
});

app.get('/page2', (req,res)=>{
   res.render('page2', {
       var1: "page 2",
       var2: "page 2 page 2 page 2"
   });
});

app.get('/page3', (req,res)=>{
   res.render('page3', {
       var1: "page 3",
       var2: "page 3 page 3 page 3"
   });
});

 app.listen(port, ()=>{
    console.log("server is running on port " + port);
 }
 );

