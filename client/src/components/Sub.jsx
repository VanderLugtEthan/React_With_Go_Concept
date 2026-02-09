import { useState, useEffect } from 'react';
import '../style/Sub.css';

// Sub component to be loaded into the router.
function Sub() { 
    
    // Called once the component is mounted.
    const [printers, setPrinters] = useState([])
    
    // Communicate with the Go backend to run an api stored on it.
    useEffect(() => {
        fetch('http://localhost:8080/api/selectprinters')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setPrinters(data)
        })
        .catch((error) => console.error('Error fetching printers:', error))
    }, [])

    // Return simple HTML code t
    // o the main page.
    return (
        <div>
            <h1>
                Welcome to the Sub page!
            </h1>
            {printers.length > 0 ? (
                    <ul>
                    {printers.map((printer) => (
                        <li key={printer.id} className="list">
                            <p>
                                {printer.UserID}
                                {printer.Computername}
                                {printer.printerType}
                                {printer.printerName}
                                {printer.plantLocation}
                                {printer.notes}
                            </p>
                        </li>
                    ))}
                    </ul>
                ) : (
                    <p>No printers found.</p>
                )}
        </div>
    )
}

export default Sub;