import React from 'react'
import bg from "/bg/hero_image1.png"
import paperRocket1 from "/elements/paper_rocket1.png"
import paperRocket from "/elements/paper_rocket.png"
import animatedSun from "/elements/sun_video1.gif"
import astro from "/elements/astro.gif"
import { Link } from 'react-router-dom'
import { HelmetProvider, Helmet } from "react-helmet-async"
function Hero() {
  return (
    <div className='w-full bg-secondaryColor'>
      <div className='bg-white flex flex-col gap-y-8 lg:flex-row lg:items-center max-w-screen-2xl mx-auto min-h-screen py-28 px-12 md:px-24 lg:px-44 relative z-0 overflow-hidden'>
        
        <HelmetProvider>
          <Helmet>
            <title>Genius Coders - Learn Programming for Kids</title>
            <meta name="description" content="Join Genius Coders and learn programming in a fun, interactive way with practical applications in every session, taught by a certified engineer!" />
          </Helmet>
        </HelmetProvider>
        <div className='elements h-full w-full absolute top-0 left-0 -z-10'>
          <img className='max-w-sm absolute -right-28 lg:-right-0 top-24' src={animatedSun} alt="Sun animation representing innovation" />
          <img className='absolute w-24 lg:w-48 left-1/2 md:left-2/3 top-80 lg:left-32 lg:top-32' src={paperRocket1} alt="Paper rocket flying towards the future" loading="lazy"/>
          <img className='absolute w-20 lg:w-40 bottom-32 right-4 lg:right-32 rotate-0' src={paperRocket} alt="Paper rocket flying towards the future" loading="lazy"/>
        </div>

        <div className='sm:text-2xl md:text-3xl flex-1 lg:flex-initial lg:w-4/6 xl:flex-1 flex flex-col gap-4'>

          <h1 className="text-primaryTextColor font-bold uppercase">today, <strong className='text-primaryColor'>programming</strong> is essential, <span className='block'>not optional</span></h1>
          <ul className='flex flex-col gap-2 text-primaryTextColor sm:my-8 '>
            <li className='flex items-center gap-4 font-medium'><i className="fa-solid fa-brain text-primaryColor"></i>practical application in every session</li>
            <li className='flex items-center gap-4 font-medium'><i className="fa-solid fa-child-reaching text-secondaryColor"></i>Expert in practical children&apos;s education</li>
            <li className='flex items-center gap-4 font-medium'><i className="fa-solid fa-award"></i>Taught by a certified engineer</li>
          </ul>

          <div className='text-secondaryColor font-bold capitalize'>
            <span className='block mb-10 text-xl'>Join us and start building the future</span>
            <button>
              <Link to="/contact" className='relative' aria-label="Start learning programming for free with Genius Coders">
                <span className='uppercase bg-primaryColor my-4 p-3 sm:p-6 hover:bg-secondaryColor rounded-e-full hover:text-primaryColor transition-all duration-500'>start for free</span>
                <img className='min-w-60 absolute left-2/3 top-1/2 -translate-y-1/2 -z-10' src={astro} alt="Astronaut in space representing future learning journey" />
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