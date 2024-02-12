const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const app = express();
const dotenv = require("dotenv").config();

// const port = process.env.PORT;
const port = 5001;

app.use(express.json());
app.use("/api/employees", require("./routes/employeeRoutes"));
app.use(errorHandler)

app.listen(port, () => {
    console.log("Server running on " + port);
})
