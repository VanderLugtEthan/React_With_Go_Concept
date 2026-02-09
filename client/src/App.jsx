import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css'

// Sub elements to load into the router. This will allow the main page to understand where to go on the application
import Sub from './components/Sub.jsx';
import GoReact from './components/GoReact.jsx'

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
    <div className="pageHeader">
      <h2>Application Header</h2>
      <button className="navigator">About Me</button>
      <button className="navigator">Resume</button>
      <nav>
        <Link to="/">
          <button className="navigator">Home</button>
        </Link>
        <Link to="/GoReact">
          <button className="navigator">Guides</button>
        </Link>

      </nav>
    </div>
    
    {/* Navigation Links enclosing buttons. Buttons are used to redirect the user to another page 
     <nav>
      <Link to="/" className='link'>
        <button className="navigator">Go to Root Page</button>
      </Link>
      <Link to="/Sub" className='link'>
        <button className="navigator">Go to Sub Page</button>
      </Link>
    </nav>
    */}
   
    
    {/* Routes specify the actual logic behind accessing compontents on a page. All routes should go here (even nested ones) */}
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/Sub' element={<Sub />} />
      <Route path='/GoReact' element={<GoReact />} />
    </Routes>
  </Router>
  )
}

export default App
