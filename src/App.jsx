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
import Panier from './Components/Panier'
import { useContext } from "react";
import { AppContext } from './AppProvider'
function App() {
  const {openPanier} = useContext(AppContext)

   
  return (
    <div className={`h-screen w-full ${openPanier && 'overflow-y-hidden'}`} >
    
    <SideBar/>
    <div className='w-full'>
      
      
   
      <Routes>
        
        <Route path='/checkout' element={<><Navbar/><Checkout/> <Panier/><Footer/></> } />
        <Route path='/home' element={<><Navbar/><Home/><Panier/><Footer/></>} />
        <Route path='/' element={<><Navbar/><Home/><Panier/><Footer/></>} />
        <Route path='/Category' element={<><Navbar/><Allposters/><Panier/><Footer/></>} />
        <Route path='/orderPage' element={<><Navbar/><Order/><Panier/><Footer/></>} />
        <Route path='/admin' element={<><Admin/><Panier/></>} />
        
      </Routes>
      
      
     
    </div>
    
    
    </div>
    
    
  ); }
export default App;

