const express = require("express");
const path = require('path');

const app = express();

const PORT = 4000;

// ===== Middlewares =============
app.use(express.static(path.join(__dirname, 'public')));

// ===== Routes ==================

/**
 * GET / send back a hello message
 */
app.get("/", (request, response) => {
  console.log("\n URL: " + request.url);

  console.log("\n Method: " + request.method);
  
  console.log("\n Headers: ");
  console.log(request.headers);
  
  console.log("\n Params: ");
  console.log(request.params);
  
  console.log("\n Query: ");
  console.log(request.query);
  

//   response.send("<h1>Hello from Express!</h1>");
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
