# 🚀 Quick Start Guide - MERN Practicals

## Complete Setup in 3 Steps

### Step 1: Start Frontend (React)
```bash
npm install
npm run dev
```
Frontend will run at: http://localhost:5173

### Step 2: Start Backend (Express + MongoDB)
```bash
cd backend
npm install
npm run dev
```
Backend will run at: http://localhost:5000

### Step 3: Start MongoDB
Make sure MongoDB is running on your system:
```bash
mongod
```

## ✅ What's Included

### Frontend Practicals (React)
1. **Practical 1**: Multi-component Navigation with React Router
2. **Practical 2**: Counter App (Increment, Decrement, Reset)
3. **Practical 3**: Addition Calculator with useState
4. **Practical 4**: Todo Application
5. **Practical 5**: Signup Form with Validation & LocalStorage
6. **Practical 6**: Product Cards with External API

### Backend Practicals (Express + MongoDB)
7. **Practical 7**: Express Server with Routing
8. **Practical 8**: Express POST with EJS Template
9. **Practical 9**: CRUD Operations with MongoDB
10. **Practical 10**: Product API with React Frontend (Full Stack)

## 📝 Important Notes

- **Practicals 1-6**: Work without backend (React only)
- **Practical 7-10**: Require backend server and MongoDB running
- **MongoDB**: Must be installed and running for Practicals 9 & 10

## 🔧 Testing Individual Practicals

### Frontend Only (1-6)
Just start the React dev server and click the practical buttons

### Backend Required (7-10)
1. Start MongoDB: `mongod`
2. Start backend: `cd backend && npm run dev`
3. Start frontend: `npm run dev`
4. Navigate to the practical

## 🌐 URLs
- React Frontend: http://localhost:5173
- Express Backend: http://localhost:5000
- EJS Calculator: http://localhost:5000/calculator

## 📦 Tech Stack
- **Frontend**: React 18, React Router, Axios, Vite
- **Backend**: Express.js, Node.js
- **Database**: MongoDB, Mongoose
- **Template Engine**: EJS
- **Styling**: CSS3

## 🐛 Common Issues

**Port already in use?**
- Kill process or change ports in config files

**MongoDB not connecting?**
- Check if MongoDB service is running
- Verify connection string in `backend/.env`

**Module not found?**
- Run `npm install` in both root and backend folders

## 🎓 For Evaluation
All 10 practicals are complete and functional. Each practical demonstrates specific MERN stack concepts as required.

---
Happy Coding! 🎉
