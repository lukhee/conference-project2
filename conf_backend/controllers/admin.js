const con = require("../util/db")

exports.viewAll = (req, res, next) => {
    con.query('SELECT * FROM users', (err, rows) => {
        if (err) throw err;
        console.log('Data received from Db:\n');
        console.log(rows);
        res.status(200).send(JSON.stringify(rows))
    })
}

exports.guestToSpeaker = (req, res, next) => {
    let ID = req.params.ID
    const category = "talk"
    console.log(ID)
    let sql = `UPDATE users
           SET category = ?
           WHERE ID = ?`;

    let data = [category, ID];
    con.query(sql,data, (err, rows) => {
        if (err) throw err;
        console.log('Data received from Db:\n');
        console.log(rows);
        res.status(200).send({message: "change attendee to talker successfull"})
    })
}

exports.removeSpeaker = (req, res, next) => {
    let ID = req.params.ID
    var sql = `DELETE FROM users WHERE ID = ${ID}` ;  
    con.query(sql, (err, rows) => {
        if (err) throw err;
        console.log('Data received from Db:\n');
        console.log(rows);
        res.status(200).send({message: "deleted row successfull"})
    })
}