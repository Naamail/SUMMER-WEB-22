var SQL = require('./db')

const CreateTable = (req,res)=> {
    var Q1 = "CREATE TABLE users (name VARCHAR(255), email VARCHAR(255))";
    SQL.query(Q1,(err,mySQLres)=>{
        if (err) {
            console.log("error ", err);
            res.status(400).send({message: "error in creating table"});
            return;
        }
        console.log('created table');
        res.send("table created");
        return;
    })      
}

const InsertData = (req,res)=>{
    var NewUser = {
        "name" : "david",
        "email" : "david@gmail.com"
    }
    var Q2 = "INSERT INTO users SET ?";
    SQL.query(Q2, NewUser, (err, mySQLres)=>{
        if (err) {
            res.status(400).send({message: "error om creating user" + err});
            console.log("error om creating user" + err);
            return;            
        }
        console.log("created new user succesfully "+ mySQLres);
        res.send("user inserted");
        return;
    });
};


const ShowTable = (req,res)=>{
    var Q3 = "SELECT * FROM users";
    SQL.query(Q3, (err, mySQLres)=>{
        if (err) {
            console.log("error in showing table ", err);
            res.send("error in showing table ");
            return;
        }
        console.log("showing table");
        res.send(mySQLres);
        return;
    })};

const DropTable = (req, res)=>{
    var Q4 = "DROP TABLE users";
    SQL.query(Q4, (err, mySQLres)=>{
        if (err) {
            console.log("error in droping table ", err);
            res.status(400).send({message: "error om dropping table" + err});
            return;
        }
        console.log("table drpped");
        res.send("table drpped");
        return;
    })
}


module.exports = {CreateTable, InsertData, ShowTable, DropTable};

