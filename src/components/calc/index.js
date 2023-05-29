import React, { useState } from 'react';
import './style.css';

export default function Calc(){
    const[num, setNum] = useState(0);
    const[oldNum, setOldNum] = useState();
    const[operator, setOperator] = useState();

    function inset(e){
        let input = e.target.value;

        if(num === 0){
            setNum(input);
        }
        else{
            setNum(num + input);
        }
        
    }

    function clear(){
        setNum('');
    }

    function operation(e){
        let input = e.target.value;
        setOldNum(num)
        setOperator(input)
        setNum('')
    }

    function equal(){
        if(operator === '-'){
            setNum(parseFloat(oldNum) - parseFloat(num));
        }

        else if(operator === '+'){
            setNum(parseFloat(oldNum) + parseFloat(num));
        }

        else if(operator === '/'){
            setNum(parseFloat(oldNum) / parseFloat(num));   
        }

        else if(operator === '*'){
            setNum(parseFloat(oldNum) * parseFloat(num));
        }

        console.log(oldNum);
        console.log(operator);
        console.log(num);
    }

    return(
        <div className='calc'>
            <div className='screen'><p>{num}</p></div>

            <div className='keyboard-container'>
                <div className='op-container'>
                    <button onClick={operation} value={'+'}>+</button>
                    <button onClick={operation} value={'-'}>-</button>
                    <button onClick={operation} value={'*'}>X</button>
                    <button onClick={operation} value={'/'}>/</button>
                </div>
                
                <div className='nm-container'>
                    <button onClick={inset} value={7}>7</button>
                    <button onClick={inset} value={8}>8</button>
                    <button onClick={inset} value={9}>9</button>
                    <button onClick={inset} value={4}>4</button>
                    <button onClick={inset} value={5}>5</button>
                    <button onClick={inset} value={6}>6</button>
                    <button onClick={inset} value={1}>1</button>
                    <button onClick={inset} value={2}>2</button>
                    <button onClick={inset} value={3}>3</button>
                    <button onClick={inset} value={0} className='radius'>0</button>
                    <button onClick={inset} value={'.'}>.</button>
                    <button className='ac' onClick={clear}>AC</button>
                </div>

                <div className='equal-container'>
                    <button onClick={equal}>=</button>
                </div>                               
            </div>
        </div>
    )
}