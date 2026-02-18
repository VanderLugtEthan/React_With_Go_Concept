import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css'
import header from './style/SiteHeader.module.css'
import bucher from './images/bucher.png'

// Sub elements to load into the router. This will allow the main page to understand where to go on the application
import Sub from './pages/Sub.jsx';
import GoReact from './pages/GoReact.jsx'
import About from './pages/About.jsx';

// The main element to load straight into the router. You can use methods on the same jsx file.
function Main() {
    const [count, setCount] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8080/api/hello')
        .then((response) => response.json())
        .then((data) => setCount(data))
        .catch((error) => console.error('Error fetching count:', error))
    }, [])

    return (
        <div>
            <h1>
                Welcome to the Root page! <br/>
                {JSON.stringify(count)}!
            </h1>
        </div>
    )
}

function App() {
  return (
  <Router>
    {/* This header will show up on all pages */}
    <div className={header.pageHeader}>
      <img src={bucher} className={header.headerLogo} alt="Bucher Hydraulics"/>
      <div className={header.navigator}>
        <Link to="/">
          Home
        </Link>
      </div>
      
      <div className={header.navigator}>
        <Link to="/GoReact">
          Guides
        </Link>
      </div>

      <div className={header.navigator}>
        <Link to="/About">
          About Me
        </Link>
      </div>
      
    </div>
    
    {/* Routes specify the actual logic behind accessing compontents on a page. All routes should go here (even nested ones) */}
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/Sub' element={<Sub />} />
      <Route path='/GoReact' element={<GoReact />} />
      <Route path='/About' element={<About />} />
    </Routes>
  </Router>
  )
}

export default App
