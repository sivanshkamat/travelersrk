import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from "./Home"
import About from "./About"
import Feed from "./Feed"
import Contact from "./Contact"
import {Routes, Route} from "react-router-dom"
import Navbar from './Navbar'
const App = () => {
  return(
    <>
    <Navbar />
    <Routes>
    <Route exact path='/' element={<Home/>} />
    <Route exact path='/About' element={<About/>} />
    <Route exact path='/Contact' element={<Contact/>} />
    <Route exact path='/Feed' element={<Feed/>} />
    </Routes>
    </>
  );
};


export default App;
