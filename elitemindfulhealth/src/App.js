import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Aboutus from './Pages/Aboutus';
import Services from './Pages/Services';
import Specialization from './Pages/Specialization';
import Resources from './Pages/Resources';
import Contactus from './Pages/Contactus';

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Aboutus/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/specialization' element={<Specialization/>}/>
      <Route path='/resources' element={<Resources/>}/>
      <Route path='/contactus' element={<Contactus/>}/>
 
      </Routes>
    </Router>
  )
}

export default App
