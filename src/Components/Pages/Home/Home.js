import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import MouseTracker from '../../MouseTracker'
const Home = () => {
  return (
    <div>
      <MouseTracker/>
        <Navbar/>
        <MouseTracker/>
        <Hero/>
        <MouseTracker/>
        <About/>
    </div>
  )
}

export default Home