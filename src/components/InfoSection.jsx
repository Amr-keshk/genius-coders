import React from 'react'
import Title from './Title'
import FeatureList from './FeatureList'
import { Link } from 'react-router-dom'
function InfoSection ({paragraph, subTitle, title, titleIcon, featureList, linkChild, linkStyle, listFeatureStyle, iconStyle}) {
  return (
    <div className='flex-1 text-darkblue lg:text-start pt-10'>
      <Title titleIcon = {titleIcon}>{title}</Title>
      <h3 className='font-bold md:text-2xl capitalize font-raleway'>{subTitle}</h3>
      <p className='text-sm lg:text-base my-4'>{paragraph}</p>
      <FeatureList listFeatureStyle={listFeatureStyle} features={featureList} icon={iconStyle} />
      <Link to="/" className={`inline-block mt-8 px-8 py-3 rounded-full text-white capitalize duration-300 ${linkStyle}`}>{linkChild}</Link>
    </div>
  )
}

export default InfoSection