const express = require('express');
const router = express.Router();

// Practical 8: Express POST with EJS

// GET route - Display calculator form
router.get('/calculator', (req, res) => {
  res.render('calculator', { 
    title: 'Calculator - Practical 8',
    result: null 
  });
});

// POST route - Calculate and display result
router.post('/calculate', (req, res) => {
  const { num1, num2 } = req.body;
  
  if (!num1 || !num2) {
    return res.status(400).json({ error: 'Please provide both numbers' });
  }

  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);

  if (isNaN(n1) || isNaN(n2)) {
    return res.status(400).json({ error: 'Please provide valid numbers' });
  }

  const result = {
    num1: n1,
    num2: n2,
    sum: n1 + n2,
    difference: n1 - n2,
    product: n1 * n2,
    quotient: n2 !== 0 ? (n1 / n2).toFixed(2) : 'Cannot divide by zero'
  };

  // Return JSON for API calls
  res.json(result);
});

// POST route with EJS rendering
router.post('/calculate-ejs', (req, res) => {
  const { num1, num2 } = req.body;
  
  if (!num1 || !num2) {
    return res.render('calculator', { 
      title: 'Calculator - Practical 8',
      result: null,
      error: 'Please provide both numbers'
    });
  }

  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);

  if (isNaN(n1) || isNaN(n2)) {
    return res.render('calculator', { 
      title: 'Calculator - Practical 8',
      result: null,
      error: 'Please provide valid numbers'
    });
  }

  const result = {
    num1: n1,
    num2: n2,
    sum: n1 + n2,
    difference: n1 - n2,
    product: n1 * n2,
    quotient: n2 !== 0 ? (n1 / n2).toFixed(2) : 'Cannot divide by zero'
  };

  res.render('calculator', { 
    title: 'Calculator - Practical 8',
    result,
    error: null
  });
});

module.exports = router;
