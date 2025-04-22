import React, { useEffect, useState } from "react"

function BasicUseEffect(){
    const [count , setCount] = useState(0);

    useEffect(()=>{
        console.log(`counter is clicked ${count}`)
         let interval = setInterval(()=>{
            setCount(count+1)
        },1000)

        clearInterval(interval)
    },[])
    return (
        <div>
            <h1>this is useEffect</h1>

            <h1>{count}</h1>
        
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    )
}

export default BasicUseEffect