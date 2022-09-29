const sql = require('./db');
const InsertStudent = (req,res)=>{
    if (!req.body) {
        res.status(400).send({
            message: "content cannot be empty"
        });
        return;
    }
    const NewStudentEntry = {
        "email" : req.body.StudentEmail,
        "name" : req.body.StudentName
    }
    const Q1 = "INSERT INTO students SET ?";
    sql.query(Q1, NewStudentEntry, (err, mysqlres)=>{
        if (err) {
            res.status(400).send({message: "error om creating customer " + err});
            console.log("error om creating customer " + err);
            return;            
        }
        console.log("created new student succesfully "+ mysqlres);
        res.render('success', {
            var1: "",
            var2: "created student successfuli " + mysqlres.name
        });
        //res.send({message:"created new student succesfully "+ mysqlres});
        return;
    });
};

const ShowAllStudents = (req,res)=>{
    const Q2 = "SELECT * FROM students";
    sql.query(Q2, (err, mysqlres)=>{
        if (err) {
            console.log("error in getting all customers " + err);
            res.status(400).send({message:"error in getting all customers " + err})
            return;
        }
        console.log("success... ");
        res.render('results', {
            var1:"All stuednt table",
            pple: mysqlres
        });
        //res.send(mysqlres);
        return;
    });
};

module.exports = {InsertStudent, ShowAllStudents}