# MERN Stack Practicals - Complete Guide

A comprehensive MERN (MongoDB, Express.js, React.js, Node.js) stack application with 10 practical implementations.

## 📋 Project Structure

```
Practical/
├── src/                      # React Frontend
│   ├── components/
│   │   ├── Home.jsx         # Main navigation screen
│   │   ├── Practical1/      # Multi-component navigation
│   │   ├── Practical2/      # Counter application
│   │   ├── Practical3/      # Addition calculator
│   │   ├── Practical4/      # Todo application
│   │   ├── Practical5/      # Signup form with LocalStorage
│   │   ├── Practical6/      # Product Card with API
│   │   ├── Practical7/      # Express routing info
│   │   ├── Practical8/      # Express POST with EJS
│   │   ├── Practical9/      # CRUD with MongoDB
│   │   └── Practical10/     # Product API with React
│   ├── App.jsx
│   └── main.jsx
│
└── backend/                  # Express Backend
    ├── models/
    │   ├── Item.js          # Item model for Practical 9
    │   └── Product.js       # Product model for Practical 10
    ├── routes/
    │   ├── practical7.js    # Basic routing
    │   ├── practical8.js    # POST with EJS
    │   ├── practical9.js    # CRUD operations
    │   └── practical10.js   # Product API
    ├── views/
    │   └── calculator.ejs   # EJS template
    ├── server.js            # Main server file
    ├── package.json
    └── .env
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Frontend Setup

1. Install dependencies:
```bash
npm install
```

2. Start the React development server:
```bash
npm run dev
```

3. Open browser at `http://localhost:5173`

### Backend Setup

1. Navigate to backend folder:
```bash
cd backend
```

2. Install backend dependencies:
```bash
npm install
```

3. Make sure MongoDB is running:
- **Local MongoDB**: `mongod` (default port: 27017)
- **MongoDB Atlas**: Update connection string in `.env`

4. Start the backend server:
```bash
npm run dev
```

5. Backend will run at `http://localhost:5000`

## 📚 Practical Descriptions

### ✅ Practical 1: Multi-Component Navigation
- Implements React Router for navigation
- Multiple components (Home, About, Contact, Services)
- Nested routing demonstration

### ✅ Practical 2: Counter Application
- State management with `useState`
- Increment, Decrement, and Reset functionality
- Clean UI with styled buttons

### ✅ Practical 3: Addition Calculator
- Form handling in React
- Two number inputs with addition operation
- Real-time result display

### ✅ Practical 4: Todo Application
- Complete todo management
- Add, delete, and toggle completion
- Statistics tracking (total, completed, pending)
- LocalStorage for persistence (optional)

### ✅ Practical 5: Signup Form with LocalStorage
- Form validation (name, email, password, phone, age)
- Password confirmation matching
- Data persistence in LocalStorage
- Display registered users
- Delete user functionality

### ✅ Practical 6: Product Card with API
- Fetch data from external API (FakeStore API)
- Display products in card layout
- Loading states and error handling
- Responsive grid design

### ✅ Practical 7: Express Server with Routing
- Basic Express server setup
- Multiple routes (/, /about, /contact)
- API endpoints (/api/users, /api/products)
- JSON responses

**Test Routes:**
```bash
GET http://localhost:5000/
GET http://localhost:5000/about
GET http://localhost:5000/contact
GET http://localhost:5000/api/users
GET http://localhost:5000/api/sample-products
```

### ✅ Practical 8: Express POST with EJS
- POST request handling
- EJS template rendering
- Calculator with multiple operations
- Both API and EJS responses

**Test Routes:**
```bash
GET http://localhost:5000/calculator (EJS page)
POST http://localhost:5000/calculate (JSON API)
POST http://localhost:5000/calculate-ejs (EJS render)
```

### ✅ Practical 9: CRUD with MongoDB
- Full CRUD operations
- MongoDB integration with Mongoose
- Item management (Create, Read, Update, Delete)
- RESTful API design

**API Endpoints:**
```bash
POST   http://localhost:5000/api/items
GET    http://localhost:5000/api/items
GET    http://localhost:5000/api/items/:id
PUT    http://localhost:5000/api/items/:id
DELETE http://localhost:5000/api/items/:id
```

### ✅ Practical 10: Product API with React Frontend
- Complete product management system
- React frontend with Axios
- MongoDB backend with Express
- Full CRUD operations
- Product attributes: name, description, price, category, stock

**API Endpoints:**
```bash
POST   http://localhost:5000/api/products
GET    http://localhost:5000/api/products
GET    http://localhost:5000/api/products/:id
PUT    http://localhost:5000/api/products/:id
DELETE http://localhost:5000/api/products/:id
```

## 🛠️ Technologies Used

### Frontend
- React.js 18
- React Router DOM
- Axios
- Vite
- CSS3

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS
- CORS
- dotenv

## 📝 Environment Variables

Create a `.env` file in the `backend` folder:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mern-practicals
```

For MongoDB Atlas:
```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/mern-practicals
```

## 🧪 Testing the Application

### Frontend Testing
1. Start React dev server: `npm run dev`
2. Navigate to `http://localhost:5173`
3. Click on any practical button to test

### Backend Testing
1. Start backend server: `cd backend && npm run dev`
2. Use browser or Postman to test endpoints
3. MongoDB must be running for Practicals 9 & 10

### Testing with Postman

**Create Item (Practical 9):**
```json
POST http://localhost:5000/api/items
Body: {
  "name": "Laptop",
  "description": "High-performance laptop",
  "price": 999.99
}
```

**Create Product (Practical 10):**
```json
POST http://localhost:5000/api/products
Body: {
  "name": "iPhone 15",
  "description": "Latest iPhone model",
  "price": 999,
  "category": "Electronics",
  "stock": 50
}
```

## 🐛 Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running: `mongod`
- Check connection string in `.env`
- For MongoDB Atlas, whitelist your IP address

### CORS Error
- Backend includes CORS middleware
- If issues persist, check backend server is running

### Port Already in Use
- Frontend: Change port in `vite.config.js`
- Backend: Change PORT in `.env` file

### Module Not Found
```bash
# Frontend
npm install

# Backend
cd backend && npm install
```

## 📦 Building for Production

### Frontend Build
```bash
npm run build
```

### Backend Production
```bash
cd backend
npm start
```

## 👨‍💻 Development

### Frontend Development
```bash
npm run dev
```

### Backend Development (with auto-reload)
```bash
cd backend
npm run dev
```

## 🎓 Learning Outcomes

After completing these practicals, you will understand:
- React.js fundamentals and hooks
- React Router for navigation
- State management with useState
- API integration with Axios
- Express.js server setup
- RESTful API design
- MongoDB CRUD operations
- EJS template rendering
- Full-stack application architecture
- CORS and middleware concepts

## 📄 License

This project is created for educational purposes.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements!

## 📞 Support

For issues or questions, please create an issue in the repository.

---

**Happy Coding! 🚀**
#   F S W D _ P r a c t i c a l _ f i l e  
 