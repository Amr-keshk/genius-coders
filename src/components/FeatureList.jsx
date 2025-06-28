import React from 'react'

function FeatureList({features, icon, listFeatureStyle}) {
  return (
    
    <ul className={`grid grid-cols-1 sm:grid-cols-2 ${listFeatureStyle ? listFeatureStyle : "gap-x-4 gap-y-3" }`}>
      {
        features.map(feature => 
          <li key={feature} className={`bg-thirdColor p-3 flex items-center ${listFeatureStyle ? listFeatureStyle : "gap-2"}`}>
            <i className={icon}></i>
            <h6 className='uppercase font-bold text-darkblue text-xs sm:text-sm'>{feature}</h6>
          </li>
        )
      }
      
    </ul>
    
  )
}

export default FeatureList