import React, { useState } from 'react'

function UseStae() {
    const [count , setCount ] = useState(0)
  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={(()=> setCount(count +1 ))}>Increment</button>
      <button onClick={()=>setCount(count -1 )}>Decrement</button>
    </div>
  )
}

export default UseStae
