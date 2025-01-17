import React from 'react'

function ReasonCard({reasons}) {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full h-auto my-20'>
        {
          reasons.map((feature, index) => {
            return (
              <div key={feature.title} className=' even:bg-green even:text-white bg-thirdColor text-darkblue flex flex-col justify-center gap-6 h-80 p-8 rounded-[3rem]  '>
                <i className={`fa-solid ${feature.icon} flex justify-center items-center w-20 h-20 text-4xl rounded-full flex-shrink-0 ${index % 2 === 0 ? "bg-green text-white" : "bg-white text-green"}`}></i>
                <h4 className='text-xl font-bold uppercase'>{feature.title}</h4>
                <p>{feature.describe}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ReasonCard