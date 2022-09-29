const express = require('express');
const BodyParser = require('body-parser');
const app = express();
const port = 8080;
const sql = require('./db');
const connection = require('./db');
const path = require('path');
const CRUD = require("./CRUD_functions"); 

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,"page1.html"));
1});

app.get('/update', (req,res)=>{
    res.sendFile(path.join(__dirname, "page3.html"));
});

app.post("/createNewCustomer", CRUD.createNewCustomer);

app.get('/find', CRUD.FindCustomer);

app.post('/update', CRUD.Update);

app.get('/customers', (req, res)=>{
    sql.query("SELECT * FROM customers", (err, mysqlre)=>{
        if (err) {
            console.log("EEERRRROORRRR: ", err);
            res.status(404).send({message: "error in getting customers"});
            return;
        }
        console.log("got all cutomers");
        res.send(mysqlre);
        return;
    })});


app.listen(port , ()=>{
    console.log("server is running on port " + port);
});

