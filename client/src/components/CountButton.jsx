import {useState} from 'react';
import styles from '../style/GoReact.module.css'

function CountButton(){
            
    const [count, setCount] = useState(0)

    return (
        <button className={styles.basicButton}
            onClick={() => setCount(count + 1)}>
            Count: {count}
        </button>
    )
}

export default CountButton;