import React from 'react'
import bg from "/bg/hero_image1.png"
import paperRocket1 from "/elements/paper_rocket1.png"
import paperRocket from "/elements/paper_rocket.png"
import sunVideo from "/elements/sun_video1.gif"
import astro from "/elements/astro.gif"
import { Link } from 'react-router-dom'
function Hero() {
  return (
    <div className='flex flex-col lg:flex-row lg:items-center w-full h-screen pt-[90px] px-8 sm:px-12 md:px-24 lg:px-44 relative overflow-hidden'>
      <div className='layer absolute top-0 left-0 bottom-0 right-0 bg-secondaryColor bg-opacity-0 -z-10'></div>
      <img className='max-w-sm absolute -right-28 lg:-right-0 top-24 -z-10' src={sunVideo} alt="" />
      <img className='absolute w-24 lg:w-48 left-1/2 md:left-2/3 top-80 lg:left-32 lg:top-32 -z-20' src={paperRocket1} alt="" />
      <img className='absolute w-20 lg:w-40 bottom-32 right-4 lg:right-32 rotate-0' src={paperRocket} alt="" />

      <div className='flex justify-center flex-col uppercase flex-1 text-2xl md:text-4xl'>
        <p className='text-primaryColor md:text-5xl sm:mb-8'><span className='block'>your future is <strong className='text-secondaryColor'>here</strong></span><span className='block my-6'>to learn and play</span>for kids</p>
        <h1 className='text-secondaryColor font-bold capitalize'>
          <span className='block mb-12'>your coding Journey</span>
          <button>
            <Link to="/contact" className='relative'>
              <span className='uppercase bg-primaryColor p-2 my-4 sm:p-4 hover:bg-secondaryColor rounded-e-full hover:text-primaryColor transition-all duration-500'>starts here</span>
              <img className='w-48 sm:w-60 absolute left-full top-0 ' src={astro} alt="" />
            </Link>
          </button></h1>
      </div>
      <div className='flex-1 px-8 '>
        <img className='w-5/6 mx-auto' src={bg} alt="genius and successful kids" loading="lazy" />
      </div>
    </div>
  )
}

export default Hero

// jaturat