import React, { useRef } from 'react'

function UseRef() {

    const  myRef = useRef(null)
    console.log(myRef)

    function handleBG(color){
        if(myRef.current){
            console.log(myRef)
            myRef.current.style.backgroundColor = color
        }
    }

  return (
    <div>
        Aniket
        <div ref={myRef} style={{width:"100%", height:"200px", border: "2px solid black"}} >
            <button onClick={()=>handleBG("red")}>Red</button>
            <button onClick={()=>handleBG("pink")}>Pink</button>
            <button onClick={()=>handleBG("blue")}>Blue</button>
            <button onClick={()=>handleBG("black")}>Black</button>
        </div>
    </div>
  )
}

export default UseRef
