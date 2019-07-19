const express = require("express");
const app = express();
var cors = require('cors');
const admin = require("./routes/admin")
const user = require("./routes/user")
const bodyParser = require("body-parser")
const path = require('path')
const PORT = 3000;

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static("public"))

app.set('view engine', 'ejs')

app.use("/v1/admin", admin)
app.use("/v1/user", user)

app.use("/", (req, res, next)=>{
    console.log("404 error page ")
    res.status(404).send("<h1>404 error, page not found<h1>")
})

app.listen(PORT, ()=>{
    console.log(`app running att port ${PORT}`)
})