import React from 'react';
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';
// import Header from './components/molecules/header/Header';
import Header from './components/atoms/Header';
import Router from './Router';


function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route>
    //     <div>
    //   <ol>
    //     <li>Home</li>
    //     <li>About</li>
    //     <li>Contact</li>
    //   </ol>
    // </div>
    //     </Route>
    //     <Route path='/' element={ <Home /> }/>
    //     <Route path='/about' element={ <About /> }/>
    //     <Route path='/contact' element={ <Contact /> }/>
    //   </Routes>
    // </BrowserRouter>
    // <Header />
    <>
    {/* <Header /> */}
    <Router />
    </>
  );
}

export default App;
