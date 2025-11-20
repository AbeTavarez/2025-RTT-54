const axios = require('axios');


const ufClient = axios.create({
 baseURL: ''
});


module.exports = ufClient;