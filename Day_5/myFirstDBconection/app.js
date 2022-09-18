const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const mysql = require('mysql2');
const dbConfig = require('./dbconfig');

const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DATABASE    
});



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.json({ message: "lets try this DB connction" })    
})

app.listen(3000, ()=>{
    console.log("server is running on port 3000")
})