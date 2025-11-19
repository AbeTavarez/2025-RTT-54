const express = require("express");

const PORT = 4000;

const app = express();

// ===== Middlewares ==========
app.use(express.json());

// Global
app.use((req, res, next) => {
  console.log(`
| Request received path: ${req.url} | 
| Method ${req.method} | 
| Timestamp: ${new Date().toISOString()} |`);
  next();
});

// This is another global middleware.
app.use((req, res, next) => {
  console.log("Middleware 2: Just checking in!");
  next();
});

// Admin middleware
app.use("/admin", (req, res, next) => {
  if (req.query.user === "admin") {
    console.log("Access granted");
    next();
  } else {
    res.status(401).send("Admin only!");
  }
});


app.use('/api', (req, res, next) => {
    if(req.headers['x-api-key'] === 'supersecretkey') {
        next()
    } else {
        res.status(401).send('API required!');
    }
});

// ===== Routes =====
app.get("/", (req, res) => {
  res.send("<h1>My API Docs!</h1>");
});

app.post("/products", (req, res) => {
  console.log(req.body);
  res.send(`Created new products with`);
});

/**
 * GET /api/user (protected by API keys)
 */
app.get('/api/user', (req, res) => {
    res.send('Sending private API data')
});



/**
 * GET /admin (protected)
 */
app.get("/admin/dashboard", (req, res) => {
  res.send("Admin Dashboard");
});

app.get("/products", (req, res) => {
  res.send("Sending all products...");
});

app.get("/products/:productId", (req, res) => {
  console.log(req.params);
  res.send(`Sending data for product with id: ${req.params.productId}`);
});

app.get("/api/products", (req, res) => {
  console.log(req.query);

  const { category, minPrice } = req.query;

  if (!category && !minPrice) {
    return res.send("Sending all products!");
  }

  res.send(
    `Searching for products in category ${category} with a minimum price of ${minPrice}`,
  );
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
