import React from "react"
import bg1 from "/bg/about4-1.webp"
import bg6 from "/bg/Kids_Robotic.png"
import paperRocket1 from "/elements/paper_rocket1.png"
import paperRocket from "/elements/paper_rocket.png"
import animatedSun from "/elements/sun_video1.gif"
import astro from "/elements/astro.gif"
import flyingRocket from "/elements/flying_rocket.webp"
import { Link } from 'react-router-dom'
import { mainFeatures } from "../data/data.js"
import { Helmet } from "react-helmet-async"
import cloud from "/elements/cloud.png"
import threeLines from "/elements/three-lines.png"
import bird from "/elements/greeting-bird.png"
function Hero() {
  return (
    <section className='w-full relative'>
      <img className="fixed left-0 top-10 sm:top-20 z-10 w-20 sm:w-28" src={bird} alt="" />
      <div className='bg-lightOrange flex flex-col gap-y-28 lg:flex-row lg:items-center min-h-screen py-28 container max-w-screen-2xl mx-auto px-4 sm:px-12 md:px-24 lg:px-44 relative z-0 overflow-hidden'>
        <Helmet>
          <title>Genius Coders - Learn Programming for Kids</title>
          <meta name="description" content="Join Genius Coders and learn programming in a fun, interactive way with practical applications in every session, taught by a certified engineer!" />
          <link rel="preload" as="image" href="/bg/about4-1.webp" />
          <link rel="preload" as="image" href="/bg/about6-1.webp" />
        </Helmet>
        <div className='elements h-full w-full absolute top-0 left-0 -z-10'>
          <img className='max-w-sm absolute -right-28 lg:-right-0 top-24' src={animatedSun} alt="Sun animation representing innovation" />
          <img className='absolute w-24 lg:w-48 left-1/2 md:left-2/3 top-80 lg:left-32 lg:top-32' src={paperRocket1} alt="Paper rocket flying towards the future" loading="lazy"/>
          <img className='absolute w-20 lg:w-40 bottom-32 right-4 lg:right-32 rotate-0' src={paperRocket} alt="Paper rocket flying towards the future" loading="lazy"/>
          <img className="absolute w-20 bottom-10 left-1/2" src={cloud} alt="cloud element" />
          <span className="absolute text-orange bottom-96 font-bold right-20">✕</span>
        </div>
        <div className='sm:text-2xl md:text-3xl flex-1 lg:flex-initial lg:w-4/6 xl:flex-1 flex flex-col gap-4'>
          <h1 className="text-darkblue text-4xl md:text-6xl font-bold capitalize"><span className='block'>today,</span><u className='text-green'><strong>programming</strong></u> is essential, <span className=''>not optional</span></h1>
          <ul className='flex flex-col gap-2 text-darkblue sm:my-8 '>
            {
              mainFeatures.map(feature => <li key={feature} className='flex items-center gap-4 font-medium'>{feature}</li>)
            }
          </ul>
          <div className='text-orange font-bold capitalize'>
            <span className='block mb-10 text-xl'>Join us and start building the future</span>
            <div className='flying_container relative w-fit'>
              <button className='hover:-translate-x-6 duration-300'>
                <Link to="/contact">
                  <span className='uppercase bg-green text-white my-4 p-3 sm:p-6 hover:bg-orange rounded-xl duration-300'>try for free</span>
                </Link>
              </button>
              <img className='astro min-w-60 absolute left-2/3 top-1/2 -translate-y-1/2 -z-10' src={astro} alt="Astronaut in space representing future learning journey" />
              <img  className={`flying_rocket w-20 opacity-0 hidden rotate-40 absolute top-0 left-full`} src={flyingRocket} alt="flying rocket to coding world" />
            </div>
          </div>
        </div>
        <div className='mx-auto'>
          <div className="flex max-sm:flex-col max-sm:space-y-20 min-h-[30rem]">
            <div className="relative flex-1 h-72 max-w-96 rounded-tl-full rounded-b-full bg-orange">
              <span className="absolute text-orange top-0 font-bold -left-10">✕</span>
              <img className='h-80 -mt-14 object-cover object-top mx-auto' src={bg1} alt="Astronaut in space representing future learning journey" loading="lazy" />
              <img className='absolute -top-20 left-8 w-16 -scale-x-100' src={threeLines} alt="Astronaut in space representing future learning journey" loading="lazy" />
            </div>
            <div className="flex-1 self-end h-72 max-w-96 rounded-t-full rounded-br-full bg-green">
              <img className='h-80 object-cover -mt-20 mb-5' src={bg6} alt="Astronaut in space representing future learning journey" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero