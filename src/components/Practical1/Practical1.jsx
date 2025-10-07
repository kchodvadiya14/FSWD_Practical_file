import { Routes, Route, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './Practical1.css'

const Home1 = () => (
  <div className="component-box">
    <h2>Home Component</h2>
    <p>This is the Home component. Navigate to other components using the navigation menu above.</p>
  </div>
)

const About = () => (
  <div className="component-box">
    <h2>About Component</h2>
    <p>This is the About component. Learn more about this practical here.</p>
  </div>
)

const Contact = () => (
  <div className="component-box">
    <h2>Contact Component</h2>
    <p>This is the Contact component. Feel free to reach out!</p>
  </div>
)

const Services = () => (
  <div className="component-box">
    <h2>Services Component</h2>
    <p>This is the Services component. Check out our services.</p>
  </div>
)

const Practical1 = () => {
  const navigate = useNavigate()

  return (
    <div className="practical-container">
      <div className="practical-header">
        <h1 className="practical-title">Practical 1: Navigation Between Components</h1>
        <button className="back-button" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>
      
      <div className="practical-content">
        <nav className="nav-menu">
          <Link to="/practical1" className="nav-link">Home</Link>
          <Link to="/practical1/about" className="nav-link">About</Link>
          <Link to="/practical1/contact" className="nav-link">Contact</Link>
          <Link to="/practical1/services" className="nav-link">Services</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </div>
  )
}

export default Practical1
