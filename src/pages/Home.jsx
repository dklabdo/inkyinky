import React from 'react'
import ContactUs from '../Components/ContactUs'
import SideBar from '../Components/SideBar'

function Home() {
  return (
    <div className='relative top-32 px-0 sm:px-8 md:px-20'>
      <section className='w-full relative  pt-20 ' id='contact'>
        <ContactUs/>
        
      </section>
    </div>
  )
}

export default Home