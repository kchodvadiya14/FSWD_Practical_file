import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Practical2.css'

const Practical2 = () => {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)

  return (
    <div className="practical-container">
      <div className="practical-header">
        <h1 className="practical-title">Practical 2: Counter Application</h1>
        <button className="back-button" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>
      
      <div className="practical-content">
        <div className="counter-container">
          <div className="counter-display">
            <h2>Counter Value</h2>
            <div className="count-value">{count}</div>
          </div>
          
          <div className="counter-buttons">
            <button className="counter-btn increment" onClick={increment}>
              Increment
            </button>
            <button className="counter-btn reset" onClick={reset}>
              Reset
            </button>
            <button className="counter-btn decrement" onClick={decrement}>
              Decrement
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Practical2
