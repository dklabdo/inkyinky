import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Search, ShoppingBag } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
export function Navbare() {
  const navigate = useNavigate();
  return (
     
    <nav className='fixed'>
       <h1 onClick={()=>navigate('/home')} className='cursor-pointer font-bold text-lg text-main'>
        INKYHOUSE
       </h1>
        <div className='middle  '>
            <Link to="/home " className="link">home</Link>
            <Link to="/Category" className="link">Category</Link>
            <Link to="/ContactUs" className='link'>Contact Us</Link>
            <Link to="/AboutUs" className='link' >About Us</Link>
        </div>
        <div className='flex gap-4 '>
          <Search size={30} />
          <ShoppingBag size={30} />
        </div>

        
     
    </nav>
    
  )
}
export default Navbare

