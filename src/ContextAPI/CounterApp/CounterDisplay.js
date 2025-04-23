import { useContext } from "react"
import { CounterContext } from "../AllContext"

function CounterDisplay(){
    const {count , Increment, Decrement,Reset} = useContext(CounterContext)
    return(
        <div>
            <h1>1st Counter</h1>
            <h1>{count}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}

export default CounterDisplay