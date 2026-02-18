import {useState} from 'react';
import styles from '../style/GoReact.module.css'

function TextBoxInput(){

    // Use state effect to detect changes in the text box
    const [text, setText] = useState('');

    // Set settings for an input, the n
    return (
        <div>
        <input 
            type="text" 
            value={text} 
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter some text..."
        />
        <p>You typed: {text}</p>
        </div>
    );

}

export default TextBoxInput;