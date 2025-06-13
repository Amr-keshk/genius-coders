import React from "react";
import childOne from "/bg/about2.png"
import childTwo from "/bg/about5.png"
import cloud from "/elements/cloud.png"
import Title from '../components/Title';
import { Link } from "react-router-dom";
import ReasonCard from "../components/ReasonCard.jsx"
import FeatureList from "../components/FeatureList.jsx"
import { featureList, reasons } from "../data/data.js"
import planet from "/elements/planet2.png"
import dinos from "/elements/dinos-bg.png"
function About() {
  const childImages = [childOne, childTwo];
  const titleIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ff9501"><path d="m618-358 44-42-84-84q11-17 16.5-36t5.5-40q0-59-41.5-99.5T460-700q-57 0-98.5 40.5T320-560q0 59 41.5 99.5T460-420q21 0 39.5-5.5T536-442l82 84ZM460-480q-33 0-56.5-23.5T380-560q0-33 23.5-56.5T460-640q32 0 56 23.5t24 56.5q0 33-23.5 56.5T460-480ZM160-240q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240H160Zm0-80h640v-440H160v440Zm0 0v-440 440ZM40-120v-80h880v80H40Z"/></svg>
  return (
    <section className='w-full py-28 relative'>
      <div className='bg-white max-w-screen-2xl mx-auto px-12 md:px-24 lg:px-44 relative'>
        <ReasonCard reasons={reasons} />
        <div className='flex flex-col gap-6 items-center lg:flex-row lg:items-start'>
          <div className='flex-1 flex items-end justify-center gap-4'>
            <div className="relative">
              <span className="block w-4 h-4 bg-red-500 rounded-full"></span>
              <img className='bg-yellow-500 h-40 sm:h-80 w-28 sm:w-44 object-top object-cover rounded-t-full rounded-b-full -mb-6' src={childImages[0]} alt="a child learning coding" />
            </div>
            <div className="relative">
              <img className="absolute -top-2/4 brightness-50 scale-150" src={planet} alt="" />
              <span className="block ml-auto -mr-12 w-8 h-8 bg-orange rounded-full"></span>
              <img className='bg-yellow-500 h-52 sm:h-[28rem] w-28 sm:w-56 object-top object-cover rounded-t-full rounded-b-full' src={childImages[1]} alt="a child learning programming" />
              <span className="block ml-auto mr-8 mt-6 w-4 h-6 bg-green rounded-full"></span>
            </div>
          </div>
          <img className="absolute w-20 left-0 " src={cloud} alt="cloud element" />
          <div className='flex-1 text-darkblue text-center lg:text-start pt-10'>
            <Title titleIcon = {titleIcon}>about us</Title>
            <h3 className='font-bold text-3xl capitalize'>it&apos;s our passion to work with children at <span className='text-orange uppercase'>Genius Coders</span></h3>
            <p className='text-sm lg:text-base my-4'>At Genius Coders, we are passionate about working with children because they are the foundation of tomorrow&#39;s technological advancements. We aim to build a generation that keeps pace with the rapid evolution of technology</p>
            <FeatureList features={featureList} icon="fa-regular fa-circle-check bg-green w-4 h-4 rounded-full text-white" />
            <button className="mt-8 px-8 py-6 bg-orange rounded-full text-white text-sm uppercase hover:bg-green hover:-translate-y-4 lg:hover:translate-y-0 lg:hover:translate-x-6 duration-300 ">
              <Link to="/">learn from experts</Link>
            </button>
          </div>
        </div>
      </div>

      <img className="absolute -bottom-20 right-0 h-56" src={dinos} alt="" />

    </section>
  )
}

export default About