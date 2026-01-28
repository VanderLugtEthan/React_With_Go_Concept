
function Sub() { 
    
    // Called once the component is mounted.
    const [count, setCount] = useState(null)
    
    // Communicate with the Go backend to run an api stored on it.
    useEffect(() => {
        fetch('http://localhost:8080/selectprinters')
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

export default Sub;