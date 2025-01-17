import React from 'react'
import childOne from "/bg/about2.png"
import childTwo from "/bg/about5.png"
import Title from '../components/Title';
import { Link } from "react-router-dom";
import ReasonCard from "../components/ReasonCard.jsx"
import FeatureList from "../components/FeatureList.jsx"

function About() {
  const childImages = [childOne, childTwo];
  const featureList = [
    "quality educators",
    "modern technologies",
    "interactive classes",
    "customized learning plans"
  ];

  const reasons = [
    {
      "title": "expert instructors",
      "describe" : "learn from certified professionals with years of practical experience",
      "icon" : "fa-graduation-cap"
    },
    {
      "title": "hands-on practice",
      "describe" : "engage in interactive projects and build a portfolio from day one",
      "icon": "fa-cogs"
    },
    {
      "title": "supportive community",
      "describe" : "join a network of learners and mentors who support your journey",
      "icon": "fa-handshake"
    }
  ];
  return (
    <section className='w-full py-28 bg-thirdColor'>
      <div className='bg-white max-w-screen-2xl mx-auto px-12 md:px-24 lg:px-44 overflow-x-hidden'>
        <Title>about us</Title>
        <ReasonCard reasons={reasons} />
        <div className='flex flex-col gap-6 items-center lg:flex-row lg:items-start'>
        <div className='flex-1 flex items-end justify-center gap-4'>
          <img className='bg-yellow-500 h-40 sm:h-60 w-28 sm:w-36 object-top object-cover rounded-t-full rounded-b-full' src={childImages[0]} alt="a child learning coding" />
          <img className='bg-yellow-500 h-52 sm:h-80 w-28 sm:w-48 object-top object-cover rounded-t-full rounded-b-full' src={childImages[1]} alt="a child learning programming" />
        </div>
          <div className='flex-1 text-darkblue text-center lg:text-start'>
            <h3 className='font-bold text-xl capitalize'>it&apos;s our passion to work with children at <span className='text-orange uppercase'>Genius Coders</span></h3>
            <p className='text-sm lg:text-base my-4'>At Genius Coders, we are passionate about working with children because they are the foundation of tomorrow&#39;s technological advancements. We aim to build a generation that keeps pace with the rapid evolution of technology</p>
            <FeatureList featureList={featureList} />
            <button className="mt-8 p-8 bg-orange rounded-full text-white text-sm uppercase hover:bg-green hover:text-primaryTextColo hover:-translate-y-4 lg:hover:translate-y-0 lg:hover:translate-x-6 duration-300 ">
              <Link to="/">learn from experts</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About