import { useState } from 'react'
import { Router, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Checkout from './pages/Checkout'
import Home from './pages/Home'
import Allposters from './pages/Allposters'
import Orderpage from './pages/Orderpage'
import Buy from './pages/Buy'
function App() {
   
  return (
    
    <div className='App'>
      <Navbar/>
      
      <Routes>
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/allposters' element={<Allposters/>} />
        <Route path='/buy:' element={<Buy/>} />
        <Route path='/oderpage' element={<Orderpage/>} />
        
      </Routes>
      

    </div>
  ); }
export default App;

