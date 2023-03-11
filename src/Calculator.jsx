import {useRef, useState} from 'react'
import './App.css'

const Calculator = () => {
    const inputRef = useRef(null)
    const resultRef = useRef(null)
    const [result, setResult] = useState(0);

    const plus = (e) =>{
        e.preventDefault();
        setResult((result) => result + Number
        (inputRef.current.value)); 
    };

    const minus = (e) =>{
        e.preventDefault();
        setResult((result) => result - Number
        (inputRef.current.value)); 
    };

    const times = (e) =>{
        e.preventDefault();
        setResult((result) => result * Number
        (inputRef.current.value)); 
    };

    const divide = (e) =>{
        e.preventDefault();
        setResult((result) => result / Number
        (inputRef.current.value)); 
    };

    const resetInput = (e) =>{
        e.preventDefault();
        inputRef.current.value = 0;
    };

    
    const resetResult = (e) =>{
        e.preventDefault();
        setResult((prevVal) => prevVal * 0)
    };

  return (
    <div className='calc'>
        <div>
        <h4>Output</h4>
        </div>
        <form action="">
        <h2 ref={resultRef}>{result}</h2>
            <input 
            type="number"
            pattern="[0-9]"
            ref={inputRef}
            placeholder="Type a number"
            />
            <br />
            <br />
            <button className='plus' onClick={plus}>add</button>
            <button className='minus' onClick={minus}>subtract</button>
            <button className='times' onClick={times}>multiply</button>
            <br />
            <button className='divide' onClick={divide}>divide</button>
            <button className='resetInput' onClick={resetInput}>reset input</button>
            <button className='resetAll' onClick={resetResult}>reset result</button>
        </form>
    </div>
  )
}

export default Calculator