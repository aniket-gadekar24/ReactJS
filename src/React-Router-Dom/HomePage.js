
import { Link } from "react-router-dom"

function HomePage(){
    return(
        <div>
            <h1>This is Home Page</h1>
            <Link to="/"></Link>
            <Link to="/about">About</Link> <br/>
            <Link to={"/contact"}>Contact</Link> <br/>
            <Link to={"/product"}>Product</Link> <br/>
        
        </div>
    )
}

export default HomePage