const mysql = require('mysql');

// mysql connection
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "conference"
    // host:"qzkp8ry756433yd4.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    // user:"mav92vxmzj4xgqp9",
    // password:"q7i5lfeolieiamar",
    // database:"b8xf4tesxbck6p27"
});

con.connect(function (err) {
    if (err) {
        console.log("no connection")
        throw err
    }
    let createMemberTable = `create table if not exists members(
    ID int primary key auto_increment,
    FullName varchar(255) not null,
    Email varchar(255) not null,
    Phone_No varchar(255) not null,
    category varchar(255) not null
)`;

    con.query(createMemberTable, function (err, results, fields) {
        if (err) {
            console.log(err.message);
        }
        console.log("member created")
    });
    console.log("mysql is Connected!");
});

module.exports = con