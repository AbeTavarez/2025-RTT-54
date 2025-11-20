const axios = require('axios');



const jphClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});


// Add a request interceptor to our instance
jphClient.interceptors.request.use(config => {
  // This function runs before any request is sent using githubClient
  console.log(`Sending request to: ${config.baseURL}${config.url}`);
  // You must always return the config object, otherwise the request will fail
  return config;
}, error => {
  // Handle request error
  return Promise.reject(error);
});


// Add a response interceptor
jphClient.interceptors.response.use(response => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  console.log('Received successful response!');
  // You can transform the response data here if needed
  return response;
}, error => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  console.error('An error occurred with the response.');
  // You can handle errors globally here
  return Promise.reject(error);
});


module.exports = jphClient