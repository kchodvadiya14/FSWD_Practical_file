const express = require('express');
const router = express.Router();

// Practical 7: Basic Express server with routing

// Home Route
router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Express Server - Practical 7',
    description: 'Basic Node.js and Express server with routing',
    routes: [
      'GET /',
      'GET /about',
      'GET /contact',
      'GET /api/users',
      'GET /api/products'
    ]
  });
});

// About Route
router.get('/about', (req, res) => {
  res.json({
    page: 'About',
    message: 'This is the About page',
    description: 'Learn more about our MERN stack practicals',
    version: '1.0.0'
  });
});

// Contact Route
router.get('/contact', (req, res) => {
  res.json({
    page: 'Contact',
    message: 'Contact Us',
    email: 'contact@example.com',
    phone: '+1234567890',
    address: '123 Main Street, City, Country'
  });
});

// API Route - Users
router.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'Moderator' }
  ];
  
  res.json({
    success: true,
    count: users.length,
    data: users
  });
});

// API Route - Sample Products
router.get('/api/sample-products', (req, res) => {
  const products = [
    { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics' },
    { id: 2, name: 'Smartphone', price: 699.99, category: 'Electronics' },
    { id: 3, name: 'Headphones', price: 149.99, category: 'Accessories' },
    { id: 4, name: 'Keyboard', price: 79.99, category: 'Accessories' }
  ];
  
  res.json({
    success: true,
    count: products.length,
    data: products
  });
});

module.exports = router;
