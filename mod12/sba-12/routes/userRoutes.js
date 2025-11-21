const express = require("express");
const { getAllUsers, getUserById } = require("../controllers/userController");
// Router
const userRouter = express.Router();
/**
 * GET /user/
 */
userRouter.get("/", getAllUsers);
/**
 * GET /api/user/:id
 */
userRouter.get("/:id", getUserById);
module.exports = userRouter;