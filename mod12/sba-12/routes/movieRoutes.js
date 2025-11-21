const express = require('express');

const movieRouter = express.Router();

// Routes

/**
 * GET /api/movies/
 */
movieRouter.get('/', (req, res) => {
    res.send('Sending all movies...')
});

// TODO: =============  

/**
 * GET /api/movies/search
 */
movieRouter.get('/search', (req, res) => {
    res.send('Searching...')
});

/**
 * GET /api/movies/:id
 */
movieRouter.get('/:id', (req, res) => {
    res.send(`Data for movie: ${req.params.id}`);
});






module.exports = movieRouter