import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import MouseTracker from '../../MouseTracker'
import ContactForm from './ContactForm'
const Home = () => {
  return (
    <div>
      <MouseTracker/>
        <Navbar/>
        
        <Hero/>
     
        <About/>
        <ContactForm/>
    </div>
  )
}

export default Home