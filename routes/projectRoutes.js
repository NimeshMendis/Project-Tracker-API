const express = require("express");
const router = express.Router();
const { getProjects, createProject, getProject, updateProject, deleteProject } = require("../controllers/projectController")
const validateToken = require("../middleware/validateTokenHandler");


router.use(validateToken);

router.route("/").get(getProjects).post(createProject);

router.route("/:id").get(getProject).put(updateProject).delete(deleteProject);



module.exports = router;