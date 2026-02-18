import {useState} from 'react';
import styles from '../style/GoReact.module.css'

function AddTextComponent({id, onRemove}){
    
    if (id <= 4){
        return (
            <div>
                You clicked me! Here is another paragraph. #{id}<br/>
            </div>
        )
    } else if (id === 5){
        return (
            <div>
                You clicked me! Here is another paragraph. #{id}. This is the LAST one!<br/>
            </div>
        )
    }

    else {
        return null;
    }
    
}

function GuideText(){
    // Usestates allow the developer to add flags that WILL TRIGGER CHANGES BASED ON USER ACTION
    const [textItems, setTextItems] = useState([])  // Store simple data

    const handleAddText = () => {
        // Add a new item with unique ID
        setTextItems([
            ...textItems, 
            {id: textItems.length + 1}
        ])
    }

    return (
        <div>
            
            <button className={styles.basicButton}
            onClick={handleAddText}>
                Click me to add more text!
            </button>

            {/* Map data to components */}
            {textItems.map(item => (
                <AddTextComponent key={item.id} id={item.id} onRemove={() => setTextItems(textItems.filter(i => i.id !== item.id))} />
            ))}
            
            <br/>
        </div>
    )
}

export default GuideText;