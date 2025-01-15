import React from 'react'
import about1 from "/bg/about2.png"
import about2 from "/bg/about5.png"
import Title from './Title';

function MainAbout() {

  const academyFeatures = ["quality educators", "modern tools", "interactive classes", "customized learning plans"];
  const reasons = [
    {
      "title": "expert instructor",
      "describe" : "learn from certified professionals with years of industry experience"
    },
    {
      "title": "Tailored curriculum",
      "describe" : "our courses are designed to match real-world demands and individual learning paces"
    },
    {
      "title": "hands-on practice",
      "describe" : "engage in interactive projects and build a portfolio from day one"
    },
    {
      "title": "affordable pricing",
      "describe" : "we provide top-quality education at competitive rates"
    },
    {
      "title": "supportive community",
      "describe" : "join a network of learners and mentors who support your journey"
    },
    {
      "title": "felxible learning options",
      "describe" : "choose between online and in-person classes to fit your schedule"
    }
  ]
  return (
    <section className='w-full'>
      <div className='bg-white max-w-screen-2xl mx-auto px-12 md:px-24 lg:px-44 overflow-x-hidden'>
        <Title>about us</Title>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full h-auto mb-28'>
          {
            reasons.map(feature => {
              return (
                <div key={feature.title} className=' even:bg-primaryColor even:text-white flex flex-col justify-center gap-6 h-80 p-8 rounded-[3rem] bg-thirdColor text-primaryTextColor'>
                  <i className="fa-solid fa-puzzle-piece"></i>
                  <h4 className='text-xl font-bold uppercase'>{feature.title}</h4>
                  <p>{feature.describe}</p>
                </div>
              )
            })
          }
        </div>


        <div className='flex flex-col gap-6 items-center lg:flex-row lg:items-start'>
          <div className='flex-1 flex items-end justify-center gap-4'>
            <img className='bg-yellow-500 h-40 sm:h-60 w-28 sm:w-36 object-top object-cover rounded-t-full rounded-b-full' src={about2} alt="" />
            <img className='bg-yellow-500 h-52 sm:h-80 w-28 sm:w-48 object-top object-cover rounded-t-full rounded-b-full' src={about1} alt="" />
          </div>

          <div className='flex-1 text-primaryTextColor'>
            <h3 className='font-bold text-xl capitalize'>it&apos;s our passion to work with children at <span className='text-secondaryColor uppercase'>Genius Coders</span></h3>
            <p className='text-sm lg:text-base my-4'>It is our passion to work with children because we believe that they are the building blocks of the future and we are in dire need of a generation that keeps pace with technology</p>

            <ul className='grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3'>
              {
                academyFeatures.map(feature => 
                  <li key={feature} className='bg-thirdColor p-3 flex gap-2'>
                    <i className="fa-regular fa-circle-check bg-primaryColor w-4 h-4 rounded-full text-white "></i>
                    <span className='uppercase text-sm'>{feature}</span>
                  </li>
                )
              }
              
            </ul>
          </div>


        </div>
      </div>
    </section>
  )
}

export default MainAbout