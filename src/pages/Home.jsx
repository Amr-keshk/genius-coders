import React from 'react'

import Hero from '../components/Hero'
import About from '../pages/About'
import ChoosingUs from './ChoosingUs'
import Testimonials from "./Testimonials"
import Footer from '../components/Footer'
import Contact from './Contact'

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <ChoosingUs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home