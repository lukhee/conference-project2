const con = require("../util/db")

exports.speaker = (req, res, next) => {
    res.set('Content-Type', 'application/json' ),
    console.log(req)
    let register = {
        fullName: req.body.fullName,
        email: req.body.Email,
        phone_No: req.body.Phone_No
    }
    console.log(register)
    // let sql = `INSERT INTO users(FullName,Email,Phone_No,category)
    //         VALUES(?,?,?,"talk")`;
    // let user = [register.fullName,register.email,register.phone_No];
    // con.query(sql,user, (err, rows)=>{
    //     if(err) throw err;
    //     res.status(201).send({message: "new register to talk successfull"})
    // })
}

exports.quest = (req, res, next) => {
    let register = {
        fullName: req.body.fullName,
        email: req.body.email,
        phone_No: req.body.phone_No
    }
    let sql = `INSERT INTO users(FullName,Email,Phone_No,category)
            VALUES(?,?,?,"attendee")`;
    let user = [register.fullName, register.email, register.phone_No];
    con.query(sql, user, (err, rows) => {
        if (err) throw err;
        res.status(201).send({ message: "new register to attend" })
    })
}