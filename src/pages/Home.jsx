import React from 'react'
import Hero from '../components/Hero'
import About from '../pages/About'
import WhyChoosing from './WhyChoosing'
function Home() {
  return (
    <div >
      <Hero />
      <About />
      <WhyChoosing />
    </div>
  )
}

export default Home