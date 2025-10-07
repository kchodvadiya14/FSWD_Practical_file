const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mern-practicals';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ MongoDB Connected Successfully'))
  .catch((err) => console.log('❌ MongoDB Connection Error:', err));

// Import Routes
const practical7Routes = require('./routes/practical7');
const practical8Routes = require('./routes/practical8');
const practical9Routes = require('./routes/practical9');
const practical10Routes = require('./routes/practical10');

// Use Routes
app.use('/', practical7Routes);           // Practical 7: Basic routing
app.use('/', practical8Routes);           // Practical 8: POST with EJS
app.use('/api/items', practical9Routes);  // Practical 9: CRUD operations
app.use('/api/products', practical10Routes); // Practical 10: Product API

// Default Route
app.get('/test', (req, res) => {
  res.json({ 
    message: 'Backend server is running!',
    practicals: {
      practical7: 'GET /, /about, /contact, /api/users, /api/products',
      practical8: 'POST /calculate, GET /calculator',
      practical9: 'CRUD /api/items',
      practical10: 'CRUD /api/products'
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📝 Available endpoints:`);
  console.log(`   - http://localhost:${PORT}/`);
  console.log(`   - http://localhost:${PORT}/api/items`);
  console.log(`   - http://localhost:${PORT}/api/products`);
  console.log(`   - http://localhost:${PORT}/calculator`);
});
