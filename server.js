const express = require("express");
const app = express();
const starDB = require("./src/config/star.json");
const cors = require('cors');
const bodyParser = require("body-parser");

const corsOtions = {
    origin: "*",
    Credentials: true
}

app.use(cors(corsOtions));

app.get("/api/stars", (req, res) => {
    res.send(starDB)
})

module.exports = app;


