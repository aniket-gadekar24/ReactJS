import { useState } from 'react'
import {CounterContext} from '../AllContext'
import CounterDisplay from './CounterDisplay'
import CounterDisplaySec from './CounterDisplaySec';

function CounterProvider(){

    const [count , setCount ] = useState(0);

    const Increment = ()=>{
        setCount((count)=>count+1)
    }

    const Decrement = ()=>{
        setCount((count)=>count-1)
    }

    const Reset = ()=>{
        setCount((count)=>count=0)
    }

    return(
        <div>
            <CounterContext.Provider value={{count,Increment,Decrement,Reset}}>
                <h1>Counter Provider</h1>
                <CounterDisplay/>
                <CounterDisplaySec/>
            </CounterContext.Provider>
        </div>
    )
}

export default CounterProvider