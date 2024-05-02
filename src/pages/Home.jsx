import React from 'react'
import ContactUs from '../Components/ContactUs'
import SideBar from '../Components/SideBar'
import Footer from '../Components/Footer'
import Order from '../Components/Order'

function Home() {
  return (
    <div className='relative top-32 px-0 '>
      <section className='w-full relative my-52 pt-20 ' id='contact'>

        <ContactUs/>
        <Order/>
        
        
      </section>
      <Footer/>
    </div>
  )
}

export default Home