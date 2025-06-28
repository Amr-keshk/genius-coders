import React from 'react'
import Title from '../components/Title'
import student1 from "/students/saif-ali.jpg"
import student2 from "/students/adam-ali.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Parallax } from 'swiper/modules';
import "swiper/css";
import "swiper/css/bundle"

function Testimonials() {
  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, repellat  adipisicing elit. Dignissimos, repellat?", 
      image: student1,
      name: "Lorem ipsum dolor."
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, repellat?", 
      image: student2,
      name: "Lorem ipsum dolor."
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, repellat  adipisicing elit. Dignissimos, repellat?", 
      image: student1,
      name: "Lorem ipsum dolor."
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, repellat?", 
      image: student2,
      name: "Lorem ipsum dolor."
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, repellat  adipisicing elit. Dignissimos, repellat?", 
      image: student1,
      name: "Lorem ipsum dolor."
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, repellat?", 
      image: student2,
      name: "Lorem ipsum dolor."
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, repellat  adipisicing elit. Dignissimos, repellat?", 
      image: student1,
      name: "Lorem ipsum dolor."
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, repellat?", 
      image: student2,
      name: "Lorem ipsum dolor."
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, repellat  adipisicing elit. Dignissimos, repellat?", 
      image: student1,
      name: "Lorem ipsum dolor."
    },
  ]
  const starIcon = <svg  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m233-120 93-304L80-600h304l96-320 96 320h304L634-424l93 304-247-188-247 188Z"/></svg>
  const titleIcon = <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#000000"><path d="M720-720q-33 0-56.5-23.5T640-800q0-33 23.5-56.5T720-880q33 0 56.5 23.5T800-800q0 33-23.5 56.5T720-720ZM680-80v-320q0-40-20.5-72T607-522l35-103q8-25 29.5-40t48.5-15q27 0 48.5 15t29.5 40l102 305H800v240H680ZM500-500q-25 0-42.5-17.5T440-560q0-25 17.5-42.5T500-620q25 0 42.5 17.5T560-560q0 25-17.5 42.5T500-500ZM220-720q-33 0-56.5-23.5T140-800q0-33 23.5-56.5T220-880q33 0 56.5 23.5T300-800q0 33-23.5 56.5T220-720ZM140-80v-280H80v-240q0-33 23.5-56.5T160-680h120q33 0 56.5 23.5T360-600v240h-60v280H140Zm300 0v-160h-40v-160q0-25 17.5-42.5T460-460h80q25 0 42.5 17.5T600-400v160h-40v160H440Z"/></svg>
  return (
    <section>
      <div className='max-w-screen-2xl mx-auto px-12 md:px-24 lg:px-44 my-20'>
        <Title titleIcon={titleIcon} whichSection={'testimonials'}>what parents say</Title>


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
                    <img className=' h-44 w-full object-cover object-top scale-150 mb-14' src={say.image} alt={`photo for our great student ${say.name}`} />
                    <div className='-rotate-3 flex items-center my-2'>
                      {Array(5).fill().map(star => <span className='fill-orange' key={star}>{starIcon}</span>)}
                    </div>
                    <div className='-rotate-6 bg-lightOrange'>
                      <h4 className='text-green text-xl'>{say.name}</h4>
                      <p className='text-darkblue text-sm'>{say.text}</p>

                    </div>

                  </div>

                </SwiperSlide>

              )}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Testimonials