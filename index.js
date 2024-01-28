const express = require("express");
const app = express();
const dotenv = require("dotenv").config();

// const port = process.env.PORT;
const port = 5001;

app.use("/api/contacts", require("./routes/contactRoutes"));

app.listen(port, () => {
    console.log("Server running on " + port);
})
