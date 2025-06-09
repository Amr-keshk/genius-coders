import React from 'react'

function FeatureList({features, icon}) {
  return (
    
    <ul className='grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3'>
      {
        features.map(feature => 
          <li key={feature} className='bg-thirdColor p-3 flex gap-2'>
            <i className={icon}></i>
            <h6 className='uppercase font-bold text-darkblue'>{feature}</h6>
          </li>
        )
      }
      
    </ul>
    
  )
}

export default FeatureList