import React from 'react'
import Title from './Title'
function WhyChoosing() {
  const reasons = [
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
    <div className='bg-thirdColor'>
      <Title>what makes us different</Title>
      <div>
        <h3>new approach to fun</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde a eius sunt optio nisi blanditiis?</p>

      </div>
      <div>

      </div>
    </div>
  )
}

export default WhyChoosing