const express = require("express");
const axios = require("axios");
const jphClient = require("./clients/jphClient");

const PORT = 4000;

const app = express();

// ========= Middlewares ============
app.use(express.json()); // <--- parses incoming data in the body of the request

app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.path}`);
  next();
});

// ============= Routes ===========
app.get("/", (req, res) => {
  res.send("Root Route!");
});

/**
 * GET /api/comment
 *  Sends array of comments
 */
app.get("/api/comments", async (req, res) => {
  try {
    // Make request to 3rd party API
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments",
    );

    // Checks if response is NOT ok
    if (!response.ok) {
      throw new Error("Error fetching comments");
    }

    // Parse the data from the 3rd party API
    const data = await response.json();

    // Transform the data to just the data that we need
    const transformedComments = data.map(
      (comment) => `${comment.email} commented: ${comment.name}`,
    );

    // Send the transformed data to the frontend/client
    res.json(transformedComments);
  } catch (error) {
    console.error(error.message);
    // Send error response to frontend/client
    res.status(502).json({ error: "Error fetching comments" });
  }
});

app.get("/api/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );

    // Response is NOT ok (no message from the third party API)
    if (!response.status) {
      throw new Error(`Error fetching user with id: ${id}`);
    }

    // Got a message but the data/id was NOT found
    if (response.status === 404) {
      return res.status(404).json({ error: `User not found with id ${id}` });
    }

    const user = await response.json();

    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(502).json({ error: `Error fetching user with id ${id}` });
  }
});

/**
 * GET /api/users
 * Returns users array
 */
app.get("/api/users", async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/user",
    );

    res.json(response.data);
  } catch (error) {
    // console.log(error);

    // 400-500 range errors
    if (error.response) {
      console.log(
        "API Error:",
        error.response.status,
        error.response.data,
        error.message,
      );
      res
        .status(error.response.status)
        .json({ message: "Error fetching data from external API." });
    } else {
      console.error("Network Error:", error.message);
      res.status(500).json({ message: "A network error occurred." });
    }
  }
});

/**
 * POST /api/posts
 * Create a new post in the 3rd party API
 */
app.post("/api/posts", async (req, res) => {
  try {
    console.log("INCOMING DATA: ", req.body);

    const newPostData = req.body;

    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      newPostData,
    );

    res.status(201).json(response.data);
  } catch (error) {
    console.error("Error creating post:", error.message);
    res.status(500).json({ message: "Failed to create post." });
  }
});

/**
 * GET /api/todos
 * Returns an array of todos
 */
app.get("/api/todos", async (req, res) => {
  try {
    const response = await jphClient.get("/todos");
    
    res.json(response.data);
  } catch (error) {
    console.error("Error creating post:", error.message);
    res.status(500).json({ message: "Failed fetch todos." });
  }
});


/**
 * POST /api/todos
 * Create a new todo
 */
app.post("/api/todos", async (req, res) => {
  try {
    console.log('INCOMING DATA:', req.body);

    const newTodoData = req.body;
    
    const response = await jphClient.post("/todos", newTodoData);

     console.log(response.data);
     
    res.status(201).json(response.data);

  } catch (error) {
    console.error("Error creating post:", error.message);
    res.status(500).json({ message: "Failed fetch todos." });
  }
});





app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
