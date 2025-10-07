import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Practical1 from './components/Practical1/Practical1'
import Practical2 from './components/Practical2/Practical2'
import Practical3 from './components/Practical3/Practical3'
import Practical4 from './components/Practical4/Practical4'
import Practical5 from './components/Practical5/Practical5'
import Practical6 from './components/Practical6/Practical6'
import Practical7 from './components/Practical7/Practical7'
import Practical8 from './components/Practical8/Practical8'
import Practical9 from './components/Practical9/Practical9'
import Practical10 from './components/Practical10/Practical10'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/practical1/*" element={<Practical1 />} />
        <Route path="/practical2" element={<Practical2 />} />
        <Route path="/practical3" element={<Practical3 />} />
        <Route path="/practical4" element={<Practical4 />} />
        <Route path="/practical5" element={<Practical5 />} />
        <Route path="/practical6" element={<Practical6 />} />
        <Route path="/practical7" element={<Practical7 />} />
        <Route path="/practical8" element={<Practical8 />} />
        <Route path="/practical9" element={<Practical9 />} />
        <Route path="/practical10" element={<Practical10 />} />
      </Routes>
    </Router>
  )
}

export default App
