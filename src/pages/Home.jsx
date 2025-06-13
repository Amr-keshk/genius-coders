import React from 'react'

import Hero from '../components/Hero'
import About from '../pages/About'
import ChoosingUs from './ChoosingUs'
import Footer from '../components/Footer'

function Home() {
  return (
    <div >
      <Hero />
      <About />
      <ChoosingUs />
      <Footer />
    </div>
  )
}

export default Home