const asyncHandler = require("express-async-handler");
const Project = require("../models/projectModel")


//@DESC Get all projects
//@route GET /api/projects
//@access public
const getProjects = asyncHandler(async (req,res) => {
    const projects = await Project.find();
    res.status(200).json(projects);
});


//@DESC Create a project
//@route POST /api/projects
//@access public
const createProject = asyncHandler(async (req,res) => {
    console.log("The request body is:", req.body)
    const {name, manager, description, progress} = req.body;
    if(!name || !manager || !description || !progress){
        res.status(400);
        throw new Error("Please input all fields");
    }
    const project = await Project.create({
        name,
        manager,
        description,
        progress
    });

    res.status(200).json(project);
});


//@DESC Get a project
//@route GET /api/projects/:id
//@access public
const getProject = asyncHandler(async (req,res) => {
    const project = await Project.findById(req.params.id);
    if(!project){
        res.status(404);
        throw new Error("Project with Id not found!");
    }
    res.status(200).json(project);
});

//@DESC Update a project
//@route PUT /api/projects/:id
//@access public
const updateProject = asyncHandler(async (req,res) => {
    const project = await Project.findById(req.params.id);
    if (!project) {
        res.status(404);
        throw new Error("Contact not found");
    }

    const updatedProject = await Project.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.status(200).json(updatedProject);
});


//@DESC Delete a project
//@route DELETE /api/projects/:id
//@access public
const deleteProject = asyncHandler(async (req,res) => {
    const project = await Project.findById(req.params.id);
    if(!project){
        res.status(404);
        throw new Error("Project with Id not found!");
    }
    await Project.deleteOne({ _id: req.params.id });
    res.status(200).json(project);
});

module.exports = { getProjects, createProject, getProject, updateProject, deleteProject }
