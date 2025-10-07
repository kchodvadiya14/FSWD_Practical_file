# 🎯 MERN Stack Practicals - Implementation Guide

## ✨ Project Overview

This project contains **10 complete MERN stack practicals** demonstrating various concepts from basic React components to full-stack applications with MongoDB integration.

## 📊 Implementation Status

| # | Practical | Technology | Status | Features |
|---|-----------|------------|--------|----------|
| 1 | Multi-Component Navigation | React Router | ✅ Complete | Nested routing, multiple pages |
| 2 | Counter Application | React useState | ✅ Complete | Increment, decrement, reset |
| 3 | Addition Calculator | React Forms | ✅ Complete | Two-number addition |
| 4 | Todo Application | React State | ✅ Complete | Add, delete, toggle, statistics |
| 5 | Signup Form | LocalStorage | ✅ Complete | Validation, persistence, CRUD |
| 6 | Product Cards | External API | ✅ Complete | Fetch from FakeStore API |
| 7 | Express Routing | Express.js | ✅ Complete | Multiple routes, JSON responses |
| 8 | POST with EJS | Express + EJS | ✅ Complete | Form handling, template rendering |
| 9 | CRUD Operations | Express + MongoDB | ✅ Complete | Full CRUD with Mongoose |
| 10 | Product API | Full Stack MERN | ✅ Complete | React + Express + MongoDB |

## 🚀 Running the Application

### Option 1: Full Stack (All Practicals)

**Terminal 1 - Frontend:**
```bash
npm run dev
```

**Terminal 2 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 3 - MongoDB:**
```bash
mongod
```

### Option 2: Frontend Only (Practicals 1-6)

Only need to run:
```bash
npm run dev
```

## 📱 Accessing the Practicals

1. Open browser: `http://localhost:5173`
2. You'll see a beautiful home screen with 10 colored cards
3. Click any practical button to navigate
4. Use "Back to Home" button to return to main screen

## 🎨 UI Features

- **Gradient Card Design**: Each practical has a unique gradient color
- **Hover Effects**: Cards lift and animate on hover
- **Responsive Layout**: Grid adapts to screen size
- **Clean Navigation**: Easy back-and-forth navigation
- **Loading States**: Spinners and loading indicators
- **Error Handling**: User-friendly error messages

## 💾 Data Persistence

### LocalStorage (Practical 5)
- Signup form data persists in browser
- Survives page refresh
- Can view/delete registered users

### MongoDB (Practicals 9 & 10)
- Items and Products stored in database
- Persistent across server restarts
- Full CRUD operations available

## 🔌 API Endpoints Reference

### Practical 7 - Basic Routing
```
GET  http://localhost:5000/
GET  http://localhost:5000/about
GET  http://localhost:5000/contact
GET  http://localhost:5000/api/users
GET  http://localhost:5000/api/sample-products
```

### Practical 8 - Calculator
```
GET  http://localhost:5000/calculator
POST http://localhost:5000/calculate
POST http://localhost:5000/calculate-ejs
```

### Practical 9 - CRUD Items
```
POST   http://localhost:5000/api/items
GET    http://localhost:5000/api/items
GET    http://localhost:5000/api/items/:id
PUT    http://localhost:5000/api/items/:id
DELETE http://localhost:5000/api/items/:id
```

### Practical 10 - Products API
```
POST   http://localhost:5000/api/products
GET    http://localhost:5000/api/products
GET    http://localhost:5000/api/products/:id
PUT    http://localhost:5000/api/products/:id
DELETE http://localhost:5000/api/products/:id
```

## 📚 Code Structure

### Frontend Components
```
src/components/
├── Home.jsx              # Main navigation hub
├── Practical1/
│   ├── Practical1.jsx    # Component with nested routes
│   └── Practical1.css
├── Practical2/
│   ├── Practical2.jsx    # Counter logic
│   └── Practical2.css
... (and so on)
```

### Backend Structure
```
backend/
├── server.js             # Main Express server
├── routes/
│   ├── practical7.js     # Basic routing
│   ├── practical8.js     # POST & EJS
│   ├── practical9.js     # Items CRUD
│   └── practical10.js    # Products CRUD
├── models/
│   ├── Item.js           # Mongoose Item schema
│   └── Product.js        # Mongoose Product schema
└── views/
    └── calculator.ejs    # EJS template
```

## 🧪 Testing Guide

### Testing Practicals 1-6 (Frontend Only)
1. Start React dev server
2. Click through each practical
3. Test all interactive features
4. Check responsive design

### Testing Practical 7
1. Start backend server
2. Open in React app or test URLs directly in browser
3. Check JSON responses

### Testing Practical 8
1. Start backend server
2. Two ways to test:
   - React app: Form sends POST to `/calculate`
   - Browser: Visit `http://localhost:5000/calculator` for EJS page

### Testing Practical 9
1. Start backend AND MongoDB
2. Use React interface to:
   - Create items
   - View items list
   - Edit items
   - Delete items

### Testing Practical 10
1. Start backend AND MongoDB
2. Use React interface to:
   - Add products with all fields
   - View products grid
   - Delete products
   - Check stock status

## 🎓 Key Concepts Demonstrated

### React Concepts
- ✅ Functional Components
- ✅ React Hooks (useState, useEffect)
- ✅ React Router (BrowserRouter, Routes, Route, Link)
- ✅ Form Handling
- ✅ API Integration with Axios
- ✅ Conditional Rendering
- ✅ Component Styling
- ✅ Event Handling

### Express.js Concepts
- ✅ Server Setup
- ✅ Routing (GET, POST, PUT, DELETE)
- ✅ Middleware (CORS, body-parser)
- ✅ EJS Template Engine
- ✅ RESTful API Design
- ✅ Error Handling

### MongoDB Concepts
- ✅ Mongoose Schema Definition
- ✅ CRUD Operations
- ✅ Data Validation
- ✅ Database Connection
- ✅ Model Methods

### Full Stack Integration
- ✅ Frontend-Backend Communication
- ✅ CORS Configuration
- ✅ Async/Await Patterns
- ✅ Error Handling Across Stack
- ✅ Environment Variables

## 📝 Environment Configuration

**backend/.env:**
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mern-practicals
```

For MongoDB Atlas (cloud):
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mern-practicals
```

## 🐛 Troubleshooting

### "Cannot GET /" Error
- Backend server not running
- Solution: `cd backend && npm run dev`

### MongoDB Connection Failed
- MongoDB not running
- Solution: Start MongoDB service or check connection string

### CORS Error
- Backend not properly configured (already fixed in code)
- Ensure backend is running before frontend API calls

### Port 5173 Already in Use
- Another Vite dev server running
- Solution: Kill other process or change port in vite.config.js

### Module Not Found
- Dependencies not installed
- Solution: `npm install` in root and backend folders

## 🎯 Evaluation Checklist

- [x] **Practical 1**: Navigation working with 4+ components ✅
- [x] **Practical 2**: Counter with all three operations ✅
- [x] **Practical 3**: Addition calculator functional ✅
- [x] **Practical 4**: Todo app with all features ✅
- [x] **Practical 5**: Signup form with validation & storage ✅
- [x] **Practical 6**: Products fetched from external API ✅
- [x] **Practical 7**: Express server with multiple routes ✅
- [x] **Practical 8**: POST request with EJS rendering ✅
- [x] **Practical 9**: Full CRUD with MongoDB ✅
- [x] **Practical 10**: Product API integrated with React ✅

## 🎨 Design Highlights

- Modern gradient designs
- Smooth animations and transitions
- Responsive grid layouts
- Intuitive navigation
- Clean, professional UI
- Consistent color scheme
- Loading and error states

## 📦 Dependencies

**Frontend:**
- react: ^18.3.1
- react-router-dom: ^6.x
- axios: ^1.x
- vite: ^6.x

**Backend:**
- express: ^4.18.2
- mongoose: ^8.0.0
- cors: ^2.8.5
- ejs: ^3.1.9
- dotenv: ^16.3.1
- nodemon: ^3.0.1 (dev)

## 🚀 Production Deployment

### Frontend
```bash
npm run build
# Deploy 'dist' folder to hosting service
```

### Backend
```bash
cd backend
npm start
# Deploy to service like Heroku, Railway, or Render
```

### Database
- Use MongoDB Atlas for production
- Update MONGODB_URI in .env

## 👥 Credits

Created for MERN Stack practical demonstrations.

---

**All 10 Practicals are fully implemented and ready for testing!** 🎉
