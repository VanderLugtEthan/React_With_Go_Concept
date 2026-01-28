import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css'

// The main element to load straight into the router. You can use methods on the same jsx file.
function Main() {
    const [count, setCount] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8080/hello')
        .then((response) => response.json())
        .then((data) => setCount(data))
        .catch((error) => console.error('Error fetching count:', error))
    }, [])

    return (
        <div>
            <h1>
                Welcome to the Root page! <br/>
                {count}!
            </h1>
        </div>
    )
}

function App() {
  return (
  <Router>
    <nav>
      <Link to="/">Go to Root Page</Link>
      <Link to="/Sub">Go to Sub Page</Link>
    </nav>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/Sub' element={<Sub />} />
    </Routes>
  </Router>
  )
}

export default App
