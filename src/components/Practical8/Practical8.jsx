import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Practical8.css'

const Practical8 = () => {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('http://localhost:5000/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ num1: parseFloat(num1), num2: parseFloat(num2) }),
      })

      const data = await response.json()
      
      if (response.ok) {
        setResult(data)
      } else {
        setError(data.error || 'Failed to calculate')
      }
    } catch (err) {
      setError('Server is not running. Please start the backend server.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="practical-container">
      <div className="practical-header">
        <h1 className="practical-title">Practical 8: Express POST with EJS</h1>
        <button className="back-button" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>
      
      <div className="practical-content">
        <div className="info-banner">
          <p>⚠️ Make sure the backend server is running on <code>http://localhost:5000</code></p>
          <p>Navigate to backend folder and run: <code>npm run dev</code></p>
        </div>

        <div className="calc-layout">
          <div className="form-container">
            <h2>Calculator Form</h2>
            <p className="description">Send numbers to Express backend via POST request</p>
            
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label>First Number:</label>
                <input
                  type="number"
                  value={num1}
                  onChange={(e) => setNum1(e.target.value)}
                  required
                  step="any"
                  placeholder="Enter first number"
                />
              </div>

              <div className="input-group">
                <label>Second Number:</label>
                <input
                  type="number"
                  value={num2}
                  onChange={(e) => setNum2(e.target.value)}
                  required
                  step="any"
                  placeholder="Enter second number"
                />
              </div>

              <button type="submit" disabled={loading} className="submit-btn">
                {loading ? 'Calculating...' : 'Calculate'}
              </button>
            </form>

            {error && (
              <div className="error-message">
                {error}
              </div>
            )}

            {result && (
              <div className="result-box">
                <h3>Result from Server:</h3>
                <div className="operations">
                  <p>Addition: <strong>{result.sum}</strong></p>
                  <p>Subtraction: <strong>{result.difference}</strong></p>
                  <p>Multiplication: <strong>{result.product}</strong></p>
                  <p>Division: <strong>{result.quotient}</strong></p>
                </div>
              </div>
            )}
          </div>

          <div className="info-panel">
            <h3>How it works:</h3>
            <ol>
              <li>React form sends POST request to Express server</li>
              <li>Express receives data and performs calculations</li>
              <li>Server sends JSON response back to React</li>
              <li>React displays the results</li>
            </ol>

            <h3>Backend Endpoint:</h3>
            <p className="endpoint">POST /calculate</p>
            
            <h3>View EJS Template:</h3>
            <p>Navigate to <code>http://localhost:5000/calculator</code> to see the EJS rendered page</p>
            <a 
              href="http://localhost:5000/calculator" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ejs-link"
            >
              Open EJS Page →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Practical8
