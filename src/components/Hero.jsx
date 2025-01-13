import React from 'react'
import bg from "/bg/hero_image1.png"
import paperRocket1 from "/elements/paper_rocket1.png"
import paperRocket from "/elements/paper_rocket.png"
import sunVideo from "/elements/sun_video1.gif"
import astro from "/elements/astro.gif"
import engineer from "/elements/engineer.jpg"
import { Link } from 'react-router-dom'
function Hero() {
  return (
    <div className=''>

      <div className='flex flex-col lg:flex-row lg:items-center w-full h-screen pt-[90px] px-8 sm:px-12 md:px-24 relative '>
        <div className='layer absolute top-0 left-0 bottom-0 right-0 bg-secondaryColor bg-opacity-0 -z-10'></div>
        <div className='elements'>
          <img className='max-w-sm absolute -right-28 lg:-right-0 top-24 -z-10' src={sunVideo} alt="Sun animation representing innovation" />
          <img className='absolute w-24 lg:w-48 left-1/2 md:left-2/3 top-80 lg:left-32 lg:top-32 -z-20' src={paperRocket1} alt="Paper rocket flying towards the future" loading="lazy"/>
          <img className='absolute w-20 lg:w-40 bottom-10 sm:bottom-32 right-4 lg:right-32 rotate-0' src={paperRocket} alt="Paper rocket flying towards the future" loading="lazy"/>
        </div>

        <div className='flex-1 lg:flex-initial lg:w-4/6 xl:flex-1 flex justify-center flex-col'>

          <h1 className="text-primaryTextColor font-bold uppercase">today, learning <strong className='text-primaryColor'>programming</strong> is essential, <span className='block'>not optional</span></h1>
          <ul className='text-primaryTextColor sm:my-8 '>
            <li className='flex items-center gap-4 font-medium'><i className="fa-solid fa-brain"></i>Hands-on practical applications in every session.</li>
            <li className='flex items-center gap-4 font-medium'><i className="fa-solid fa-child-reaching"></i>Expert in practical children&apos;s education</li>
            <li className='flex items-center gap-4 font-medium'><i className="fa-solid fa-award"></i>Taught by a certified engineer</li>
          </ul>

          <div className='text-secondaryColor font-bold capitalize'>
            <span className='block mb-6 text-xl'>Join us and start building the future</span>
            <button>
              <Link to="/contact" className='relative'>
                <span className='uppercase bg-primaryColor p-2 my-4 sm:p-4 hover:bg-secondaryColor rounded-e-full hover:text-primaryColor transition-all duration-500'>start for free</span>
                <img className='min-w-60 absolute left-1/2 top-1/2 -translate-y-1/2 -z-10' src={astro} alt="Astronaut in space representing future learning journey" />
              </Link>
            </button>
          </div>

        </div>


        <div className='flex-1 lg:flex-initial lg:w-2/6 xl:flex-1'>
          <img className='max-w-full mx-auto' src={bg} alt="Astronaut in space representing future learning journey" loading="lazy" />
        </div>

      </div>
    </div>
  )
}

export default Hero