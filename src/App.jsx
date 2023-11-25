import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skill from './pages/Skill';
import Service from './pages/Service';
import Contact from './pages/Contact';


function App() {
  return (
    <>
    <BrowserRouter>
       <Routes>
        <Route path='/' element = {<Home/>} ></Route>
        <Route path='/About' element={<About/>} ></Route>
        <Route path='/Skill' element={<Skill/>}></Route>
        <Route path='/Service' element={<Service/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
       </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
