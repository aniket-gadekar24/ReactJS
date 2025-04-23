import { useContext } from "react"
import {ThemeContext} from "./AllContext"


function ThemeButton(){

    const {Theme , setTheme} = useContext(ThemeContext)

    const toggleTheme = ()=>{
        setTheme((prev)=> prev==="light"? "dark" : "light")
    }
    
    return(
        <div>
            <h1>Child Conponet </h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}

export default ThemeButton