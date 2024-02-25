const express = require("express");
const asyncHandler = require("express-async-handler");
const validateToken = require("../middleware/validateTokenHandler");

const { registerUser, loginUser, currentUser } = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", validateToken, currentUser);

// router.post("/login", loginUser);

module.exports = router;