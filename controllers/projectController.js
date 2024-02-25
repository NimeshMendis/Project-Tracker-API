const asyncHandler = require("express-async-handler");
const Project = require("../models/projectModel")


//@DESC Get all projects
//@route GET /api/projects
//@access public
const getProjects = asyncHandler(async (req,res) => {
    const projects = await Project.find({ user_id: req.user.id });
    res.status(200).json(projects);
});


//@DESC Create a project
//@route POST /api/projects
//@access private
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
        progress,
        user_id: req.user.id,
    });

    res.status(200).json(project);
});


//@DESC Get a project
//@route GET /api/projects/:id
//@access private
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
//@access private
const updateProject = asyncHandler(async (req,res) => {
    const project = await Project.findById(req.params.id);
    if (!project) {
        res.status(404);
        throw new Error("Contact not found");
    };

    if (project.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("You are not allowed to update this project");
    };

    const updatedProject = await Project.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.status(200).json(updatedProject);
});


//@DESC Delete a project
//@route DELETE /api/projects/:id
//@access private
const deleteProject = asyncHandler(async (req,res) => {
    const project = await Project.findById(req.params.id);
    if(!project){
        res.status(404);
        throw new Error("Project with Id not found!");
    };

    if (project.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("You are not allowed to delete this project");
    };

    await Project.deleteOne({ _id: req.params.id });
    res.status(200).json(project);
});

module.exports = { getProjects, createProject, getProject, updateProject, deleteProject }
