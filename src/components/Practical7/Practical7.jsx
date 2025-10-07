import { useNavigate } from 'react-router-dom'
import './Practical7.css'

const Practical7 = () => {
  const navigate = useNavigate()

  return (
    <div className="practical-container">
      <div className="practical-header">
        <h1 className="practical-title">Practical 7: Express Server with Routing</h1>
        <button className="back-button" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>
      
      <div className="practical-content">
        <div className="backend-info">
          <h2>Backend Setup Instructions</h2>
          <p>This practical requires a Node.js/Express backend server.</p>
          
          <div className="steps">
            <h3>Setup Steps:</h3>
            <ol>
              <li>Navigate to the <code>backend</code> folder</li>
              <li>Run <code>npm install</code> to install dependencies</li>
              <li>Run <code>npm run dev</code> to start the server</li>
              <li>Server will run on <code>http://localhost:5000</code></li>
            </ol>
          </div>

          <div className="routes-info">
            <h3>Available Routes:</h3>
            <ul>
              <li><strong>GET /</strong> - Home route</li>
              <li><strong>GET /about</strong> - About route</li>
              <li><strong>GET /contact</strong> - Contact route</li>
              <li><strong>GET /api/users</strong> - Get all users (API)</li>
              <li><strong>GET /api/products</strong> - Get all products (API)</li>
            </ul>
          </div>

          <div className="test-section">
            <h3>Test the Backend:</h3>
            <p>Once the server is running, open these URLs in your browser:</p>
            <ul>
              <li><a href="http://localhost:5000" target="_blank" rel="noopener noreferrer">http://localhost:5000</a></li>
              <li><a href="http://localhost:5000/about" target="_blank" rel="noopener noreferrer">http://localhost:5000/about</a></li>
              <li><a href="http://localhost:5000/api/users" target="_blank" rel="noopener noreferrer">http://localhost:5000/api/users</a></li>
            </ul>
          </div>

          <div className="code-reference">
            <h3>Backend Code Location:</h3>
            <p>Check the <code>backend/practical7-server.js</code> file for the implementation.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Practical7
