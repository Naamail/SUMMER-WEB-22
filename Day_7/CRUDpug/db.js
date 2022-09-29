const mysql = require('mysql2');
const dbConfig =require('./db.config.js');

const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

connection.connect(error =>{
    if (error) throw error;
    console.log("succefuly connected to DB");
});

module.exports = connection;
