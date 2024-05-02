import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export function Footer() {
  return ( <>
  
  <div className='bg-main h-auto md:h-[430px] py-20 flex flex-col gap-32 justify-center items-center w-screen text-white px-12 '> 
  <div className='gap-3 md:flex  md:gap-20  lg:gap-52  '>
        <div className=' text-left   md:w-1/2 h-full '>
        <h2 className='text-2xl uppercase my-8 font-bold'>inkyhouse </h2>
        <p className='text-xs'>At ARTPILLAR, we offer professional painting services for restaurants, homes, offices, and more. Our experienced team of painters is dedicated to delivering exceptional results with attention to detail and superior craftsmanship. Whether you're looking to refresh the interior of your restaurant, enhance the curb appeal of your home, or update the look of your office space, we've got you covered. </p>
        </div>
        <div className='flex md:w-1/2 '> 
            <div className=' flex flex-col  text-left mt-7  w-1/3'>
                <h3 className='font-bold'>navigation </h3>
                <a href="">service </a>
                <a href="">Agency </a>
                <a href="">Resource </a>
                <a href="">Contact </a>
                <a href="">FAQs </a>
            </div>
            <div className='flex flex-col  text-left mt-7 w-1/3'>
                <h3 className='font-bold'>Licences </h3>
                <a href="">Privacy Policy </a>
                <a href="">Copyright </a>
                <a href="">Email Address </a>
                
            </div>
            <div className='flex flex-col text-left   mt-7 w-1/3'>
                <h3 className='font-bold '>Contacts </h3>
                <a href=""> (406) 555-0120</a>
                <a href="">hey@gmail.com</a>
                <a href="">Sidi Bel Abbes</a>
               
            </div>
        </div>
  </div>
  <p className='font-light'>all right reserved for inkyhouse 2023 &copy; </p>
  
  
   </div>
  
  
  
  </>









  )}
  export default Footer