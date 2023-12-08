import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import MouseTracker from '../../MouseTracker'
import ContactForm from './ContactForm'
import Skill from './Skills'
import Projects from './Projects'
const Home = () => {
  return (
    <div>
      <MouseTracker/>
        <Navbar/>
        
        <Hero/>
     
        <About/>
        <ContactForm/>
        <Skill/>
        <Projects/>
    </div>
  )
}

export default Home