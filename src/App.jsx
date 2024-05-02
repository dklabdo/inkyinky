import { useState } from 'react'
import { Router, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Checkout from './pages/Checkout'
import Home from './pages/Home'
import Allposters from './pages/Allposters'
import SideBar from './Components/SideBar'
import Footer from './Components/Footer'
import Order from './pages/Order'
import Admin from './pages/Admin'
function App() {
   
  return (
    <>
    <Navbar/>
    <SideBar/>
    <div className='w-full  '>
      
      
   
      <Routes>
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/Category' element={<Allposters/>} />
        <Route path='/orderPage' element={<Order/>} />
        <Route path='/admin' element={<Admin/>} />
        
      </Routes>
      
      
     
    </div>
    <Footer/>
    
    </>
    
    
  ); }
export default App;

