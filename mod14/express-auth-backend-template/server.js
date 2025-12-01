const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')

// Set up all variables in the .env file
require('dotenv').config();


// Database Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Successfully connected to MongoDB!'))
.catch(err => console.error('Connection error', err));


const PORT = process.env.PORT || 4000;
const app = express();


// ========= Middlewares =================
app.use(morgan('dev')); // logger
app.use(express.json()); // body parser

// ========= Routes ======================
app.use('/api/user', require('./routes/userRoutes'));

// Use this route to setup the API documentation
app.get('/', (req, res) => {
    res.send('Welcome to my API!');
});

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
});