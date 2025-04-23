import { useContext } from "react"
import { CounterContext } from "../AllContext"

function CounterDisplaySec(){
    const {count , Increment, Decrement,Reset} = useContext(CounterContext)
    return(
        <div>
            <h1>2nd Counter</h1>
            <h1>{count}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}

export default CounterDisplaySec