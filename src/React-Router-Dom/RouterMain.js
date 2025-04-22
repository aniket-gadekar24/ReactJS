import React from "react"
import { BrowserRouter,Routes,Route, Link } from "react-router-dom"
import AboutPage from "./AboutPage"
import ContactPage from "./ContactPage"
import Product from "./Product"
import HomePage from "./HomePage"


function RouterMain(){
    return (
        <div>
           <BrowserRouter>

             <h1>This is Router Page for React Router Dom Demo...</h1>

            
            {/* <Link to="/"></Link>
            <Link to="/about">About</Link> <br/>
            <Link to={"/contact"}>Contact</Link> <br/>
            <Link to={"/product"}>Product</Link> */}

            
                <Routes>
                    {/* <Route path="/" element={<RouterMain/>}/> */}
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/contact" element={<ContactPage/>}/>
                    <Route path="Product" element={<Product/>}/>

                    
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default RouterMain