const express = require('express');
const morgan = require('morgan')

// Set up all VARIABLES IN THE .env file
require('dotenv').config();

const PORT = process.env.PORT || 4000;

const app = express()

// console.log(process.env.NODE_ENV);

// MIDDLEWARES
app.use(morgan('dev')); // logger
app.use(express.json()); // body parser

// ROUTES
app.use('/api/user', require('./routes/userRoutes'));
app.use('/api/movies', require('./routes/movieRoutes'));

// Use this route to setup the API documentation
app.get('/', (req, res) => {
    res.send('Welcome to my API!');
});

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`); 
});