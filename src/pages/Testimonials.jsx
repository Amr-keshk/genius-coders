import React from 'react'
import Title from '../components/Title'
import saif_ali from "/students/saif2.jpg"
import yahia_ebrahim from "/students/yahia.jpg"
import adam_ali from "/students/adam-ali.jpg"
import hala from "/students/hala.jpg"
import haya from "/students/haya.jpg"
import farida_radwan from "/students/farida1.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Parallax } from 'swiper/modules';
import "swiper/css";
import "swiper/css/bundle"
import Footer from "../components/Footer"
import { useLocation } from 'react-router-dom'

function Testimonials() {

  const location = useLocation()
  const isHomePage = location.pathname === "/"
  const testimonials = [
    {
      text: "Learning to code is fun and helps me build my own projects!",
      image: saif_ali,
      name: "Saif Ali",
      age: 14,
    },
    {
      text: "Every small step takes me closer to becoming a real programmer.",
      image: yahia_ebrahim,
      name: "Yahia Ebrahim",
      age: 9,
    },
    {
      text: "With practice and support, anyone can learn coding.",
      image: farida_radwan,
      name: "Farida Radwan",
      age: 8,
    },
    {
      text: "We enjoy building websites and learning new skills together.",
      image: hala,
      name: "Hala",
      age: 10,
    },
    {
      text: "Coding is not just about computers, it’s about thinking differently.",
      image: haya,
      name: "Haya",
      age: 8,
    },
    {
      text: "The journey starts with one line of code…",
      image: adam_ali,
      name: "Adam Ali",
      age: 9,
    },
  ];

  const starIcon = <svg  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m233-120 93-304L80-600h304l96-320 96 320h304L634-424l93 304-247-188-247 188Z"/></svg>
  const titleIcon = <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#000000"><path d="M720-720q-33 0-56.5-23.5T640-800q0-33 23.5-56.5T720-880q33 0 56.5 23.5T800-800q0 33-23.5 56.5T720-720ZM680-80v-320q0-40-20.5-72T607-522l35-103q8-25 29.5-40t48.5-15q27 0 48.5 15t29.5 40l102 305H800v240H680ZM500-500q-25 0-42.5-17.5T440-560q0-25 17.5-42.5T500-620q25 0 42.5 17.5T560-560q0 25-17.5 42.5T500-500ZM220-720q-33 0-56.5-23.5T140-800q0-33 23.5-56.5T220-880q33 0 56.5 23.5T300-800q0 33-23.5 56.5T220-720ZM140-80v-280H80v-240q0-33 23.5-56.5T160-680h120q33 0 56.5 23.5T360-600v240h-60v280H140Zm300 0v-160h-40v-160q0-25 17.5-42.5T460-460h80q25 0 42.5 17.5T600-400v160h-40v160H440Z"/></svg>
  return (
    <section className={!isHomePage ? "py-20" : ""}>
      <div className='container max-w-screen-2xl mx-auto px-4 sm:px-12 md:px-24 lg:px-44 py-20'>
        <Title titleIcon={titleIcon} whichSection={'testimonials'}>Some of Our Future Coders</Title>
        <div className='flex mt-20'>
          <Swiper
            modules={[Autoplay, Parallax]}
            spaceBetween={50}
            slidesPerView="auto"
            loop={true}
            centeredSlides={true}
            speed={1000}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              reverseDirection: false,
            }}
            className="mySwiper"
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              767: {
                slidesPerView: 2,
              },
              991: {
                slidesPerView: 3,
              },
              1199: {
                slidesPerView: 4,
              },
            }}
          >
            {
              testimonials.map( (say, index) => 
                <SwiperSlide key={say.name + index} className='py-10'>
                  <div className='hover:scale-110 transition duration-500 rotate-3 cursor-pointer overflow-hidden border border-dotted border-orange rounded-md p-6'>
                    <img className='h-44 w-11/12 mx-auto object-cover object-top mb-14' src={say.image} alt={`photo for our great student ${say.name}`} />
                    <div className='-rotate-3 flex items-center my-2'>
                      {Array(5).fill().map((star) => <span className='fill-orange' key={star}>{starIcon}</span>)}
                    </div>
                    <div className='-rotate-6 bg-lightOrange'>
                      <h4 className='text-green text-xl'>{say.name}</h4>
                      <h6 className='font-semibold text-orange'>{say.age} years</h6>
                      <p className='text-darkblue text-sm'>{say.text}</p>

                    </div>

                  </div>

                </SwiperSlide>

              )}
          </Swiper>
        </div>


      </div>
      {
        !isHomePage && <Footer />
      }
    </section>
  )
}

export default Testimonials