const express = require("express");
const morgan = require("morgan");

// Set up all variables in the .env file
require("dotenv").config();

//? ============ MONGO DB =========================
const { MongoClient, ObjectId } = require("mongodb");

// Replace this with your own connection string
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    await client.db("rtt-54").command({ ping: 1 });
    console.log("Connected successfully to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

run().catch(console.dir);
//? ============ MONGO DB =========================

const PORT = process.env.PORT || 4000;

const app = express();

// ========= Middlewares =================
app.use(morgan("dev")); // logger
app.use(express.json()); // body parser

// ========= Routes ======================
app.use("/api/user", require("./routes/userRoutes"));

/**
 * GET /api/songs
 * return a list of songs
 */
app.get("/api/songs", async (req, res) => {
  try {
    const { title } = req.query;

    if (title) {
      const cursor = await client
        .db("rtt-54")
        .collection("songs")
        .findOne({ title });

      console.log(cursor);

      return res.json(cursor);
    } else {
      // Query data from our collection
      const cursor = await client.db("rtt-54").collection("songs").find({});
      // Parse the data to an array
      const results = await cursor.toArray();
      // Send the data to the client
      res.json(results);
    }
  } catch (error) {
    console.error(error);
  }
});

/**
 * GET /api/songs/:id
 */
app.get("/api/songs/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const cursor = await client
      .db("rtt-54")
      .collection("songs")
      .find({ _id: new ObjectId(id) });

    const result = await cursor.toArray();

    console.log(result);

    res.json(result);
  } catch (error) {
    console.error(error);
  }
});

// app.get("/api/songs/", async (req, res) => {
//   try {
//     const { title } = req.query;
//     const cursor = await client
//       .db("rtt-54")
//       .collection("songs")
//       .findOne({ title });

//     console.log(cursor);

//     res.json(cursor);
//   } catch (error) {
//     console.error(error);
//   }
// });

// Use this route to setup the API documentation
app.get("/", (req, res) => {
  res.send("Welcome to my API!");
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
