import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const practicals = [
    { id: 1, title: 'Practical 1', description: 'Navigation between multiple components' },
    { id: 2, title: 'Practical 2', description: 'Counter Application' },
    { id: 3, title: 'Practical 3', description: 'Addition Calculator' },
    { id: 4, title: 'Practical 4', description: 'Todo Application' },
    { id: 5, title: 'Practical 5', description: 'Signup Form with LocalStorage' },
    { id: 6, title: 'Practical 6', description: 'Product Card with API' },
    { id: 7, title: 'Practical 7', description: 'Express Server with Routing' },
    { id: 8, title: 'Practical 8', description: 'Express POST with EJS' },
    { id: 9, title: 'Practical 9', description: 'CRUD with MongoDB' },
    { id: 10, title: 'Practical 10', description: 'Product API with React' }
  ]

  return (
    <div className="home-container">
      <h1>MERN Stack Practicals</h1>
      <p className="subtitle">Select a practical to view</p>
      <div className="practicals-grid">
        {practicals.map((practical) => (
          <Link 
            key={practical.id} 
            to={`/practical${practical.id}`} 
            className="practical-card"
          >
            <div className="practical-number">{practical.id}</div>
            <h3>{practical.title}</h3>
            <p>{practical.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
