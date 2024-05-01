import { useState } from 'react'
import { Router, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Checkout from './pages/Checkout'
import Home from './pages/Home'
import Allposters from './pages/Allposters'
import Orderpage from './pages/Orderpage'
import Buy from './pages/Buy'
import SideBar from './Components/SideBar'
function App() {
   
  return (
    <>
    <Navbar/>
    <SideBar/>
    <div className='w-full  h-screen'>
      
      
   
      <Routes>
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/Category' element={<Allposters/>} />
        <Route path='/buy:' element={<Buy/>} />
        <Route path='/oderpage' element={<Orderpage/>} />
        
      </Routes>
      
      

    </div>
    </>
    
    
  ); }
export default App;

