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
    <Navbar/>
    <SideBar/>
    <div className='w-full'>
      
      
   
      <Routes>
        
        <Route path='/checkout' element={<><Checkout/> <Panier/></> } />
        <Route path='/home' element={<><Home/><Panier/></>} />
        <Route path='/' element={<><Home/><Panier/></>} />
        <Route path='/Category' element={<><Allposters/><Panier/></>} />
        <Route path='/orderPage' element={<><Order/><Panier/></>} />
        <Route path='/admin' element={<><Admin/><Panier/></>} />
        
      </Routes>
      
      
     
    </div>
    <Footer/>
    
    </div>
    
    
  ); }
export default App;

