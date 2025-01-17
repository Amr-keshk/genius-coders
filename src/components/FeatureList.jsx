import React from 'react'

function FeatureList({featureList}) {
  return (
    
    <ul className='grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3'>
      {
        featureList.map(feature => 
          <li key={feature} className='bg-thirdColor p-3 flex gap-2'>
            <i className="fa-regular fa-circle-check bg-green w-4 h-4 rounded-full text-white "></i>
            <span className='uppercase text-sm'>{feature}</span>
          </li>
        )
      }
      
    </ul>
    
  )
}

export default FeatureList