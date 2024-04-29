import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export function Navbare() {
  return (
     
    <nav className='Navbare'>
        <div className='midle'>
            <Link to="/home " className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">home</Link>
            <Link to="/Category" className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Category</Link>
            <Link to="/ContactUs">Contact Us</Link>
            <Link to="/AboutUs">About Us</Link>
        </div>
        <div className='leftside'>
            <Link to="/home"className='font-bold'>inkyhouse</Link>
        </div>
<div className='rightside'>


</div>
        
     
    </nav>
    
  )
}
export default Navbare

