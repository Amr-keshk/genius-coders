import React from 'react'
import Title from '../components/Title'
function WhyChoosing() {
  const featureList = [
    {
      "title": "affordable pricing",
      "describe" : "we provide top-quality education at competitive rates",
      "icon": "fa-dollar-sign"
    },
    {
      "title": "Tailored curriculum",
      "describe" : "our courses are designed to match real-world demands and individual learning paces",
      "icon": "fa-book"
    },
    {
      "title": "flexible learning options",
      "describe" : "choose between online and in-person classes to fit your schedule",
      "icon": "fa-mobile-alt"
    }
  ]
  return (
    <div className='bg-thirdColor py-28 w-full'>
      <div className='bg-white max-w-screen-2xl mx-auto px-12 md:px-24 lg:px-44 overflow-x-hidden'>
        <Title>what makes us <span className='bg-gradient-to-r from-gradientStart to-gradientEnd text-transparent bg-clip-text font-extrabold tracking-wider'>different</span></Title>
        <div>
          <h3>new approach to fun</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde a eius sunt optio nisi blanditiis?</p>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default WhyChoosing