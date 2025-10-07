import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Practical3.css'

const Practical3 = () => {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [result, setResult] = useState(null)
  const navigate = useNavigate()

  const handleAddition = () => {
    const sum = parseFloat(num1) + parseFloat(num2)
    setResult(sum)
  }

  const handleReset = () => {
    setNum1('')
    setNum2('')
    setResult(null)
  }

  return (
    <div className="practical-container">
      <div className="practical-header">
        <h1 className="practical-title">Practical 3: Addition Calculator</h1>
        <button className="back-button" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>
      
      <div className="practical-content">
        <div className="calculator-container">
          <div className="input-group">
            <label>First Number:</label>
            <input
              type="number"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              placeholder="Enter first number"
            />
          </div>

          <div className="operator">+</div>

          <div className="input-group">
            <label>Second Number:</label>
            <input
              type="number"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              placeholder="Enter second number"
            />
          </div>

          <div className="calculator-buttons">
            <button 
              className="calc-btn add" 
              onClick={handleAddition}
              disabled={!num1 || !num2}
            >
              Calculate
            </button>
            <button className="calc-btn reset" onClick={handleReset}>
              Reset
            </button>
          </div>

          {result !== null && (
            <div className="result-display">
              <h3>Result:</h3>
              <div className="result-value">{result}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Practical3
