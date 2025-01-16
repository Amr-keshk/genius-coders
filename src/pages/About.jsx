import about1 from "/bg/about2.png"
import about2 from "/bg/about5.png"
import Title from '../components/Title';
import { Link } from "react-router-dom";

function About() {

  const academyFeatures = ["quality educators", "modern technologies", "interactive classes", "customized learning plans"];
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
  ]
  return (
    <section className='w-full py-28 bg-thirdColor'>
      <div className='bg-white max-w-screen-2xl mx-auto px-12 md:px-24 lg:px-44 overflow-x-hidden'>
        <Title>about us</Title>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full h-auto my-20'>
          {
            reasons.map((feature, index) => {
              return (
                <div key={feature.title} className=' even:bg-primaryColor even:text-white bg-thirdColor text-primaryTextColor flex flex-col justify-center gap-6 h-80 p-8 rounded-[3rem]  '>
                  <i className={`fa-solid ${feature.icon} flex justify-center items-center w-20 h-20 text-4xl rounded-full flex-shrink-0 ${index % 2 === 0 ? "bg-primaryColor text-white" : "bg-white text-primaryColor"}`}></i>
                  <h4 className='text-xl font-bold uppercase'>{feature.title}</h4>
                  <p>{feature.describe}</p>
                </div>
              )
            })
          }
        </div>


        <div className='flex flex-col gap-6 items-center lg:flex-row lg:items-start'>
          <div className='flex-1 flex items-end justify-center gap-4'>
            <img className='bg-yellow-500 h-40 sm:h-60 w-28 sm:w-36 object-top object-cover rounded-t-full rounded-b-full' src={about2} alt="a child learning coding" />
            <img className='bg-yellow-500 h-52 sm:h-80 w-28 sm:w-48 object-top object-cover rounded-t-full rounded-b-full' src={about1} alt="a child learning programming" />
          </div>

          <div className='flex-1 text-primaryTextColor text-center lg:text-start'>
            <h3 className='font-bold text-xl capitalize'>it&apos;s our passion to work with children at <span className='text-secondaryColor uppercase'>Genius Coders</span></h3>
            <p className='text-sm lg:text-base my-4'>At Genius Coders, we are passionate about working with children because they are the foundation of tomorrow&#39;s technological advancements. We aim to build a generation that keeps pace with the rapid evolution of technology</p>

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

            <button className="mt-8 p-8 bg-secondaryColor rounded-full text-white text-sm uppercase hover:bg-primaryColor hover:text-primaryTextColo hover:-translate-y-4 lg:hover:translate-y-0 lg:hover:translate-x-6 duration-300 ">
              <Link to="/">learn from experts</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About