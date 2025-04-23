import SlidingAnimation from './Animation/SlidingAnimation';
import './App.css';
import Props from './concept/Props';
import Counterr from './Hooks/useState/UseRef/Counterr';
import UseRef from './Hooks/useState/UseRef/UseRef';
import UseStae from './Hooks/useState/UseStae';
import BasicUseEffect from "./Hooks/useState/UseEffect/BasicUseEffect"
import RouterMain from './React-Router-Dom/RouterMain'
import ContextAPIMain from './ContextAPI/ContextAPIMain';
import CounterProvider from './ContextAPI/CounterApp/CounterProvide';



function App() {
  
  let person = {
    name : "aniket",
    age : 25,
    city : "pune"
  }
  return (
    <div className="App">
        {/* <Props  person={person} person2="jivan" person3="pankaj"/> */}

        {/* <UseStae/> */}
        {/* <UseRef/>
        <Counterr/> */}
        {/* <SlidingAnimation/>
        <BasicUseEffect/> */}


        {/* <RouterMain/> */}

        {/* <ContextAPIMain/> */}

        <CounterProvider/>
    </div>
  );
}

export default App;
 


// React Router Dom ************************************************************************************************************

// // App.js
// import React from 'react';
// import { BrowserRouter, Routes, Route, Link, useParams, Navigate } from 'react-router-dom';

// function Home() {
//   return <h2>🏠 Welcome to the Home Page</h2>;
// }

// function About() {
//   return <h2>ℹ️ About This Blog</h2>;
// }

// function BlogDetail() {
//   const { About } = useParams();
//   return <h2>📝 Viewing blog with ID: {About}</h2>;
// }

// function GrandChild(){
//   const {grandparent } = useParams() 
//   // const {parent} = useParams()
//   const {grandchild} = useParams()
//   return <h2>here is all params :  {grandchild} {grandparent} </h2>
// }

// function App() {
//   return (
//     <BrowserRouter>
//       {/* <nav>
//         <Link to="/">Home</Link> | 
//         <Link to="/about">About</Link> | 
//         <Link to="/blog/101">Blog 101</Link> | 
//         <Link to="/home">Redirect Test</Link>
//       </nav> */}

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/blog/:id" element={<BlogDetail />} />
//         <Route path="/home" element={<Navigate to="/" />} />
//         <Route path="/:grandparent/parent/:grandchild" element={<GrandChild/>} />
//         {/* 404 fallback */}
//         <Route path="*" element={<h2>404 - Page not found</h2>} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
