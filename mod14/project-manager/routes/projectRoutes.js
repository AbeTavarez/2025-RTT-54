const express = require("express");
const { authMiddleware } = require("../middlewares/auth");
const Project = require("../models/Project");

const projectRouter = express.Router();

// Protects all rotes in this router
projectRouter.use(authMiddleware);

/**
 * GET /api/projects
 */
projectRouter.get("/", async (req, res) => {
  try {
    const userProjects = await Project.find({ user: req.user._id });

    res.json(userProjects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

/**
 * GET /api/projects/:projectId
 */
projectRouter.get("/:projectId", async (req, res) => {
  res.send("sending all projects....");
});

/**
 * POST /api/projects
 */
projectRouter.post("/", async (req, res) => {
  res.send("create project....");
});

/**
 * PUT /api/projects/projectId
 */
projectRouter.put("/:projectId", async (req, res) => {
  res.send("update project....");
});

/**
 * DELETE /api/projects/projectId
 */
projectRouter.delete("/:projectId", async (req, res) => {
  res.send("delete project....");
});

module.exports = projectRouter;
