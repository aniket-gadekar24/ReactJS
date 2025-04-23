import react, {  useState } from 'react'
import './ContextAPIMain.css'
import ThemeButton from './ThemeButton';
import {ThemeContext} from './AllContext';
import CounterProvider from './CounterApp/CounterProvide';

function ContextAPIMain (){

    const [Theme, setTheme] = useState("light")
    
    return (
        <ThemeContext.Provider value={{Theme,setTheme}}>
            <div className={`parentDiv ${Theme}`}>
                <h1>Context API Parent Container</h1>
                <ThemeButton/>
            </div>
        </ThemeContext.Provider>


    )
}

export default ContextAPIMain ;