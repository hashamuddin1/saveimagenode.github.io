const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3004;
require("../src/db/conn");
const app = express();
const router = require("../src/routes/router")

//jab bhi postman k urlencoded may kam krege tw bodyparser.urlencoded extended false dena lazmi hay
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(router)

// app.get("/", (req, res) => {
//     res.send("THIS IS MY FIRST TASK")
// })

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING IN PORT ${PORT}`)
})