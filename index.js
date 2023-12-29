const express = require("express");
const app = express();
const dotenv = require("dotenv").config();

// const port = process.env.PORT;
const port = 5001;

app.get('/api/contacts', (req,res) => {
    res.send("Get all contacts!");
})

app.listen(port, () => {
    console.log("Server running on " + port);
})