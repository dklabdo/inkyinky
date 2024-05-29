import React from 'react'
import img from '../assets/test.png'
import { Link } from 'react-router-dom'
function Hero() {
  return (
    <div className='w-full  '>
        <div className="w-full   h-[600px] block relative text-center mx-auto ">
        <img className="w-full h-full  brightness-50" src={img} alt="ggg" />
        <h2 className="   absolute -translate-x-2/4 -translate-y-2/4 text-[white] font-medium text-[16px] left-2/4 top-[100px]">Poster Collection</h2>
        <p className="absolute -translate-x-2/4 -translate-y-2/4 text-[white] font-[400] text-[36px] left-2/4 xs2:text-[24px] top-[200px]">Transforming Walls, Inspiring Minds</p>
        <Link className="link hover:border-[#003C43] hover:border-[3px] hover:text-[#003C43] hover:bg-white  absolute -translate-x-2/4 -translate-y-2/4 text-[white] font-medium text-[16px] no-underline bg-[#003C43] rounded-xl px-8 py-3 left-2/4 top-[338px]" to="/Category">Shop Now</Link>
      </div>
      <h3 className=" text-center text-[48px] xs:text-[36px] pt-12 font-normal " >Featured Posters</h3>
      <p className=" text-center text-[16px] font-normal " >Unveil the Exceptional: Explore Our Handpicked Showcase of Premier Posters.</p>

    </div>
  )
}

export default Hero