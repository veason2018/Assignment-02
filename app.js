const express = require('express');
const cors = require('cors');
const productController = require('./controllers/productController'); // Import the product controller
const app = express();

// Enable CORS
app.use(cors());

// Middleware for JSON parsing
app.use(express.json());

// Define a route for the home page
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to DressStore application.' });
});

// Get all products
app.get('/api/products', productController.getProducts);

// Get product by ID
app.get('/api/products/:id', productController.getProductById);

// Add new product
app.post('/api/products', productController.addProduct);

// Update product by ID
app.put('/api/products/:id', productController.updateProduct);

// Remove product by ID
app.delete('/api/products/:id', productController.removeProduct);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
