import { useState } from 'react'
import { Router, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Checkout from './pages/Checkout'
function App() {
   
  return (
    
    <div className='App'>
      <Navbar/>
      <Checkout/>
      

    </div>
  ); }
export default App;

