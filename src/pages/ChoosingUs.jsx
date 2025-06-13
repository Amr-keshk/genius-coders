import React from 'react'
import Title from '../components/Title'
import FeatureList from '../components/FeatureList'
import { reasonsMakesDifferent } from '../data/data'
import codingKid from "/bg/coding-kid.jpg"
import spaceShip from "/elements/space-ship.png"
import kidAndRobot from "/elements/kid-robot.png"
import paintPic from "/elements/paint3.png"
import AIPic from "/bg/ai-revolution.avif"
import logo from "/logo/logo-white.png"

function WhyChoosing() {

  const titleIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ff9501"><path d="M440-70.77V-160H224.62q-27.62 0-46.12-18.5Q160-197 160-224.62v-510.76q0-27.62 18.5-46.12Q197-800 224.62-800H440v-89.23h40v818.46h-40ZM200-240h240v-287.69L200-240Zm360 80v-320l200 240v-495.38q0-9.24-7.69-16.93-7.69-7.69-16.93-7.69H560v-40h175.38q27.62 0 46.12 18.5Q800-763 800-735.38v510.76q0 27.62-18.5 46.12Q763-160 735.38-160H560Z"/></svg>
  
  return (
    <section className='relative pt-20 w-full'>
      
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

      <div className='moon-box w-full '></div>
      <div className='relative -top-28 max-w-screen-2xl mx-auto px-12 md:px-24 lg:px-44 overflow-x-hidden'>
        <div className='relative'>
          <div className='w-full h-full absolute top-0 left-0 bg-black opacity-25 rounded-tr-3xl rounded-bl-3xl'></div>
          <img className='h-96 w-full object-cover max-sm:object-left bg-green rounded-tr-3xl rounded-bl-3xl' src={AIPic} alt="" />
        </div>
      </div>

      <div className='relative py-20 z-0 flex flex-col xl:flex-row gap-y-16 bg-thirdColor  -- max-w-screen-2xl mx-auto px-12 md:px-24 lg:px-44 overflow-x-hidden'>
        <img className='absolute left-0 top-36 brightness-90 max-w-full' src={logo} alt="" />
        <img className='absolute h-24 right-0 md:right-1/2 top-0 -z-10' src={spaceShip} alt="" />
        <div className='flex-1 relative'>
          <img className='absolute w-40 -bottom-14 xl:bottom-10 -right-16 sm:right-16 z-10 ' src={kidAndRobot} alt="" />
          <Title titleIcon={titleIcon}>what makes us <span className='bg-gradient-to-r from-gradientStart to-gradientEnd text-transparent bg-clip-text font-extrabold tracking-wider'>different</span></Title>
          <div>
            <h3 className='font-black text-4xl text-darkblue'>Real expertise. Real results.</h3>
            <p className='text-darkblue'>At Genius Coders, we don&apos;t just teach — we live what we teach. Our hands-on approach, real-world experience, and genuine care for kids set us apart from typical online programs.</p>
          </div>
          <FeatureList space="gap-0 bg-transparent" features={reasonsMakesDifferent} icon="fa-solid fa-check text-orange px-2 text-base" />
          <button className='hover:bg-orange transition mt-4 bg-green rounded-full text-sm px-8 py-4 text-white capitalize'>find events</button>
        </div>
        <div className='flex-1 mx-auto relative bg-sate-500'>
          <img className='w-3/4 mx-auto rounded-lg' src={codingKid} alt="" />
          <img className='absolute w-32 right-0 -top-16 -z-10' src={paintPic} alt="" />
        </div>
      </div>      
    </section>
  )
}

export default WhyChoosing