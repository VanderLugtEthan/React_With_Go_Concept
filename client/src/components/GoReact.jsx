import {useState, useEffect} from 'react'
import '../style/GoReact.css'

// FUnction to insert information for the guide here
function GuideText(){
    
    // Button that increases a counter 
    const [count, setCount] = useState(0)
    
    return (
        <button className="countButton"
        onClick={() => setCount(count + 1)}>
            Count: {count}
        </button>
    )
}

// Main method to return HTML Content
function GoReact(){
    return (
        <div>
            <h1>
                Go React Guide
            </h1>
            <p className="paragraph">
                This guide will show you how to impliment a react frontend with a go backend
            </p>
            <GuideText/>
        </div>
    )
}

export default GoReact;