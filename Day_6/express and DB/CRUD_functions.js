const sql = require('./db');
var path = require('path');


const createNewCustomer = (req, res)=>{
    if (!req.body) {
        res.status(400).send({message: "content cannot be empty"});
        return;
    }
    const NewCustomer = {
        "email": req.body.CustomerEmail,
        "name": req.body.CustomerName
    };
    console.log(NewCustomer);
    sql.query("INSERT INTO customers SET ?", NewCustomer, (err, mysqlres)=>{
        if (err) {
            console.log("ERROR: ", err);
            res.status(400).send({message: "error in creating an account " + err});
            return;
        }
        console.log("New customer created");
        res.sendfile(path.join(__dirname, "page2.html"));
        return;
    } )

}; 

const FindCustomer = (req, res)=>{
    if (!req.body) {
        res.status(400).send({message: "serch cannot be empty"});
        return;        
    }
    const Customer = req.query.SearchName;
    console.log(Customer);
    sql.query("SELECT * FROM customers where name like ?" , Customer + "%", (err, results, fields)=>{
        if (err) {
            console.log("ERROR IS: " + err);
            res.status(400).send("Somthing is wrong with query" + err);
            return;
        }
        console.log("Customer found");
        res.send(results);
        return;
    });
};

const Update = (req, res)=>{
    if (!req.body) {
        console.log("body was empty");
        res.status(400).send("input cannot be empty");
        return;
    }
    var UpdateCustomer = {
        "email": req.body.NewEmail,
        "name": req.body.CustomerName
    };
    console.log(UpdateCustomer);
    let updateQuery = "UPDATE customers SET email = ? where name = ?";
    let data = [UpdateCustomer.email, UpdateCustomer.name];

    sql.query(updateQuery, data,(err, results,fields)=>{
        if (err) {
            console.log("error is: " + err);
            res.status(400).send({message: "error in updating customer " + err});
            return;
        }
        console.log("row affected " + results.affectedRows);
        res.sendfile(path.join(__dirname,"./views/page4.html"));
        return;
    })
};

module.exports = {createNewCustomer, FindCustomer, Update};