import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Practical5.css'

const Practical5 = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    age: ''
  })
  const [errors, setErrors] = useState({})
  const [submittedUsers, setSubmittedUsers] = useState([])
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('signupUsers')
    if (stored) {
      setSubmittedUsers(JSON.parse(stored))
    }
  }, [])

  const validateForm = () => {
    const newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    } else if (formData.fullName.length < 3) {
      newErrors.fullName = 'Name must be at least 3 characters'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    const phoneRegex = /^[0-9]{10}$/
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required'
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Phone must be 10 digits'
    }

    if (!formData.age) {
      newErrors.age = 'Age is required'
    } else if (formData.age < 18 || formData.age > 100) {
      newErrors.age = 'Age must be between 18 and 100'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      const newUser = {
        id: Date.now(),
        ...formData,
        registeredAt: new Date().toLocaleString()
      }
      delete newUser.confirmPassword

      const updatedUsers = [...submittedUsers, newUser]
      setSubmittedUsers(updatedUsers)
      localStorage.setItem('signupUsers', JSON.stringify(updatedUsers))

      setShowSuccess(true)
      setFormData({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        age: ''
      })

      setTimeout(() => setShowSuccess(false), 3000)
    }
  }

  const deleteUser = (id) => {
    const updatedUsers = submittedUsers.filter(user => user.id !== id)
    setSubmittedUsers(updatedUsers)
    localStorage.setItem('signupUsers', JSON.stringify(updatedUsers))
  }

  return (
    <div className="practical-container">
      <div className="practical-header">
        <h1 className="practical-title">Practical 5: Signup Form with LocalStorage</h1>
        <button className="back-button" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>
      
      <div className="practical-content">
        <div className="signup-layout">
          <div className="form-section">
            <h2>Sign Up</h2>
            {showSuccess && (
              <div className="success-message">
                ✓ User registered successfully!
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="signup-form">
              <div className="form-field">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
                {errors.fullName && <span className="error">{errors.fullName}</span>}
              </div>

              <div className="form-field">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>

              <div className="form-field">
                <label>Password *</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                />
                {errors.password && <span className="error">{errors.password}</span>}
              </div>

              <div className="form-field">
                <label>Confirm Password *</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                />
                {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
              </div>

              <div className="form-field">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10 digit phone number"
                />
                {errors.phone && <span className="error">{errors.phone}</span>}
              </div>

              <div className="form-field">
                <label>Age *</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Enter your age"
                />
                {errors.age && <span className="error">{errors.age}</span>}
              </div>

              <button type="submit" className="submit-btn">
                Sign Up
              </button>
            </form>
          </div>

          <div className="users-section">
            <h2>Registered Users ({submittedUsers.length})</h2>
            <div className="users-list">
              {submittedUsers.length === 0 ? (
                <p className="empty-message">No users registered yet</p>
              ) : (
                submittedUsers.map(user => (
                  <div key={user.id} className="user-card">
                    <div className="user-info">
                      <h3>{user.fullName}</h3>
                      <p>📧 {user.email}</p>
                      <p>📱 {user.phone}</p>
                      <p>🎂 {user.age} years</p>
                      <p className="registered-time">Registered: {user.registeredAt}</p>
                    </div>
                    <button 
                      className="delete-user-btn"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Practical5
