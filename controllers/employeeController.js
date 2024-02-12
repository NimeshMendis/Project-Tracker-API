const asyncHandler = require("express-async-handler");

//@DESC Get all Employees
//@route GET /api/employees
//@access public
const getEmployees = asyncHandler(async (req,res) => {
    res.status(200).json({ message: "Get all employees"});
});

//@DESC Create a Employee
//@route POST /api/employees
//@access public
const createEmployee = asyncHandler(async (req,res) => {
    console.log("The request body is:", req.body)
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("Please input all fields");
    }
    res.status(200).json({ message: "Create employee"});
});

//@DESC Get a Employee
//@route GET /api/employees/:id
//@access public
const getEmployee = asyncHandler(async (req,res) => {
    res.status(200).json({ message: "Get employee for " + req.params.id});
});

//@DESC Update a Employee 
//@route PUT /api/employees/:id
//@access public
const updateEmployee = asyncHandler(async (req,res) => {
    res.status(200).json({ message: "Update employee for " + req.params.id});
});

//@DESC Delete a Employee 
//@route DELETE /api/employee/:id
//@access public
const deleteEmployee = asyncHandler(async (req,res) => {
    res.status(200).json({ message: "Delete employee for " + req.params.id});
});

module.exports = { getEmployees, createEmployee, getEmployee, updateEmployee, deleteEmployee }
