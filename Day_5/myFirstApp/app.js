const express = require('express');
const app = express();
const port = 8200;
var mysql = require('mysql2');


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'dbuser',
    password: 's3kreee7',
    database: 'my_db'
})

connection.connect()
connection.query('select 1 + 1 AS solution', (err, rows, fields) => {
    if (err) throw err;
    console.log("the solution is: ", rows[0].solution);
})
connection.end()

app.get('/', (req, res, next) => {
    console.log("Here are req params" + req.params);
    next()
}, function (req, res) {
    res.send("this is a handler with 2 callback functions")    
})


app.listen(port, ()=>{
    console.log('app listening at port http://localhost:8200')
});