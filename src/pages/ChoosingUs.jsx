import React from 'react'
import Title from '../components/Title'
import FeatureList from '../components/FeatureList'
import { reasonsMakesDifferent } from '../data/data'
import codingKid from "/bg/coding-kid.jpg"
// scratch, pictoblox, AI, html, css, js, react, tailwind, python, nodejs, mongodb, expressjs

function WhyChoosing() {

  const titleIcon = <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#ff9501"><path d="M440-70.77V-160H224.62q-27.62 0-46.12-18.5Q160-197 160-224.62v-510.76q0-27.62 18.5-46.12Q197-800 224.62-800H440v-89.23h40v818.46h-40ZM200-240h240v-287.69L200-240Zm360 80v-320l200 240v-495.38q0-9.24-7.69-16.93-7.69-7.69-16.93-7.69H560v-40h175.38q27.62 0 46.12 18.5Q800-763 800-735.38v510.76q0 27.62-18.5 46.12Q763-160 735.38-160H560Z"/></svg>
  
  return (
    <section className='bg-thirdColor py-20 w-full'>
      <div className='bg-thirdColor max-w-screen-2xl mx-auto px-12 md:px-24 lg:px-44 overflow-x-hidden'>
        {/* <div className='flex'>

          {featureList2.map(feature => {
            return (
              <div key={feature.title} className='flex flex-col items-center space-y-3'>
                <span className='border border-dashed rounded-full flex w-20 h-20 p-2'>
                  {feature.icon}
                </span>

                <span className='font-black text-darkblue'>{feature.describe}</span>
                <h5 className='text-darkblue capitalize font-semibold'>more than 15 courses in programming</h5>
              </div>
            )
          })}
          
        </div> */}
        <div className='flex flex-col md:flex-row'>
          <div className='flex-1'>
            <Title titleIcon={titleIcon}>what makes us <span className='bg-gradient-to-r from-gradientStart to-gradientEnd text-transparent bg-clip-text font-extrabold tracking-wider'>different</span></Title>
            <div>
              <h3 className='font-bold text-2xl text-darkblue'>Real expertise. Real results.</h3>
              <p className='text-darkblue'>At Genius Coders, we don&apos;t just teach — we live what we teach. Our hands-on approach, real-world experience, and genuine care for kids set us apart from typical online programs.</p>
            </div>
            <FeatureList features={reasonsMakesDifferent} icon="fa-solid fa-check text-orange" />
            <button className='bg-green rounded-full text-sm px-8 py-4 text-white capitalize'>find events</button>
          </div>

          <div className='flex-1'>
            <img className='w-full rounded-lg' src={codingKid} alt="" />
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhyChoosing