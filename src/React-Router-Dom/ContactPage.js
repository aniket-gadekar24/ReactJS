import { Link } from "react-router-dom"

function ContactPage(){
    return(
        <div>
            <h1>
                This is ContactPage
            </h1>
            <Link to={"/"}>Back to Home</Link>
        </div>
    )
}

export default ContactPage